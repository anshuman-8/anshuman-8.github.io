---
title: Basic Understanding of Stable Diffusion(No Maths)
slug: 23-10-16-stable-diffusion-basic-understanding
description: This is a basic blog on understanding stable diffusion without any math or deep understanding of computer vision.
date: "16 Oct 2023"
tags:
  - AI
  - Computer Vision
  - Diffusion
cover_image: 23-10-16-stable-diffusion-basic-understanding/hero-noise.png
---

This is a basic blog on understanding stable diffusion without any math or deep understanding of computer vision.

If you want to read the code for stable diffusion, I have written it here : [PyTorch Latent Diffusion](https://github.com/anshuman-8/PyTorch-Latent-Diffusion)

In short, how stable diffusion works is that we start with noise (a random image) and use a U-Net model to predict and remove noise from the noise in steps. We also use a self-attention mechanism and a CLIP model (more about it later) to make the image more towards the prompt.
<!-- 
![Untitled](Stable%20Diffusion%20Basic%20Understanding(No%20Maths)%20f6ef52af2293484285c6dee3d6838c38/Untitled%201.png) -->

Let’s dig a bit deeper in the diffusion model. 

### Pure Diffusion model

Lets start with, what is a pure diffusion model?

A Diffusion model can be seen in two parts, Forward diffusion and a reverse diffusion process.

In the forward diffusion model, we add noise to an image in steps. In reverse diffusion we remove the noise from a sample and generate an image.

The paper which defined the process of adding noise and then denoising is given in - Denoising diffusion probabilistic models  ([arxiv.org/pdf/2006.11239.pdf](https://arxiv.org/pdf/2006.11239.pdf))

![Pure Diffusion](/blog-assets/23-10-16-stable-diffusion-basic-understanding/diffusion.png)

### Training Process

For the forward process of stable diffusion we add gaussian noise from steps 1 to 1000, where 1st is the real image sample and sample 1000 is a complete noise. We can do this by using the normal distribution defined in the paper (No Maths!).

For the reverse diffusion we train a U-Net model to predict the noise. We pass the noisy image along with time step positional encoding. Like if I pass the image from step x_50 to predict the image with step x_49, where 50 and 40 are the time steps, I also pass along the positional encoding (will talk about it later) of the image in the U-Net .

### The Problem

The problem with the above steps is that running a pure diffusion model directly on an image takes a lot of computation and has a lot of parameters to learn. A single image of size 512 has a 3x512x512 number of values.


So the solution to this problem was solved in the paper - High-Resolution Image Synthesis with Latent Diffusion Models. Here they have used a Variational autoencoder to bring down the image to a latent space. The dimensions of latent space is 4x64x64, benefits of this are that we have to learn very less number of parameters, and a special thing about variational autoencoders is that they give similar encoding to images that are similar.

### Latent Diffusion Model

Paper : [arxiv.org/pdf/2112.10752.pdf](https://arxiv.org/pdf/2112.10752.pdf)

Latent Diffusion is also called the Stable diffusion model. As told before, to improve the training process the image is first made into a latent using a variational auto encoder and the diffusion process adds noise to its latent space. Later, we also use a decoder to get back the image from the latent space.

But, to make a text-to-image model where you can direct the image generation, we use conditioning, which is a process of steering the noise prediction so that after the noise subtraction we get our desired results.

So the whole stable diffusion process can be divided into 4 different parts - 

- Variational Autoencoder Model
- CLIP Model
- U-Net noise prediction model
- Scheduler

Lets discuss few of them.

![stable-diffusion](/blog-assets/23-10-16-stable-diffusion-basic-understanding/stable-diffusion.png)
The above diagram is from the paper High-Resolution Image Synthesis with Latent Diffusion Models arXiv:2112.10752v2


### Variational Autoencoder

Autoencoders are neural networks used for dimensionality reduction. It takes an image and reduces it to a encoded data with fewer number of features. This makes the training faster as the number of parameters required is less for image in encoded space or latent space.

But, just autoencoders are not enough for content generation. This is because the encoded space generated is not regular enough for the same image type. Therefore, we use Variational Autoencoder.

Also, instead of encoding an image as a single point in a space, we encode it as a distribution over the latent space. Which means similar images will have close encoding.

This can also be divided into two parts: one is a Variational encoder which makes an image into a latent space, and then the other is Decoder which gets back the image from the latent space.

For more read refer - [Understanding-variational-autoencoders-vaes-f70510919f73](https://towardsdatascience.com/understanding-variational-autoencoders-vaes-f70510919f73)

### CLIP Model

CLIP stands for Contrastive Language-Image Pre-Training, which is a model first trained my OpenAI. In stable diffusion the CLIP is used for conditioning, i.e. generate images as given in the prompt. It is also like the variational encoder which brings down the dimentions into a meaningful encoding.

After passing the prompt, we tokenize it which breaks the sentences into tokens and assign a vector to each token. This are then passed through the CLIP embedding which gives out an embedding or context which can be used my the U-Net.

### U-Net Model

This is the most important part of whole stable diffusion, here we do the noise prediction on an image. The latent space from the variational autoencoder is passed through the U-Net along with the context from the CLIP model and timestep from scheduler.

This is very similar to the original U-Net, only difference is the input.output channel and the use of attention blocks(more about in other blog) between the residual blocks. The attention blocks do the self attention and  cross attention using the image sample and the prompt context, this conditions the U-Net to predict noise for desired results.

Read this for basic U-Net understanding -  [https://towardsdatascience.com/unet-line-by-line-explanation-9b191c76baf5](https://towardsdatascience.com/unet-line-by-line-explanation-9b191c76baf5)


This is how Stable diffusion model works in general.
