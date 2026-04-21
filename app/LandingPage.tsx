"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsPlayCircle } from "react-icons/bs";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiLinkedin, SiYoutube } from "react-icons/si";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { pinnedProjects, otherProjects, Socials } from "../utils";
import { useBlogPost } from "../hooks/useBlogPost";
import ArticleCard from "../components/ArticleCard";

const socials: Socials[] = [
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/favouritejome1",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/jomefavourite",
  },
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    link: "mailto:jfjomefavourite@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/favourite-jome-677766184/",
  },
  {
    name: "YouTube",
    icon: <SiYoutube />,
    link: "https://www.youtube.com/@favouritejome",
  },
];

const experiences = [
  {
    company: "Bug0",
    role: "Software Engineer",
    period: "Jul 2025 – Present",
    location: "United States · Remote",
    description:
      "Building AI-native browser testing infrastructure and managed QA services that help teams ship with confidence.",
    companyLink: "https://bug0.com/",
  },
  {
    company: "Hashnode",
    role: "Customer Success Engineer",
    period: "Jan 2024 – May 2025",
    location: "United States · Remote",
    description:
      "Empowered developers by providing exceptional support across various channels, enhancing the user experience with Hashnode products.",
    companyLink: "https://hashnode.com/",
  },
  {
    company: "PureCode AI",
    role: "Contract Technical Writer",
    period: "Nov 2023 – Oct 2024",
    location: "Remote",
    description:
      "Produced technical content and documentation for AI-powered development tooling.",
    companyLink: "https://purecode.ai/",
  },
  {
    company: "AIChatbot",
    role: "Frontend Developer",
    period: "Sep 2023 – Dec 2023",
    location: "Italy · Remote",
    description:
      "Built frontend features with React and Next.js for an AI chatbot platform.",
    companyLink: "#",
  },
  {
    company: "Pelrio",
    role: "Frontend Developer",
    period: "Mar 2022 – Jan 2024",
    location: "Remote",
    description:
      "Transformed business data into representational charts, integrated internationalisation for multilingual support, and implemented real-time updates across the financial management platform.",
    companyLink: "https://pelrio.com/",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#series", label: "Series" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

function LandingPage() {
  const { data, isLoading } = useBlogPost("Favourite");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-dark-main/90 backdrop-blur-sm">
        <nav className="container flex items-center justify-between py-4">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight"
          >
            FJ<span className="text-lightGrey">.</span>
          </a>

          <ul className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-lightGrey transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="text-xl text-lightGrey md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-dark-main md:hidden">
            <ul className="container flex flex-col gap-5 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-lightGrey transition hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20 text-center"
          style={{
            backgroundColor: "#111",
            backgroundImage:
              "radial-gradient(circle, #2a2a2a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* Central glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="fadeIn relative z-10">
            <Image
              src="/me.jpg"
              width={88}
              height={88}
              alt="Favourite Jome"
              className="mx-auto mb-5 rounded-full border border-white/15 object-cover"
            />
            <p className="mb-4 text-xs uppercase text-lightGrey" style={{ letterSpacing: "0.2em" }}>
              Software Engineer
            </p>
            <h1
              className="mb-5 text-5xl font-extrabold leading-[1.05] text-white md:text-6xl"
              style={{ letterSpacing: "-2px" }}
            >
              Hi, I&apos;m<br />Favourite Jome
            </h1>
            <p className="mx-auto mb-9 max-w-md text-base leading-relaxed text-lightGrey">
              I build reliable, performant software — from polished frontends to
              scalable systems. Passionate about developer experience, quality
              engineering, and sharing knowledge openly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="bg-white px-7 py-3 text-sm font-semibold text-dark-main transition hover:bg-white/90"
              >
                View Projects ↓
              </a>
              <a
                href="#contact"
                className="border border-white/20 px-7 py-3 text-sm text-lightGrey transition hover:border-white/50 hover:text-white"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-5">
              {socials.map((social, ind) => (
                <a
                  key={ind}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="text-2xl text-lightGrey transition hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-white/10 py-20"
        >
          <div className="container">
            <h2 className="mb-2 text-3xl font-bold text-white">About Me</h2>
            <p className="mb-12 text-lightGrey">
              A glimpse into my journey and passions.
            </p>

            <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
              <div className="shrink-0 md:w-72 lg:w-80">
                <Image
                  src="/me-new.jpg"
                  width={400}
                  height={560}
                  alt="Favourite Jome"
                  className="w-full rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-5">
                <p className="leading-relaxed text-white/90">
                  I&apos;m Favourite Jome, a Software Engineer focused on
                  building reliable systems, great developer tooling, and
                  seamless user experiences.
                </p>
                <p className="leading-relaxed text-lightGrey">
                  My journey spans frontend development, customer engineering,
                  and technical writing — giving me a well-rounded perspective
                  on how software is built, used, and explained.
                </p>
                <p className="leading-relaxed text-lightGrey">
                  Currently at <span className="text-white">Bug0</span>, working
                  on AI-native browser testing infrastructure. I care deeply
                  about code quality, performance, and making software that
                  actually works for the people using it.
                </p>
                <p className="leading-relaxed text-lightGrey">
                  Outside of engineering, I&apos;ve spent years writing
                  technical content on Hashnode and hosting{" "}
                  <span className="text-white">The Learn With Me Series</span> —
                  a show about learning openly and sharing the process.
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:jfjomefavourite@gmail.com"
                    className="flex items-center gap-2 bg-white px-5 py-2.5 text-sm font-medium text-dark-main transition hover:bg-white/90"
                  >
                    Let&apos;s chat <MdOutlineAlternateEmail />
                  </a>
                  <a
                    href="#series"
                    className="text-sm text-lightGrey underline underline-offset-4 transition hover:text-white"
                  >
                    The Learn With Me Series →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="border-t border-white/10 py-20"
        >
          <div className="container max-w-3xl">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-xs uppercase tracking-widest text-lightGrey">
                Experience
              </h2>
              <Link
                href="/experiences"
                className="flex items-center gap-2 text-sm text-lightGrey transition hover:text-white"
              >
                Full history <BsArrowRight />
              </Link>
            </div>

            <div className="space-y-0">
              {experiences.map((exp, ind) => (
                <div
                  key={ind}
                  className="group flex gap-5"
                >
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="h-2 w-2 shrink-0 rounded-full bg-lightGrey transition group-hover:bg-white" />
                    {ind < experiences.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-white/10" />
                    )}
                  </div>
                  <div className="pb-10">
                    <div className="mb-1 flex flex-wrap items-baseline gap-2">
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-white transition hover:underline"
                      >
                        {exp.company}
                      </a>
                      <span className="text-sm text-lightGrey">
                        · {exp.role}
                      </span>
                    </div>
                    <p className="mb-2 text-xs text-lightGrey">
                      {exp.period} · {exp.location}
                    </p>
                    <p className="text-sm leading-relaxed text-lightGrey">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-white/10 py-20"
        >
          <div className="container">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-xs uppercase tracking-widest text-lightGrey">
                Projects
              </h2>
              <Link
                href="/projects"
                className="flex items-center gap-2 text-sm text-lightGrey transition hover:text-white"
              >
                All projects <BsArrowRight />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pinnedProjects.map((project, ind) => (
                <div
                  key={ind}
                  className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-darkCard transition hover:border-white/25"
                >
                  {project.screenshot && (
                    <a
                      href={project.live ?? project.github ?? "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block h-44 overflow-hidden bg-black"
                    >
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </a>
                  )}

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-white">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            title="Source code"
                            className="text-lightGrey transition hover:text-white"
                          >
                            <FiGithub size={15} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            title="Live site"
                            className="text-lightGrey transition hover:text-white"
                          >
                            <FiExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="flex-1 text-sm leading-relaxed text-lightGrey">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-lightGrey"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More projects */}
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects
                .filter((p) => p.screenshot)
                .map((project, ind) => (
                  <div
                    key={ind}
                    className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-darkCard transition hover:border-white/25"
                  >
                    {project.screenshot && (
                      <a
                        href={project.live ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="relative block h-44 overflow-hidden bg-black"
                      >
                        <Image
                          src={project.screenshot}
                          alt={`${project.title} screenshot`}
                          fill
                          className="object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                      </a>
                    )}

                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-white">
                          {project.title}
                        </h3>
                        <div className="flex shrink-0 gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              title="Source code"
                              className="text-lightGrey transition hover:text-white"
                            >
                              <FiGithub size={15} />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              title="Live site"
                              className="text-lightGrey transition hover:text-white"
                            >
                              <FiExternalLink size={15} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="flex-1 text-sm leading-relaxed text-lightGrey">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-lightGrey"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Learn With Me Series */}
        <section
          id="series"
          style={{ backgroundColor: "#2c99d8" }}
          className="py-20"
        >
          <div className="container">
            {/* Header */}
            <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span
                  style={{ backgroundColor: "#f6c40f", color: "#000" }}
                  className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest"
                >
                  YouTube Show
                </span>
                <Image
                  src="/learn-with-me-logo.svg"
                  alt="Learn With Me Series"
                  width={320}
                  height={220}
                  className="w-64 md:w-80"
                />
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                  A show where I sit down with interesting people — builders,
                  creatives, and leaders — to learn openly and share those
                  conversations with the world. Two seasons in and growing.
                </p>
              </div>

              <a
                href="https://www.youtube.com/@favouritejome"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: "#f6c40f", color: "#000" }}
                className="flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:opacity-90"
              >
                <BsPlayCircle size={18} />
                Watch on YouTube
              </a>
            </div>

            {/* Episodes grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title:
                    "The Hidden Power of Building Communities and Impact in Tech",
                  guest: "Ibi",
                  duration: "49:42",
                  season: "S2",
                  href: "https://www.youtube.com/@favouritejome",
                },
                {
                  title: "Unlocking Potential: Education and Leadership",
                  guest: "Luqman Lawal",
                  duration: "1:04:51",
                  season: "S2",
                  href: "https://www.youtube.com/@favouritejome",
                },
                {
                  title: "Strive for Excellence in All You Do",
                  guest: "Isaac Oyekunle",
                  duration: "29:18",
                  season: "S2 · Ep 5",
                  href: "https://www.youtube.com/@favouritejome",
                },
                {
                  title: "Monetize Your Talent & Learn About Investment",
                  guest: "Victor Oluyitan",
                  duration: "1:04:11",
                  season: "S2 · Ep 4",
                  href: "https://www.youtube.com/@favouritejome",
                },
                {
                  title: "From Alone to Impact",
                  guest: "Ivy Elebesunu",
                  duration: "59:00",
                  season: "S2 · Ep 3",
                  href: "https://www.youtube.com/@favouritejome",
                },
                {
                  title: "Don't Underrate Your Little Beginnings",
                  guest: "Shadrach Abba",
                  duration: "1:28:00",
                  season: "S2 · Ep 2",
                  href: "https://www.youtube.com/@favouritejome",
                },
              ].map((ep, ind) => (
                <a
                  key={ind}
                  href={ep.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 rounded-xl p-5 transition"
                  style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.25)")
                  }
                >
                  <div className="flex items-center justify-between">
                    <span
                      style={{ backgroundColor: "#f6c40f", color: "#000" }}
                      className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                    >
                      {ep.season}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/50">
                      <BsPlayCircle size={12} />
                      {ep.duration}
                    </div>
                  </div>

                  <p className="flex-1 text-sm font-semibold leading-snug text-white">
                    {ep.title}
                  </p>

                  <p className="text-xs text-white/60">with {ep.guest}</p>
                </a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 text-center">
              <p className="mb-4 text-sm text-white/60">
                68 videos · 2 seasons · @favouritejome
              </p>
              <a
                href="https://www.youtube.com/@favouritejome"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white underline underline-offset-4 opacity-80 transition hover:opacity-100"
              >
                View all episodes →
              </a>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section
          id="writing"
          className="border-t border-white/10 py-20"
        >
          <div className="container">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="text-xs uppercase tracking-widest text-lightGrey">
                Writing
              </h2>
              <a
                href="https://favouritejome.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-lightGrey transition hover:text-white"
              >
                All articles <BsArrowRight />
              </a>
            </div>

            {isLoading ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array(6)
                  .fill(0)
                  .map((_, ind) => (
                    <div
                      key={ind}
                      className="border border-white/10 p-6"
                    >
                      <div className="animate-pulse space-y-4">
                        <div className="h-2.5 w-1/3 rounded bg-white/10" />
                        <div className="h-3 w-full rounded bg-white/10" />
                        <div className="h-3 w-3/4 rounded bg-white/10" />
                        <div className="h-2.5 w-1/4 rounded bg-white/10" />
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data?.slice(0, 6).map((post, ind) => (
                  <ArticleCard
                    key={ind}
                    post={post}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-white/10 py-20"
        >
          <div className="container max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
            <p className="mb-8 leading-relaxed text-lightGrey">
              Whether you have a project in mind, want to collaborate, or just
              want to say hi — my inbox is always open.
            </p>
            <a
              href="mailto:jfjomefavourite@gmail.com"
              className="inline-flex items-center gap-3 bg-white px-8 py-3 font-medium text-dark-main transition hover:bg-white/90"
            >
              <MdOutlineAlternateEmail />
              Say Hello
            </a>

            <div className="mt-10 flex items-center justify-center gap-5">
              {socials.map((social, ind) => (
                <a
                  key={ind}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="text-2xl text-lightGrey transition hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-center text-sm text-lightGrey md:flex-row">
          <p>© {new Date().getFullYear()} Favourite Jome</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
