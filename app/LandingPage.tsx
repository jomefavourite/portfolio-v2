"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowRight, BsPlayCircle } from "react-icons/bs";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiYoutube, SiInstagram } from "react-icons/si";
import { Socials } from "../utils";
import { useBlogPost } from "../hooks/useBlogPost";
import { useYouTubeSeries } from "../hooks/useYouTubeSeries";
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
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/favourite-jome-677766184/",
  },
  {
    name: "YouTube",
    icon: <SiYoutube />,
    link: "https://www.youtube.com/@favouritejome",
  },
  {
    name: "Instagram",
    icon: <SiInstagram />,
    link: "https://www.instagram.com/favouritejome/",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#series", label: "Series" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

function LandingPage() {
  const { data, isLoading } = useBlogPost("Favourite");
  const { data: episodes, isLoading: episodesLoading } = useYouTubeSeries();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@favouritejome"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-[#FF0000] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#cc0000] md:flex"
            >
              <SiYoutube size={13} />
              YouTube
            </a>
            <button
              className="text-xl text-lightGrey md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

      </header>

      {menuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 bg-dark-main md:hidden">
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
            <div className="border-white/15 mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border">
              <Image
                src="/me.png"
                width={96}
                height={96}
                alt="Favourite Jome"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p
              className="mb-4 text-xs uppercase text-lightGrey"
              style={{ letterSpacing: "0.2em" }}
            >
              Software Engineer
            </p>
            <h1
              className="mb-5 text-5xl font-extrabold leading-[1.05] text-white md:text-6xl"
              style={{ letterSpacing: "-2px" }}
            >
              Hi, I&apos;m
              <br />
              Favourite Jome
            </h1>
            <p className="mx-auto mb-9 max-w-md text-base leading-relaxed text-lightGrey">
              I build reliable, performant software — from polished frontends to
              scalable systems. Passionate about developer experience, quality
              engineering, and sharing knowledge openly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#writing"
                className="bg-white px-7 py-3 text-sm font-semibold text-dark-main transition hover:bg-white/90"
              >
                Read Articles ↓
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
                  src="/me.png"
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
                  Outside of engineering, I'm hosting a show called{" "}
                  <span className="text-white">The Learn With Me Series</span> —
                  a show about learning from the experiences of young minds, doing
                  amazing things and sharing their process, across different
                  sectors.
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

        {/* Learn With Me Series */}
        <section
          id="series"
          style={{ backgroundColor: "#2c99d8" }}
          className="border-y-8 border-[#f6c40f] py-20"
        >
          <div className="container">
            <Image
              src="/learn-with-me-logo.svg"
              alt="Learn With Me Series"
              width={320}
              height={220}
              className="mx-auto w-28 md:w-28"
            />
            {/* Header */}
            <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="max-w-lg text-sm leading-relaxed text-white/70">
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
            {episodesLoading ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="animate-pulse rounded-xl"
                      style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                    >
                      <div className="h-40 w-full rounded-t-xl bg-white/10" />
                      <div className="space-y-2 p-4">
                        <div className="h-3 w-1/4 rounded bg-white/10" />
                        <div className="h-3 w-full rounded bg-white/10" />
                        <div className="h-3 w-3/4 rounded bg-white/10" />
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {episodes?.slice(0, 6).map((ep) => (
                  <a
                    key={ep.videoId}
                    href={ep.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col overflow-hidden rounded-xl border-2 border-white/20 transition hover:border-[#f6c40f]"
                    style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(0,0,0,0.4)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(0,0,0,0.25)")
                    }
                  >
                    {/* Thumbnail */}
                    <div className="relative h-44 w-full overflow-hidden bg-black/30">
                      <Image
                        src={ep.thumbnail}
                        alt={ep.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-full"
                          style={{ backgroundColor: "#f6c40f" }}
                        >
                          <BsPlayCircle
                            size={24}
                            color="#000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <span
                        style={{ backgroundColor: "#f6c40f", color: "#000" }}
                        className="self-start rounded-full px-2.5 py-0.5 text-xs font-bold"
                      >
                        {ep.season}
                      </span>
                      <p className="flex-1 text-sm font-semibold leading-snug text-white">
                        {ep.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-10 text-center">
              <p className="mb-4 text-sm text-white/60">
                2 seasons · @favouritejome
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
                href="https://blog.favouritejome.dev"
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
