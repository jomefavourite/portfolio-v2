import Link from "next/link";
import React, { FunctionComponent } from "react";

const Navigation: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false as boolean);

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
    <nav className='container relative py-3 md:hidden'>
      <div className='flex justify-between'>
        <Link href='/'>
          <h2 className='font-bold'>FavouriteJome.</h2>
        </Link>

        <button
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
      `}</style>

      {isMenuOpen ? (
        <div className='absolute h-screen w-full bg-white'>
          <ul>
            {navigation.map((nav, ind) => (
              <li key={ind}>
                <Link href='/' className='group flex items-center transition'>
                  <span className='w-[20px]'>
                    {ind === 0 ? "00" : `0${ind}`}
                  </span>{" "}
                  <span className='mx-2 inline-block h-px w-5 bg-[#5d5d5d] transition group-hover:w-8 group-hover:bg-white'></span>
                  <span>{nav.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
