import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

async function getPost(id) {
  // id parametresi alıyoruz.
  const res = await fetch(`https://dummyjson.com/posts/${id}`); // dummyjson.com'a istek atıyoruz.
  return res.json(); // gelen datayi json formatında döndürüyoruz.
}

export default async function BlogPage({ params }) {
  const { id, title, body, tags, reactions, userId } = await getPost(params.id);

  if (!id) {
    return notFound();
  }

  return (
    <div className="flex items-center justify-center w-full gap-4 text-center flex-col px-4 py-2 mt-10">
      <div className="max-w-4xl relative w-full h-60">
        <Image
          src={`https://picsum.photos/960/400?random=${params.id}`}
          alt={title}
          className="rounded-lg object-cover"
          fill
        />
      </div>
      <div className="flex items-center justify-center w-full max-w-4xl p-2 space-x-4">
        <div className="flex items-center justify-center space-x-2">
          <Image
            src={`https://i.pravatar.cc/150?img=${userId}}`}
            alt={title}
            className="rounded-full object-cover"
            width={50}
            height={50}
          />
        </div>
        <span className="text-sm text-main-gray dark:text-main-white font-medium">
          {new Date().toLocaleDateString()}
        </span>
        <span className="text-sm text-main-gray dark:text-main-white font-medium">
          {new Date().toLocaleTimeString()}
        </span>
        <span className="text-sm text-main-gray dark:text-main-white font-medium flex items-center ">
          {userId} <HeartIcon className="h-5 w-5 text-red-500 ml-0.5 cursor-pointer" />
        </span>
      </div>
      <div className="flex items-center justify-center w-full max-w-4xl p-2 space-x-4">
        {tags.map((tag) => (
          <span
            key={id}
            className="text-xs cursor-pointer text-main-gray dark:text-main-white font-medium bg-main-gray/10 dark:bg-white/10 px-3 py-1 rounded-xl hover:bg-main-blue hover:text-main-white transition-all duration-300 ease-in-out"
          >
            {tag}
          </span>
        ))}
        <span className="text-xs text-main-gray dark:text-main-white font-medium bg-main-gray/10 dark:bg-white/10 px-3 py-1 rounded-xl">
          {reactions} min read
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-4 space-y-4">
        <h1 className="text-4xl font-bold text-main-black dark:text-main-white">{title}</h1>
        <p className="text-gray-500 ">{body}</p>
      </div>
    </div>
  );
}
