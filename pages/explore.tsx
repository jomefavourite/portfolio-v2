import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

const Explore: FunctionComponent = () => {
  interface Nav {
    href: string;
    title: string;
  }

  const navigation: Nav[] = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/projects",
      title: "Projects",
    },
  ];

  return (
    <div>
      <h1 className='text-3xl'>Favourite Jome</h1>
      <p className=''>Frontend Developer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem
        numquam fugit minus dolore similique quae facere sapiente veniam natus.
      </p>

      <nav>
        <ul>
          {navigation.map((nav, ind) => (
            <li key={ind}>
              <Link href='/' className='group flex items-center transition'>
                <span className='w-[20px]'>{ind === 0 ? "00" : `0${ind}`}</span>{" "}
                <span className='mx-2 inline-block h-px w-5 bg-[#5d5d5d] transition group-hover:w-8 group-hover:bg-white'></span>
                <span>{nav.title}</span>
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
    </div>
  );
};

export default Explore;
