"use client";

import Image from "next/image";

import card1 from "../public/card1.png";
import card2 from "../public/card2.png";
import card3 from "../public/card3.png";
import card4 from "../public/4.png";
import card5 from "../public/5.png";
import card6 from "../public/6.png";
import card7 from "../public/7.png";
import card8 from "../public/8.png";
import card9 from "../public/9.png";

const SHARED_TITLE =
  "The Impact of Technology on the Workplace: How Technology is Changing";

const posts = [
  { image: card1, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card2, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card3, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card4, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card5, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card6, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card7, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card8, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
  { image: card9, category: "Technology", title: SHARED_TITLE, date: "August 20, 2022" },
];

export default function OurBlogsSection() {
  return (
    <section
      className="bg-white pb-14 pt-16 text-neutral-900 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24"
      aria-labelledby="our-blog-heading"
    >
      <div className="mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-14">
        <h2
          id="our-blog-heading"
          className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Our Blog
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {posts.map((post, index) => (
            <article
              key={`our-blog-${index}`}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06]"
            >
              <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) calc((100vw - 6rem) / 3), (min-width: 640px) calc((100vw - 4rem) / 2), 92vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="inline-flex w-fit rounded-md bg-sky-100 px-3 py-1 text-xs font-semibold text-[#0284c7] sm:text-sm">
                  {post.category}
                </p>
                <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-neutral-900 sm:text-xl">
                  {post.title}
                </h3>
                <time
                  className="mt-auto pt-6 text-sm text-neutral-500"
                  dateTime="2022-08-20"
                >
                  {post.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-14 lg:mt-16">
          <a
            href="/blogsdetail"
            className="inline-flex min-h-[2.875rem] items-center justify-center rounded-full bg-[#2563eb] px-10 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] sm:min-h-12 sm:px-12 sm:text-base"
          >
            View More Blogs
          </a>
        </div>
      </div>
    </section>
  );
}
