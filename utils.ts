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
  screenshot?: string;
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
  // {
  //   href: "/about",
  //   title: "About",
  // },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/articles",
    title: "Articles",
  },
  // {
  //   href: "/resume",
  //   title: "Resume",
  // },
  {
    href: "/experiences",
    title: "Experiences",
  },
];

export const pinnedProjects: Project[] = [
  {
    title: "Into My Heart",
    description:
      "A mobile app for building a daily habit of engaging with God's Word — memorize Bible verses with proven techniques and track your progress.",
    live: "https://intomyheart.life/",
    github: null,
    tags: ["React Native", "Expo"],
    screenshot: "/project-intomyheart.jpg",
  },
  {
    title: "BookTrackr",
    description:
      "Track your reading journey — plan, track, and share your reading progress with calendar and fixed-days modes.",
    live: "https://www.booktrackr.app/",
    github: null,
    tags: ["Nextjs", "Typescript", "Tailwindcss"],
    screenshot: "/project-booktrackr.jpg",
  },
];

export const otherProjects: Project[] = [
  {
    title: "The Creator",
    description:
      "Media production agency website — documentary, lifestyle, events and commercials, crafting exceptional visual experiences.",
    live: "https://www.thecreator.org.uk/",
    github: null,
    tags: ["Nextjs", "Tailwindcss"],
    screenshot: "/project-thecreator.jpg",
  },
  {
    title: "NextGen Summit",
    description:
      "Africa's largest student entrepreneurship summit connecting 50,000+ young innovators across 10 universities with industry leaders and investors.",
    live: "https://www.nextgen-summit.org/",
    github: null,
    tags: ["Nextjs", "Tailwindcss"],
    screenshot: "/project-nextgen.jpg",
  },
  {
    title: "Brazil Impossible Summit",
    description:
      "Event website for The Impossible Summit Brazil — a Christian gathering with registration and donation support.",
    live: "https://brazil-impossible-summit.vercel.app/",
    github: null,
    tags: ["Nextjs", "Tailwindcss"],
    screenshot: "/project-brazil.jpg",
  },
  {
    title: "AlgoVisual",
    description:
      "Algorithm Visualizer for Sorting, Searching and Graph Traversal algorithms",
    live: "https://jf-algo-visual.vercel.app/",
    github: "https://github.com/jomefavourite/algo-visual",
    tags: ["Nextjs", "Typescript", "Tailwindcss"],
    screenshot: "/project-algovisual.jpg",
  },
  {
    title: "PlanDone",
    description:
      "PlanDone is made for Students who would like to learn smart, be productive and access everything they need while studying in one place.",
    live: "https://plandone.onrender.com/",
    github: "https://github.com/jomefavourite/PlanDone",
    tags: ["Node.js", "Express", "Ejs", "MongoDB", "SASS"],
    screenshot: "/project-plandone.jpg",
  },
  {
    title: "CGPA Result Forecaster",
    description:
      "Calculate your GPA and CGPA score and from your score get the average estimate score to end up with a 1st, 2nd upper/lower class.",
    live: "https://cgpaforecaster.vercel.app/",
    github: "https://github.com/jomefavourite/CGPA-Result-Forecaster",
    tags: ["JavaScript", "gpa-calculator", "cgpa-forecast"],
    screenshot: "/project-cgpa.jpg",
  },
  {
    title: "Faraday Event",
    description: `Event Manger App for Faraday Africa Community. Co-created with`,
    live: "https://events.faraday.africa/",
    github: "",
    tags: ["ReactJS", "Airtable", "Tailwindcss"],
    desLink: "https://github.com/nworiekingslee",
  },
  // {
  //   title: "RunTechSpace",
  //   description:
  //     "A community platform for tech enthusiasts at Redeemer's University",
  //   live: "https://runtechspace.com/",
  //   github: "",
  //   tags: ["Nextjs", "Tailwindcss"],
  // },
  {
    title: "Faraday Africa",
    description:
      "Faraday is a Community driven Ed-tech solution improving the learning experience for Students in tertiary institutions. I'm one of the contributors, building the platform.",
    live: "https://www.faraday.africa/",
    github: "https://github.com/faradayafrica/Faraday-frontend",
    tags: ["ReactJS", "Airtable", "Tailwindcss"],
  },

  {
    title: "Portfolio V2",
    description: "Hey, this is my portfolio",
    live: "",
    github: "https://github.com/jomefavourite/portfolio-v2",
    tags: ["Nextjs", "Typescript", "Tailwindcss"],
  },
];
