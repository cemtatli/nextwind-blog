import Image from "next/image";
import Blog from "@/components/blog";

async function getPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=25"); // dummyjson.com'a istek atıyoruz.
  return res.json(); // gelen datayi json formatında döndürüyoruz.
}

export default async function Home() {
  const { posts } = await getPosts(); // getPosts fonksiyonunu çağırıyoruz. // getPosts fonksiyonunu çağırıyoruz.

  return (
    <>
      {
        // posts dizisini map ediyoruz.
        posts.map((post) => (
          <Blog key={post.id} {...post} /> // Blog componentine props olarak gönderiyoruz.
        ))
      }
    </>
  );
}
