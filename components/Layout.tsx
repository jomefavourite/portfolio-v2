import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Nav from "./Nav";
import { Socials } from "../utils";
import { FiDownload } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";

export const Layout = ({ children }) => {
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
  ];

  return (
    <>
      <Navigation />
      <main className='container grid h-[calc(100vh-48px)] gap-3 py-5 lg:grid-cols-2 lg:py-10'>
        <aside className='relative hidden h-screen w-full lg:block'>
          <div className='fixed h-[calc(100vh-5rem)]'>
            <div className='h-full flex-col justify-between md:flex'>
              <div className='space-y-3'>
                <h1 className='font-bold md:text-5xl'>Favourite Jome</h1>
                {/* <p className=''>Frontend Developer</p> */}
                <p className='max-w-sm text-sm leading-relaxed text-lightGrey'>
                  I&apos;m a{" "}
                  <span className='text-white'>frontend developer</span> and I
                  create <span className='text-white'>interactive</span> web
                  applications using frontend technologies, keeping in mind the{" "}
                  <span className='text-white'>user experience</span> and the
                  best <span className='text-white'>web standards</span>.{" "}
                  <span className='block'>
                    Also I love <span className='text-white'>learning</span>{" "}
                    about new technologies and{" "}
                    <span className='text-white'>sharing</span> my own knowledge
                    with others.
                  </span>
                </p>

                <a
                  href='/favourite-jome_resume.pdf'
                  className='flex items-center gap-2 text-sm text-lightGrey transition duration-300 ease-out hover:text-white'
                  download={true}
                >
                  <FiDownload />
                  Download Resume
                </a>
              </div>

              <nav className='hidden md:block'>
                <Nav />
              </nav>

              <div>
                <div className='flex items-center'>
                  <Image
                    src='/me.jpg'
                    width={50}
                    height={50}
                    alt='Favourite Jome'
                    style={{
                      borderRadius: "50%",
                    }}
                  />

                  <div className='ml-2 flex gap-3 '>
                    {socials.map((social, ind) => (
                      <Link
                        key={ind}
                        href={social.link}
                        className='flex items-center gap-2'
                      >
                        <span className='flex items-center gap-1'>
                          {social.icon}
                          {social.name}
                        </span>
                        <HiExternalLink />
                      </Link>
                    ))}
                  </div>
                </div>
                <p className='mt-2 text-xs text-lightGrey'>
                  Inspired by{" "}
                  <a href='https://www.kingslee.me/' className='text-white'>
                    kingslee.me
                  </a>{" "}
                  |{" "}
                  <a href='https://kadet.dev/' className='text-white'>
                    kadet.dev
                  </a>{" "}
                  |{" "}
                  <a href='https://www.sarahdayan.dev/' className='text-white'>
                    sarahdayan.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </aside>

        <section className='w-full'>
          {children}

          {/* For Mobile */}
          <p className='mb-8 mt-8 block  text-center text-xs text-lightGrey md:hidden'>
            Inspired by{" "}
            <a href='https://www.kingslee.me/' className='text-white'>
              kingslee.me
            </a>{" "}
            |{" "}
            <a href='https://kadet.dev/' className='text-white'>
              kadet.dev
            </a>{" "}
            |{" "}
            <a href='https://www.sarahdayan.dev/' className='text-white'>
              sarahdayan.dev
            </a>
          </p>
        </section>
      </main>
      <footer
        className='pointer-events-none fixed left-0 bottom-0 z-20 h-20 w-full'
        style={{
          background: "linear-gradient(180deg,#14141400,#151515)",
        }}
      ></footer>
    </>
  );
};
