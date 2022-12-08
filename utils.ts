export interface Nav {
  href: string;
  title: string;
}

export interface Project {
  title: string;
  description: string;
  live: string | null;
  github: string | null;
  tags: string[] | null;
  desLink?: string;
}

export type Socials = {
  name: string;
  link: string;
  icon: React.ReactNode;
};

export const navigation: Nav[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/explore",
    title: "Explore",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/articles",
    title: "Articles",
  },
  {
    href: "/resume",
    title: "Resume",
  },
];

export const pinnedProjects: Project[] = [
  {
    title: "AlgoVisual",
    description:
      "Algorithm Visualizer for Sorting, Searching and Graph Traversal algorithms",
    live: "https://jf-algo-visual.vercel.app/",
    github: "https://github.com/jomefavourite/algo-visual",
    tags: ["Nextjs", "Typescript", "Tailwindcss"],
  },
  {
    title: "PlanDone",
    description:
      "PlanDone is made for Students who would like to learn smart, be productive and access everything they need while studying in one place.",
    live: "https://plandone.onrender.com/",
    github: "https://github.com/jomefavourite/PlanDone",
    tags: ["Node.js", "Express", "Ejs", "MongoDB"],
  },
  {
    title: "CGPA-Result-Forecaster",
    description:
      "Calculate your GPA and CGPA score and from your score get the average estimate score to end up with a 1st, 2nd upper/lower class.",
    live: "https://cgpaforecaster.vercel.app/",
    github: "https://github.com/jomefavourite/CGPA-Result-Forecaster",
    tags: ["JavaScript", "gpa-calculator", "cgpa-forecast"],
  },
];

export const otherProjects: Project[] = [
  {
    title: "Faraday Event",
    description: `Event Manger App for Faraday Africa Community. Co-created with`,
    live: "https://events.faraday.africa/",
    github: "",
    tags: ["React", "Airtable", "Tailwindcss"],
    desLink: "https://github.com/nworiekingslee",
  },
  {
    title: "Faraday Events",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    live: "https://faraday-events.vercel.app/",
    github: "",
    tags: ["Nextjs", "Typescript", "Tailwindcss"],
  },
  {
    title: "Faraday Events",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    live: "https://faraday-events.vercel.app/",
    github: "",
    tags: ["Nextjs", "Typescript", "Tailwindcss"],
  },
  {
    title: "Faraday Events",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    live: "https://faraday-events.vercel.app/",
    github: "",
    tags: ["Nextjs", "Typescript", "Tailwindcss"],
  },
];
