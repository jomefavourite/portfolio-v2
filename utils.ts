interface Nav {
  href: string;
  title: string;
}

interface Projects {
  title: string;
  description: string;
  live: string;
  github: string;
  tags: string[];
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
];
