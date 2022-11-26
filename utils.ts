interface Nav {
  href: string;
  title: string;
}

interface Projects {
  title: string;
  description: string;
  live: string | null;
  github: string | null;
  tags: string[] | null;
}

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

export const projects: Projects[] = [
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
    live: "https://plandone-student.herokuapp.com/",
    github: "https://github.com/jomefavourite/PlanDone",
    tags: ["Node.js", "Express", "Ejs", "MongoDB"],
  },
];
