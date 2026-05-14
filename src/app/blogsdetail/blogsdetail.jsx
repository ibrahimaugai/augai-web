"use client";

import Image from "next/image";

import blogDetailBanner from "../public/blogdetail.png";
import ServicesNavbar from "../navbar";
import BlogResearchSection from "./research";
import OurTopReadsSection from "./ourtop";
import FooterSection from "../footer";

export default function BlogDetail() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-neutral-900">
      <main>
      {/* First viewport: navbar + heading + banner (banner fills leftover height). */}
      <div className="flex h-[100svh] max-h-[100svh] shrink-0 flex-col overflow-hidden">
        <div className="shrink-0">
          <ServicesNavbar
            activePage="blogs"
            ctaLabel="Contact Us"
            ctaHref="/contactus#contact"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="mx-auto w-full shrink-0 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-14 lg:pt-6">
            <header>
              <h1
                className="text-2xl font-bold leading-snug tracking-tight text-neutral-900 sm:text-3xl sm:leading-tight lg:text-[2rem] lg:leading-[1.2] xl:text-[2.25rem]"
                id="blog-detail-title"
              >
                The Impact of Technology on the Workplace:
                <br />
                How Technology is Changing
              </h1>
              <time
                className="mt-3 block text-sm text-neutral-500 sm:mt-4 sm:text-base"
                dateTime="2022-08-20"
              >
                August 20, 2022
              </time>
            </header>
          </div>

          <div className="relative mt-4 min-h-0 w-full flex-1 sm:mt-5">
            <Image
              src={blogDetailBanner}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      <BlogResearchSection />
      <OurTopReadsSection />
      <FooterSection />
      </main>
    </div>
  );
}
