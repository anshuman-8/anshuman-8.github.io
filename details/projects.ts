interface IProjects{
    title: string;
    description: string;
    link?: string;
    source: string,
    image?: string;
    tags: string[];

}

export const projects: IProjects[] = [
    {
        title: "Aaraki",
        description: "A retriever-augmented QA system using Llama-2 (13B) that enables interactive questioning across multiple PDF documents. Leverages vector embeddings and semantic search to extract meaningful insights from document collections.",
        image: "/projects/llama-aaraki.jpg",
        // link: "https://githubduel.vercel.app/",
        source: "https://github.com/anshuman-8/Aaraki",
        tags: [ "LLMs", "LangChain", "Llama-2", "Pinecone"]
    },
    {
        title: "Caption Mosaic",
        description: "An image captioning model with pre-inject architecture trained on Flickr30k dataset, using ResNet101 and LSTM architectures implemented from scratch. Generates descriptive captions for images through deep learning.",
        image: "/projects/caption-mosaic.png",
        source: "https://github.com/anshuman-8/CaptionMosaic",
        tags: [ "PyTorch", "ResNet101", "LSTM", "Flickr30k"]
    },
    {
        title: "GAN Face Generator",
        description: "A Generative Adversarial Network (GAN) implementation that generates realistic human faces. Trained on the CelebA dataset, this project demonstrates deep learning capabilities in generative modeling.",
        image: "/projects/face-gen.png",
        source: "https://github.com/anshuman-8/GAN-face-gen",
        tags: [ "PyTorch", "GAN", "CelebA"]
    },
    {
        title: "Amrita Stewardship",
        description: "A comprehensive web application for healthcare professionals to manage septic patients and maintain daily medical reports. Features patient tracking, report generation, and streamlined workflow management for medical teams.",
        image: "/projects/stewardship-portal.png",
        source: "https://github.com/anshuman-8/antibiotic-stewardship-site",
        tags: ["Next.js", "Medical", "Django", "GraphQL"]
    },
    {
        title: "CIR Internship Portal",
        image: "/projects/cir-internship.png",
        description: "A comprehensive portal for the CIR Department to efficiently manage, approve, and validate student internships. Streamlines the internship workflow with automated validation and approval processes.",
        link: "https://cir-internship.vercel.app/",
        source: "https://github.com/anshuman-8/github-duel",
        tags: ["Next.js", "MongoDB"]
    },
    {
        title: "JUNO Cam Editor",
        description: "A Python-based GUI application for processing and enhancing satellite images from NASA's JUNO mission. Features image modification tools and enhancement algorithms to reveal more details from space imagery.",
        image: "/projects/juno-cam.png",
        source: "https://github.com/anshuman-8/JUNO-CAM-Editor",
        tags: ["Python", "PyQt", "NASA Challenge", "NumPy"]
    },
    {
        title: "GitHub Duel",
        image: "/projects/github-duel.png",
        description: "A fun comparison tool that analyzes and compares GitHub profiles. Features include profile scoring, contribution analysis, and side-by-side comparisons to help developers understand their coding activity patterns.",
        link: "https://githubduel.vercel.app/",
        source: "https://github.com/anshuman-8/github-duel",
        tags: ["Next.js", "Tailwind CSS", "GitHub API", "Vercel"]
    },
    {
        title: "Pocket Tracker",
        image: "/projects/pocket-tracker.png",
        description: "A user-friendly money management mobile application designed for everyday financial tracking. Features expense categorization, budget management, and financial insights to help users maintain better control over their finances.",
        link: "",
        source: "https://github.com/anshuman-8/gect_hackathon",
        tags: ["Flutter", "Firebase", "Dart"]
    }, {
        title: "Binary Destination Planner",
        image: "/projects/destination-planner.png",
        description: "An interactive travel planning tool that simplifies destination selection through a binary decision-making process. Features beautiful destination imagery and helps users choose their next travel destination by comparing two options at a time.",
        link: "https://benevolent-toffee-72d52c.netlify.app/#/",
        source: "https://github.com/anshuman-8/binary_travel_planner",
        tags: ["Flutter", "Unsplash API", "Netlify"]
    },     {
        title: "Daily Task Tracker",
        description: "A versatile productivity app that simplifies daily work management. Features include task tracking, QR code scanning and generation, and movie recommendations. An all-in-one solution for personal organization.",
        link: "",
        source: "https://github.com/anshuman-8/task-tracker",
        tags: ["Flutter", "Dart", "API"]
    }
]