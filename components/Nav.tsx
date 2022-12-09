import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navigation } from "../utils";

type NavProps = {
  topNav?: boolean;
  isMenuOpen?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ topNav, isMenuOpen, setIsMenuOpen }: NavProps) => {
  const router = useRouter();

  return (
    <ul className={`${topNav ? "space-y-8" : "space-y-5"}`}>
      {navigation.map((nav, ind) => (
        <li
          key={ind}
          className={`${topNav ? "text-center" : "text-left"} mx-auto`}
        >
          <Link
            href={nav.href}
            className={`group flex items-center text-sm transition duration-300 ease-out ${
              topNav ? "mx-auto w-fit justify-center" : "w-fit text-left"
            } ${
              router.pathname === nav.href ? "text-white" : "text-lightGrey"
            }`}
            onClick={() => (setIsMenuOpen ? setIsMenuOpen(!isMenuOpen) : null)}
          >
            {!topNav ? (
              <>
                <span className='w-[20px] transition-colors duration-300 group-hover:text-white'>
                  {ind === 0 ? "00" : `0${ind}`}
                </span>{" "}
                <span
                  className={`transit ion mx-2 inline-block h-[2px] bg-[#5d5d5d] transition-[width] duration-300 group-hover:w-8 group-hover:bg-white ${
                    router.pathname === nav.href
                      ? "w-8 bg-white"
                      : "w-5 bg-[#5d5d5d]"
                  }`}
                ></span>
              </>
            ) : null}
            <span className='uppercase transition-colors duration-300 group-hover:text-white'>
              {nav.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
