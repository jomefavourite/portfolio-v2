'use client';
import React from 'react';
import Navigation from '../components/Navigation';

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Socials } from '../utils';
import { SiLinkedin } from 'react-icons/si';
import { useBlogPost } from '../hooks/useBlogPost';

const socials: Socials[] = [
  {
    name: 'Twitter',
    icon: <AiOutlineTwitter />,
    link: 'https://twitter.com/favouritejome1',
  },
  {
    name: 'Github',
    icon: <AiFillGithub />,
    link: 'https://github.com/jomefavourite',
  },
  {
    name: 'Email',
    icon: <MdOutlineAlternateEmail />,
    link: 'mailto:jfjomefavourite@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: <SiLinkedin />,
    link: 'https://www.linkedin.com/in/favourite-jome-677766184/',
  },
];
function LandingPage() {
  useBlogPost('Favourite');

  return (
    <div>
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
          <img
            src='/me.jpg'
            width={200}
            height={200}
            alt='Favourite Jome'
            style={{
              borderRadius: '50%',
              textAlign: 'center',
              margin: '0 auto 1rem',
            }}
          />

          <h1 className='mb-2 text-2xl font-medium md:text-4xl'>
            Hi, I am Favourite Jome
          </h1>
          <p className='mx-auto max-w-md text-sm leading-relaxed text-lightGrey'>
            I&apos;m a <span className='text-white'>frontend developer</span>{' '}
            and I create <span className='text-white'>interactive</span> web
            applications using frontend technologies, keeping in mind the{' '}
            <span className='text-white'>user experience</span> and the best{' '}
            <span className='text-white'>web standards</span>.{' '}
            <span className=''>
              Also I love <span className='text-white'>learning</span> about new
              technologies and <span className='text-white'>sharing</span> my
              own knowledge with others.
            </span>
          </p>

          <Link
            href='/projects'
            className='group mx-auto mt-4 box-border flex w-fit items-center justify-center gap-3 bg-[#2f2f2f] px-8 py-2 text-white shadow-xl  transition-all duration-200 ease-out'
          >
            Explore{' '}
            <BsArrowRight className='transform group-hover:translate-x-2' />
          </Link>
        </div>
      </main>
      <footer className='fadeIn container py-4 text-center'>
        <div className='mb-2 flex items-center justify-center gap-3'>
          {socials.map((social, ind) => (
            <a
              key={ind}
              href={social.link}
              className=' flex items-center gap-2'
              target='_blank'
              rel='noreferrer'
              title={social.name}
            >
              <span className='flex items-center gap-1 text-2xl'>
                {social.icon}
              </span>
            </a>
          ))}
        </div>
        <p className='text-sm text-lightGrey'>
          Inspired by{' '}
          <a
            href='https://www.kingslee.me/'
            className='text-white'
            target='_blank'
            rel='noreferrer'
            title="Kingsley's Portfolio"
          >
            kingslee.me
          </a>{' '}
          |{' '}
          <a
            href='https://kadet.dev/'
            className='text-white'
            target='_blank'
            rel='noreferrer'
            title="Kadet's Portfolio"
          >
            kadet.dev
          </a>{' '}
          |{' '}
          <a
            href='https://www.sarahdayan.dev/'
            className='text-white'
            target='_blank'
            rel='noreferrer'
            title="Sarah's Portfolio"
          >
            sarahdayan.dev
          </a>
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
