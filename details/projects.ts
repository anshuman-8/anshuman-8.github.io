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
        description: "Retriever-based QA using Llama-2 (13b). Extract insights from multiple PDF files through interactive questioning using LLMs",
        image: "/projects/llama-aaraki.jpg",
        // link: "https://githubduel.vercel.app/",
        source: "https://github.com/anshuman-8/Aaraki",
        tags: [ "LLMs", "Langchain", "Llama-2", "Pinecone"]
    },
    {
        title: "Caption Mosaic",
        description: "A Image captioning model with pre-inject architecture trained on flickr30k dataset, using ResNet101 and LSTM from scratch.",
        image: "/projects/caption-mosaic.png",
        source: "https://github.com/anshuman-8/CaptionMosaic",
        tags: [ "Pytorch", "ResNet101", "LSTM", "Flicker30k"]
    },
    {
        title: "GAN Face Generator",
        description: "Face generator using GANs, trained on CelebA dataset.",
        image: "/projects/face-gen.png",
        source: "https://github.com/anshuman-8/GAN-face-gen",
        tags: [ "Pytorch", "GAN", "CelebA"]
    },
    {
        title: "Amrita Stewardship",
        description: "A Web app for doctors to manage septic patients, and manage their daily reports",
        image: "/projects/stewardship-portal.png",
        source: "https://github.com/anshuman-8/antibiotic-stewardship-site",
        tags: ["Next.js", "Medical", "Django", "GraphQL"]
    },
    {
        title: "CIR Internship Portal",
        image: "/projects/cir-internship.png",
        description: "Portal for the CIR Department of my college so that they can conveniently approve and validate the internships receved by students",
        link: "https://cir-internship.vercel.app/",
        source: "https://github.com/anshuman-8/github-duel",
        tags: ["Next.js", "MongoDB"]
    },
    {
        title: "JUNO Cam Editor",
        description: "Python GUI program for modifying and enhancing the satellite images from the JUNO mission for producing images with more details.",
        image: "/projects/juno-cam.png",
        source: "https://github.com/anshuman-8/JUNO-CAM-Editor",
        tags: ["Python", "PyQT", "NASA-challenge", "NumPy"]
    },
    {
        title: "GitHub Duel",
        image: "/projects/github-duel.png",
        description: " This site compares your GitHub Profile to your friends, and analyses and tells your GitHub profile score too. ",
        link: "https://githubduel.vercel.app/",
        source: "https://github.com/anshuman-8/github-duel",
        tags: ["Next.js", "Tailwind CSS", "Github API", "Vercel"]
    },
    {
        title: "Pocket Tracker",
        image: "/projects/pocket-tracker.png",
        description: "Pocket tracker is a money management app for every common man's usage.",
        link: "",
        source: "https://github.com/anshuman-8/gect_hackathon",
        tags: ["Flutter", "Firebase", "Dart"]
    }, {
        title: "Binary Destination Planner",
        image: "/projects/destination-planner.png",
        description: "Helps you decide your destination for your next trip, with just two options.",
        link: "https://benevolent-toffee-72d52c.netlify.app/#/",
        source: "https://github.com/anshuman-8/binary_travel_planner",
        tags: ["Flutter", "Unsplash API", "Netlify"]
    }, {
        title: "Daily Task Tracker",
        description: "App that ease your daily work, from ToDo and tasks, scanning & generating QR to finding best movie.",
        link: "",
        source: "https://github.com/anshuman-8/task-tracker",
        tags: ["Flutter", "Dart", "API"]
    }
]