import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function notFound404() {
  return (
    <div className="flex items-center justify-center  w-full h-screen flex-col gap-2 group">
      <span className="text-8xl sm:text-9xl font-bold mb-3">404</span>
      <span className="text-base sm:text-xl font-medium">
        Couldn't find the blog you were looking for
      </span>
      <Link
        href={"/"}
        className="text-lg sm:text-2xl font-bold flex items-center gap-4 group-hover:scale-120"
      >
        Back to homepage <ArrowUturnLeftIcon className="w-5 h-5 font-bold " />
      </Link>
    </div>
  );
}
