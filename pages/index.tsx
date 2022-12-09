import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Socials } from "../utils";
// import { HiExternalLink } from "react-icons/hi";
import { useBlogPost } from "../hooks/useBlogPost";
import { SiLinkedin } from "react-icons/si";

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

const Home: NextPage = () => {
  useBlogPost("Favourite");

  return (
    <div>
      <Head>
        <title>Favourite Jome Portfolio</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
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
      <main className='container h-[calc(100vh-64px-104px)] text-center'>
        <div className='fadeIn flex h-full flex-col justify-center'>
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

          <h1 className=' mb-2 text-2xl font-medium md:text-4xl'>
            Hi, I am Favourite Jome
          </h1>
          <p className='mx-auto max-w-md text-sm leading-relaxed text-lightGrey'>
            I'm a <span className='text-white'>frontend developer</span> and I
            create <span className='text-white'>interactive</span> web
            applications using frontend technologies, keeping in mind the{" "}
            <span className='text-white'>user experience</span> and the best{" "}
            <span className='text-white'>web standards</span>.{" "}
            <span className='block'>
              Also I love <span className='text-white'>learning</span> about new
              technologies and <span className='text-white'>sharing</span> my
              own knowledge with others.
            </span>
          </p>

          <Link
            href='/projects'
            className='group mx-auto mt-4 flex w-fit items-center justify-center gap-3 bg-[#2f2f2f] p-2 px-8 text-white shadow-xl transition-transform'
          >
            Explore{" "}
            <BsArrowRight className='transform duration-200 ease-out group-hover:translate-x-2' />
          </Link>
        </div>
      </main>
      <footer className='fadeIn container py-4 text-center'>
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
