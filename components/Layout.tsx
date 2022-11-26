import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { ReactElement, ReactNode } from "react";
import Navigation from "./Navigation";
import { useRouter } from "next/router";
import { navigation } from "../utils";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <main className='container grid h-[calc(100vh-48px)] gap-3 py-10 md:grid-cols-2'>
        <aside className='flex h-full flex-col justify-between'>
          <div className='space-y-3'>
            <h1 className='text-4xl font-bold'>Favourite Jome</h1>
            {/* <p className=''>Frontend Developer</p> */}
            <p className='max-w-sm text-sm text-lightGrey'>
              I'm a <span className='text-white'>frontend developer</span>. I
              create interactive experiences for amazing people using modern web
              technology. I am currently learning how to write immersive web
              animations and also exploring the decentralized web.
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

            <div className='ml-2 flex flex-col'>
              <Link href='/' className='flex'>
                Twitter
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </aside>

        <section>{children}</section>
      </main>
    </>
  );
};
