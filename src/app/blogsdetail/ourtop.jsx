"use client";

import Image from "next/image";

import card1 from "../public/card1.png";
import card2 from "../public/card2.png";
import card3 from "../public/card3.png";

function Avatar({ name }) {
  const initial = (name?.trim()?.[0] ?? "A").toUpperCase();
  return (
    <div className="grid h-8 w-8 place-items-center rounded-full bg-black/10 text-xs font-semibold text-black/70">
      {initial}
    </div>
  );
}

const posts = [
  {
    image: card1,
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    image: card2,
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    image: card3,
    category: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
];

export default function OurTopReadsSection() {
  return (
    <section
      className="flex min-h-[100svh] flex-col justify-center bg-white text-black"
      aria-labelledby="our-top-reads-heading"
    >
      <div className="mx-auto flex w-full flex-col px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-14 lg:pb-14 lg:pt-24">
        <h2
          id="our-top-reads-heading"
          className="mx-auto max-w-5xl text-center text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="block">
            Discover{" "}
            <span className="ml-2 inline-flex items-center rounded-full bg-red-800 px-6 py-2 font-semibold text-white sm:ml-3 sm:px-7 sm:py-2.5">
              our top
            </span>{" "}
            reads &amp;
          </span>
          <span className="mt-3 block sm:mt-4">latest insights</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.author}
              className="flex h-full min-h-[480px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5 sm:min-h-[520px]"
            >
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="inline-flex rounded-md bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  {post.category}
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-black">
                  {post.title}
                </h3>

                <div className="mt-auto flex items-center gap-3 pt-6 text-sm text-black/45">
                  <Avatar name={post.author} />
                  <span className="font-medium text-black/50">{post.author}</span>
                  <span className="mx-1 text-black/20">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
