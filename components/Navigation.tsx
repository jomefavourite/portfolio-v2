import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import Nav from "./Nav";

const Navigation: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false as boolean);
  const router = useRouter();

  const routeToBeShown = ["projects", "resume", "articles"];

  console.log(router.route);

  return (
    <nav className='sticky top-0 bg-[#15151569] py-3 shadow-lg backdrop-blur-[6px] md:hidden'>
      <div className='container z-30 flex justify-between'>
        <h2 className='flex gap-3 font-bold'>
          <Link href='/'>FavouriteJome.</Link>
          {routeToBeShown.includes(router.route.slice(1)) && (
            <>
              /
              <span className='capitalize tracking-wider'>
                {router.route.slice(1)}
              </span>
            </>
          )}
        </h2>

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

      {/* Mobile */}

      {isMenuOpen ? (
        <div className='absolute  mx-auto h-screen w-full bg-dark-main pt-20 text-center'>
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
