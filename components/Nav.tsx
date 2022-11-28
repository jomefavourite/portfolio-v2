import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navigation } from "../utils";

const Nav = ({
  topNav,
  isMenuOpen,
  setIsMenuOpen,
}: {
  topNav?: boolean;
  isMenuOpen?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <ul className='space-y-4'>
      {navigation.map((nav, ind) => (
        <li
          key={ind}
          className={`${topNav ? "text-center" : "text-left"} mx-auto`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Link
            href={nav.href}
            className={` group flex items-center text-sm transition duration-300 ease-out ${
              topNav ? "justify-center" : "w-fit text-left"
            } ${
              router.pathname === nav.href ? "text-white" : "text-lightGrey"
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
  );
};

export default Nav;
