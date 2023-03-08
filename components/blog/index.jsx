import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Blog({ title, body, tags, reactions, id }) {
  return (
    <Link
      href={`/${id}`}
      className="flex items-center justify-start gap-4 md:gap-8 w-full py-4 my-4 px-4 hover:bg-main-gray/10 dark:hover:bg-white/10 rounded-xl group transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-start shrink-0">
        <Image
          src={`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`}
          className=" w-20 h-20 rounded-md group-hover:border-amber-500  dark:group-hover:border-amber-500 group-hover:scale-110 transition-all duration-300 ease-in-out"
          alt="blog"
          width={80}
          height={80}
        />
      </div>
      <div>
        <h2 className="text-lg md:text-xl font-bold line-clamp-1 group-hover:text-main-blue dark:group-hover:text-amber-500">
          {title}
        </h2>
        <p className="text-sm text-main-gray dark:text-main-white  font-medium line-clamp">
          {body}
        </p>
        <div className="flex items-center justify-start gap-2 md:gap-4 mt-2 flex-wrap">
          {tags.map((tag) => (
            <span className="text-xs text-main-gray dark:text-main-white font-medium bg-main-gray/10 dark:bg-white/10 px-3 py-1 rounded-xl hover:bg-main-blue hover:text-main-white transition-all duration-300 ease-in-out">
              {tag}
            </span>
          ))}
          <span className="text-xs text-main-gray dark:text-main-white font-medium bg-main-gray/10 dark:bg-white/10 px-3 py-1 rounded-xl">
            {reactions} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
