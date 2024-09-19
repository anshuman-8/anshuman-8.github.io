---
title: What is temperature scaling?
slug: 24-09-18-temperature-scaling
description: Basic understanding and implimentaion of temperature scaling in machine learning
date: "18 Sep 2024"
tags:
  - ML
  - Deep Learning
  - Post-hoc
cover_image: 24-09-18-temperature-scaling/temp-scale-banner.png
---

### What is temperature scaling (in short)

Temperature scaling is a post-processing technique to make neural networks calibrated. After temperature scaling, you can trust the probabilities output by a neural network. The model’s prediction probability is calibrated by scaling using the temperature value.


### What is Calibration in machine learning

A model is said to be perfectly calibrated if the predicted probabilities of outcomes align closely with the actual outcomes.

For instance, if a model predicts an event with a 70% probability, then ideally, out of 100 such predictions, approximately 70 should result in the event actually occurring. The probability associated with the predicted class label should reflect its ground truth correctness likelihood.

![Reliablity-Curve](/blog-assets/24-09-18-temperature-scaling/reliablity-curve.png)

Fig 1 A and B

However, many experiments have revealed that modern neural networks are no longer well-calibrated. Modern deep learning models are usually overly confident in their predictions. Such overconfidence can be problematic, especially in applications where the predicted probabilities are used to make critical decisions.  In the figure 1 the left one align with the accuracy of the model across all confidence level and the right one can’t. Some of the samples appear to have high confidence between 0.8 and 0.9 but the accuracy is just about 0.5. This means that the model confidence means nothing to tell about how is its performance.

The above Plot is called **Reliability** curve. If the model is perfectly calibrated, the points on the curve will fall along the diagonal line (y = x). Points above the diagonal indicate underconfidence, while points below indicate overconfidence. For example in the below plot we can see an overconfident model where the predictions are far below the diagonal line. This indicates that the model assigns high confidence to predictions even when they are incorrect.

![Reliablity-Curve-2](/blog-assets/24-09-18-temperature-scaling/reliablity-curve-2.png)

Fig 2

Here is an amazing blog explaining model calibration - [Are Model Predictions Probabilities? - By PAIR](https://pair.withgoogle.com/explorables/uncertainty-calibration/)

### How temperature scaling works

In classification problem the model output (logits) before passing through the softmax is scaled, and then passed through the softmax to give model probabilities.

![Temperature scaling formula](/blog-assets/24-09-18-temperature-scaling/temp-formula.png)

In above formula, Pi is the probability of that class, zj is the logit and T is the temperature value.

Temperature scaling uses a single scalar parameter *T* > 0, where *T* is the temperature, to rescale logit scores before applying the softmax function, as shown in the following figure. Because the same *T* is used for all classes, the softmax output with scaling has a monotonic relationship with unscaled output. In overconfident models where *T* > 1, the recalibrated probabilities have a lower value than the original probabilities, and they are more evenly distributed between 0 and 1. When *T* = 1, you recover the original probability with the default softmax function.

In simple terms, temperature scaling adjusts how confident a model is about its predictions. If a model is overconfident (i.e., predicting high probabilities for wrong predictions), temperature scaling ‘softens’ these predictions. By adjusting a temperature parameter (T), we can reduce the confidence of overly confident predictions without changing the model’s underlying structure.

### Benefits of temperature scaling

As discussed above it helps us calibrate the model and makes the model probabilities more reliable. In high-stakes environments where decisions based on these predictions can affect human lives, financial stability, or critical infrastructure (example: healthcare and autonomous driving). The probability associated with the predicted class label should reflect its ground truth correctness likelihood. Good confidence estimates provide a valuable extra bit of information to establish trustworthiness on the model.

### Code

To implement temperature scaling, we need to adjust the logits of our neural network outputs before applying softmax. The following Python class shows how we train the temperature parameter to improve calibration:

Below is the class to to train the temperature parameter for a model

```python
class TemperatureScaling(nn.Module):
    def __init__(self):
        super(TemperatureScaling, self).__init__()
        self.temperature = nn.Parameter(torch.ones(1) * 1.5 )  # Initialize temperature parameter

    def forward(self, logits):
        # Scale logits by temperature
        return self.temperature_scale(logits)
    
    def temperature_scale(self, logits):
        temperature = self.temperature.unsqueeze(1).expand(logits.size(0), logits.size(1))
        return logits / temperature
```

Load the pre-trained model from its checkpoint

```python
inference_model = # load_from_checkpoint(model_checkpoint)
temp_scaling = TemperatureScaling()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.LBFGS([temp_scaling.temperature], lr=0.05, max_iter=60)
```

The optimize_temperature function uses the validation set of the dataset to train the temperature parameter.

```python
def optimize_temperature(inference_model, temp_scaling, val_loader, optimizer, criterion, device):
    inference_model.to(device).eval()  # Ensure the model is in evaluation mode
    temp_scaling.to(device).train()  # Set temperature scaling layer to training mode for optimization
    def closure():
        optimizer.zero_grad()
        losses = []

        for batch in tqdm(val_loader):
            images, labels, paths, patient_name, features = batch
            inputs = images.to(device)
            labels = labels.to(device)
            feature = features.to(device)
            with torch.no_grad():
                logits = inference_model(inputs, feature)  # Get logits from the model
            scaled_logits = temp_scaling(logits)  # Scale logits using the temperature layer
            loss = criterion(scaled_logits, labels)  # Calculate loss
            losses.append(loss.item())
            loss.backward()  # Backpropagate to update temperature
        temp_value = temp_scaling.temperature.detach().cpu().numpy()
        return sum(losses) / len(losses)
    optimizer.step(closure)
```