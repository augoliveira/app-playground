"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import BasicMenu from "#/ui/BasicMenu";

import { NextLogo } from "../NextLogo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          aria-label="Read more about Seminole tax hike"
          onClick={close}
        >
          <div className="w-58 h-10 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div>
        </Link>

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>

          <li className="headerLink">TV Shows</li>

          <li className="headerLink">Movies</li>

          <li className="headerLink">New & Popular</li>

          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />

        <p className="hidden lg:inline">Kids</p>

        <BellIcon className="h-6 w-6" />

        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
