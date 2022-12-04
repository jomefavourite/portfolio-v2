import Link from "next/link";
import React, { FunctionComponent } from "react";
import Nav from "./Nav";

const Navigation: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false as boolean);
  

  return (
    <nav className='sticky top-0 bg-[#15151569] py-3 shadow-lg backdrop-blur-[6px] md:hidden'>
      <div className='container flex justify-between'>
        <div>
          <Link href='/'>
            <h2 className='font-bold'>FavouriteJome.</h2>
          </Link>

          {/* Projects */}
          {/* Resume */}
        </div>

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
        <div className='absolute mx-auto mt-12 h-screen w-full bg-dark-main text-center'>
          <Nav
            topNav={true}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
