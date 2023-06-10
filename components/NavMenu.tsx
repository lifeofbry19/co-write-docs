"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavMenu() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // if page is scrolled down from top, add shadow to nav
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        hasScrolled ? "shadow-md" : ""
      } sticky top-0 left-0 flex items-center justify-between flex-wrap bg-white p-6`}
    >
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold flex justify-center gap-4 p-2  rounded-lg hover:bg-slate-200 cursor-pointer items-center text-xl tracking-tight">
          <Image
            src="/page-icon.svg"
            width={30}
            height={30}
            alt="google docs logo"
            className="text-white"
          />{" "}
          Co-Write Docs
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"></button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
