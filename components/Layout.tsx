import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Nav from "./Nav";
import { Socials } from "../utils";

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
  ];

  return (
    <>
      <Navigation />
      <main className='container grid h-[calc(100vh-48px)] gap-3 py-10 md:grid-cols-2'>
        <aside className='relative hidden h-screen w-full md:block'>
          <div className='fixed h-[calc(100vh-5rem)]'>
            <div className='h-full flex-col justify-between md:flex'>
              <div className='space-y-3'>
                <h1 className='text-4xl font-bold underline '>
                  Favourite Jome
                </h1>
                {/* <p className=''>Frontend Developer</p> */}
                <p className='max-w-sm text-sm text-lightGrey'>
                  I'm a <span className='text-white'>frontend developer</span>.
                  {/* I create interactive experiences for amazing people using modern web
              technology. I am currently learning how to write immersive web
              animations and also exploring the decentralized web. */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  aperiam ut suscipit maxime eum commodi unde fuga. Est, ipsa
                  quidem!
                </p>
              </div>

              <nav className='hidden md:block'>
                <Nav />
              </nav>

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
            </div>
          </div>
        </aside>

        <section className='w-full'>{children}</section>

        <footer
          className='bg -darkBg pointer-events-none fixed bottom-0 z-20 h-20 w-full'
          style={{
            background: "linear-gradient(180deg,hsla(0,0%,8%,0),#151515)",
          }}
        ></footer>
      </main>
    </>
  );
};
