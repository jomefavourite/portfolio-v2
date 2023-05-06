"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { Socials } from "../utils";
import Nav from "./Nav";

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

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const routeToBeShown = [
    "projects",
    "resume",
    "articles",
    "experiences",
    "about",
  ];

  return (
    <nav className='sticky top-0 z-50 bg-[#15151569] py-5 shadow-inner backdrop-blur-[6px] lg:hidden'>
      <div className='container z-30 flex justify-between'>
        <h2 className='flex gap-3 font-bold'>
          <Link href='/'>FavouriteJome.</Link>
          {routeToBeShown.includes(pathname.slice(1)) && (
            <>
              /
              <span className='capitalize tracking-wider'>
                {pathname.slice(1)}
              </span>
            </>
          )}
        </h2>

        <button
          aria-label='Menu'
          type='button'
          name='hamburger'
          className='space-y-1'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-[2px] w-5 transform bg-white transition-transform duration-200 ${
              isMenuOpen ? "rotate-45" : "rotate-0"
            }`}
          ></span>
          {/* translate(-1px, -6px) rotate(-45deg) */}
          <span
            className={`block h-[2px] w-5 transform bg-white transition-transform duration-200 ${
              isMenuOpen
                ? "-translate-x-px translate-y-[-6px] -rotate-45"
                : "rotate-0"
            }`}
          ></span>
          <span className='sr-only hidden'>Menu</span>
        </button>
      </div>

      <style jsx global={false}>{`
        body {
          ${isMenuOpen ? "overflow: hidden;" : ""}
        }

        @media (min-width: 1024px) {
          body {
            overflow: auto;
          }
        }
      `}</style>

      {/* Mobile */}

      {isMenuOpen ? (
        <div className='fadeIn absolute top-0 -z-20 mx-auto h-screen w-full space-y-10 bg-dark-main pt-28 text-center'>
          <Nav
            topNav={true}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <div>
            <h3 className='italic text-white'>Connect with me on:</h3>

            <div className='mt-2 space-x-2 text-2xl text-lightGrey'>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-block transition-colors duration-200 hover:text-white'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
