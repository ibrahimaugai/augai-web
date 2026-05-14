"use client";

import Image from "next/image";

import blogsBanner from "../public/blogpage.png";
import ServicesNavbar from "../navbar";
import OurBlogsSection from "./ourblogs";
import FooterSection from "../footer";

export default function BlogsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <ServicesNavbar
        activePage="blogs"
        ctaLabel="Contact Us"
        ctaHref="/contactus#contact"
      />

      <section
        className="relative pb-24 sm:pb-28 lg:pb-32"
        aria-labelledby="blogs-card-title"
      >
        <div className="relative min-h-[min(420px,52svh)] w-full sm:min-h-[min(480px,48svh)] lg:min-h-[520px]">
          <Image
            src={blogsBanner}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <article
          className="absolute bottom-[-2.25rem] left-4 right-4 z-10 mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18)] sm:bottom-[-2.75rem] sm:left-8 sm:right-auto sm:p-8 lg:bottom-[-3.25rem] lg:left-12 lg:max-w-2xl lg:p-10"
        >
          <p className="inline-flex rounded-full bg-[#2563eb] px-3.5 py-1 text-xs font-semibold text-white sm:px-4 sm:text-sm">
            Technology
          </p>
          <h1
            id="blogs-card-title"
            className="mt-4 text-2xl font-bold leading-snug tracking-tight text-neutral-900 sm:mt-5 sm:text-3xl sm:leading-tight lg:text-[1.75rem] lg:leading-snug xl:text-4xl"
          >
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <time
            className="mt-5 block text-sm text-neutral-500 sm:mt-6"
            dateTime="2022-08-20"
          >
            August 20, 2022
          </time>
        </article>
      </section>

      <OurBlogsSection />

      <FooterSection />
    </div>
  );
}
