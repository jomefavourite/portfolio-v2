import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { GiWorld } from "react-icons/gi";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Socials } from "../utils";
import { HiExternalLink } from "react-icons/hi";

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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Favourite Jome Portfolio</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <style jsx global={false}>{`
        body {
          // height: 100vh;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
      `}</style> */}

      <Navigation />
      <main className='container h-[calc(100vh-48px-104px)] text-center'>
        <div className='flex h-full flex-col justify-center'>
          <Image
            src='/me.jpg'
            width={200}
            height={200}
            alt='Favourite Jome'
            style={{
              borderRadius: "50%",
              textAlign: "center",
              margin: "0 auto 1rem",
            }}
          />

          <h1 className='mb-2 text-2xl font-medium md:text-4xl'>
            Hi, I am Favourite Jome
          </h1>
          <p className='mx-auto max-w-[500px] text-sm text-lightGrey'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            culpa dolorum hic, ratione asperiores doloribus officiis unde
            similique? Minus, porro?
          </p>

          <Link
            href='/explore'
            className='mx-auto mt-4 flex w-full max-w-[250px] items-center justify-center gap-3 rounded-md bg-[#2f2f2f] p-2 text-white'
          >
            Explore <GiWorld />
          </Link>
        </div>
      </main>
      <footer className='container py-4 text-center'>
        <div className='mb-2 flex items-center justify-center gap-3'>
          {socials.map((social, ind) => (
            <Link href={social.link} className=' flex items-center gap-2'>
              <span className='flex items-center gap-1 text-2xl'>
                {social.icon}
              </span>
            </Link>
          ))}
        </div>
        <p className='text-sm text-lightGrey'>
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
      </footer>
    </div>
  );
};

export default Home;
