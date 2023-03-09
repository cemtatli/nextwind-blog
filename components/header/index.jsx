import React from "react";
import Link from "next/link";
import DarkMode from "../darkmode";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="flex items-center justify-between dark:bg-main-black sticky top-0 px-4 py-2 ">
      <Link
        href={"/"}
        className="text-base md:text-lg font-semibold text-main-blue  dark:text-main-white dark:hover:text-amber-500 flex gap-1 items-center transition-colors "
      >
        Blog.app
      </Link>
      <nav className="flex items-center justify-center gap-4 lg:gap-8">
        <Link
          href={"/"}
          className="font-medium text-sm md:text-base lg:text-lg hover:text-main-blue dark:hover:text-amber-500 transition-colors"
        >
          Read
        </Link>
        <Link
          href={"/error"}
          className="font-medium text-sm md:text-base lg:text-lg hover:text-main-blue dark:hover:text-amber-500 transition-colors"
        >
          About
        </Link>
        <Link
          href={"https://twitter.com/vaycem"}
          target="_blank"
          className="font-medium text-sm md:text-base lg:text-lg hover:text-main-blue dark:hover:text-amber-500 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <DarkMode />
    </header>
  );
}
