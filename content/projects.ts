interface IProjects{
    title: string;
    description: string;
    link?: string;
    source: string,
    tags: string[];

}

export const projects: IProjects[] = [
    {
        title: "Portfolio",
        description: "This website is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        link: "https://portfolio-ashen.vercel.app/",
        source: "",
        tags: ["Next.js", "Tailwind CSS", "Vercel"]
    },
    {
        title: "Portfolio1",
        description: "This website is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        link: "https://portfolio-ashen.vercel.app/",
        source: "",
        tags: ["Next.js", "Tailwind CSS", "Vercel"]
    }, {
        title: "Portfolio2",
        description: "This website is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        link: "https://portfolio-ashen.vercel.app/",
        source: "",
        tags: ["Next.js", "Tailwind CSS", "Vercel"]
    }, {
        title: "Portfolio3",
        description: "This website is built with Next.js and Tailwind CSS. It is hosted on Vercel.",
        link: "https://portfolio-ashen.vercel.app/",
        source: "",
        tags: ["Next.js", "Tailwind CSS", "Vercel"]
    }
]