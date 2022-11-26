import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import { navigation } from "../utils";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const Layout = ({ children }) => {
  const router = useRouter();

  const socials: {
    name: string;
    link: string;
    icon: React.ReactNode;
  }[] = [
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
        <aside className='flex h-full flex-col justify-between'>
          <div className='space-y-3'>
            <h1 className='text-4xl font-bold'>Favourite Jome</h1>
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

          <nav>
            <ul className='space-y-4'>
              {navigation.map((nav, ind) => (
                <li key={ind}>
                  <Link
                    href={nav.href}
                    className={`group flex w-fit items-center text-sm transition duration-300 ease-out ${
                      router.pathname === nav.href
                        ? "text-white"
                        : "text-lightGrey"
                    }`}
                  >
                    <span className='w-[20px] transition-colors duration-300 group-hover:text-white'>
                      {ind === 0 ? "00" : `0${ind}`}
                    </span>{" "}
                    <span
                      className={`mx-2 inline-block h-[2px] w-5 bg-[#5d5d5d] transition duration-300 group-hover:w-8 group-hover:bg-white ${
                        router.pathname === nav.href
                          ? "w-8 bg-white"
                          : "w-5 bg-[#5d5d5d]"
                      }`}
                    ></span>
                    <span className='uppercase transition-colors duration-300 group-hover:text-white'>
                      {nav.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
                <Link href={social.link} className='flex items-center gap-2'>
                  <span className='flex items-center gap-1'>
                    {social.icon}
                    {social.name}
                  </span>
                  <HiExternalLink />
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <section>{children}</section>
      </main>
    </>
  );
};
