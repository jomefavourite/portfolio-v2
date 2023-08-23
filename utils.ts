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
    href: '/',
    title: 'Home',
  },
  // {
  //   href: "/about",
  //   title: "About",
  // },
  {
    href: '/projects',
    title: 'Projects',
  },
  {
    href: '/articles',
    title: 'Articles',
  },
  // {
  //   href: "/resume",
  //   title: "Resume",
  // },
  {
    href: '/experiences',
    title: 'Experiences',
  },
];

export const pinnedProjects: Project[] = [
  {
    title: 'AlgoVisual',
    description:
      'Algorithm Visualizer for Sorting, Searching and Graph Traversal algorithms',
    live: 'https://jf-algo-visual.vercel.app/',
    github: 'https://github.com/jomefavourite/algo-visual',
    tags: ['Nextjs', 'Typescript', 'Tailwindcss'],
  },
  {
    title: 'PlanDone',
    description:
      'PlanDone is made for Students who would like to learn smart, be productive and access everything they need while studying in one place.',
    live: 'https://plandone.onrender.com/',
    github: 'https://github.com/jomefavourite/PlanDone',
    tags: ['Node.js', 'Express', 'Ejs', 'MongoDB', 'SASS'],
  },
  {
    title: 'CGPA-Result-Forecaster',
    description:
      'Calculate your GPA and CGPA score and from your score get the average estimate score to end up with a 1st, 2nd upper/lower class.',
    live: 'https://cgpaforecaster.vercel.app/',
    github: 'https://github.com/jomefavourite/CGPA-Result-Forecaster',
    tags: ['JavaScript', 'gpa-calculator', 'cgpa-forecast'],
  },
];

export const otherProjects: Project[] = [
  {
    title: 'Faraday Event',
    description: `Event Manger App for Faraday Africa Community. Co-created with`,
    live: 'https://events.faraday.africa/',
    github: '',
    tags: ['ReactJS', 'Airtable', 'Tailwindcss'],
    desLink: 'https://github.com/nworiekingslee',
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
    title: 'Faraday Africa',
    description:
      "Faraday is a Community driven Ed-tech solution improving the learning experience for Students in tertiary institutions. I'm one of the contributors, building the platform.",
    live: 'https://www.faraday.africa/',
    github: 'https://github.com/faradayafrica/Faraday-frontend',
    tags: ['ReactJS', 'Airtable', 'Tailwindcss'],
  },

  {
    title: 'Portfolio V2',
    description: 'Hey, this is my portfolio',
    live: '',
    github: 'https://github.com/jomefavourite/portfolio-v2',
    tags: ['Nextjs', 'Typescript', 'Tailwindcss'],
  },
];
