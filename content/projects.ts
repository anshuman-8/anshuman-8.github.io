interface IProjects{
    title: string;
    description: string;
    link?: string;
    source: string,
    tags: string[];

}

export const projects: IProjects[] = [
    {
        title: "GitHub Duel",
        description: " This site compares your GitHub Profile to your friends, and analyses and tells your GitHub profile score too. ",
        link: "https://githubduel.vercel.app/",
        source: "https://github.com/anshuman-8/github-duel",
        tags: ["Next.js", "Tailwind CSS", "Github API", "Vercel"]
    },
    {
        title: "Pocket Tracker",
        description: "Pocket tracker is a money management app for every common man's usage.",
        link: "",
        source: "https://github.com/anshuman-8/gect_hackathon",
        tags: ["Flutter", "Firebase", "Dart"]
    }, {
        title: "Binary Destination Planner",
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