import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const SocialLinks = [
  {
    icon: <FaTwitter />,
    link: "https://twitter.com/FavouriteJome1",
    title: "Twitter",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@favouritejome",
    title: "Youtube",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/favourite-jome-677766184/",
    title: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/jomefavourite/",
    title: "Instagram",
  },
];

const MainLinks = [
  { link: "/", text: "Portfolio" },
  { link: "https://favouritejome.hashnode.dev/", text: "Articles" },
  { link: "https://github.com/jomefavourite", text: "Github" },
  { link: "https://www.youtube.com/@favouritejome", text: "Youtube" },
  {
    link: "https://www.frontendmentor.io/profile/jomefavourite",
    text: "Frontendmentor Projects",
  },
  {
    link: "https://portfolio.devchallenges.io/jomefavourite",
    text: "Devchallenges Projects",
  },
  {
    link: "https://www.buymeacoffee.com/tugevokuyu",
    text: "Buy me a Coffee",
  },
];

function LinktreePage() {
  return (
    <>
      <Head>
        <title>Favourite Jome | Linktree</title>
      </Head>
      <main className='container my-5 '>
        <div className='text-center'>
          <Image
            src='/me.jpg'
            width={150}
            height={150}
            alt='Favourite Jome'
            style={{
              borderRadius: "50%",
              textAlign: "center",
              margin: "0 auto 1rem",
            }}
            className='mb-4'
          />
          <h1 className='text-2xl font-bold md:text-3xl'>Favourite Jome</h1>
          <p className=' mt-2 text-[0.9rem]'>
            Frontend Developer 🧑‍💻 | Technical Writer ✍️
          </p>

          <div className='mt-3 flex justify-center space-x-2.5'>
            {SocialLinks.map((item, ind) => (
              <div key={ind} className='socials__item'>
                <a
                  title={item.title}
                  className='text-3xl text-white no-underline 
                  hover:scale-[1.2] hover:transition-[200ms] hover:duration-[transform]
                  '
                  href={item.link}
                >
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='group mx-auto mt-6 mb-0 max-w-[30rem] space-y-2'>
          {MainLinks.map((item, ind) => (
            <div
              key={ind}
              className='duration-300 ease-out hover:opacity-[1!important] group-hover:opacity-50'
            >
              <Link
                href={item.link}
                className='block rounded-[10px] bg-darkCard p-4 text-center text-base shadow-md transition-[0.5s] duration-[all]'
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default LinktreePage;
