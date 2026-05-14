"use client";

import Image from "next/image";

import detailImage from "../public/detail.png";

export default function BlogResearchSection() {
  return (
    <section
      className="flex min-h-[100svh] flex-col justify-center bg-white py-12 text-neutral-800 sm:py-14 lg:py-16"
      aria-label="Article body"
    >
      <div className="mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-14">
        <h2
          id="research-destination-heading"
          className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-[1.625rem]"
        >
          Research Your Destination
        </h2>
        <p className="mt-5 text-base font-medium leading-relaxed sm:text-[1.0625rem] sm:leading-[1.75]">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p className="mt-5 text-base font-medium leading-relaxed sm:text-[1.0625rem] sm:leading-[1.75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <blockquote className="my-8 border-l-[5px] border-[#2563eb] bg-[#eef2ff] px-6 py-8 sm:my-10 sm:px-10 sm:py-10">
          <p className="max-w-none text-left font-serif text-lg italic leading-relaxed text-neutral-800 sm:text-xl sm:leading-relaxed">
            &ldquo; Traveling can expose you to new environments and potential
            health risks, so it&apos;s crucial to take precautions to stay safe
            and healthy. &rdquo;
          </p>
        </blockquote>

        <div className="flex w-full shrink-0 justify-start">
          <Image
            src={detailImage}
            alt=""
            width={920}
            height={518}
            sizes="(max-width: 640px) 92vw, 560px"
            className="h-auto max-h-[232px] w-auto max-w-full object-contain object-left sm:max-h-[260px] lg:max-h-[288px]"
          />
        </div>

        <h2 className="mt-10 text-2xl font-bold tracking-tight text-neutral-900 sm:mt-12 sm:text-[1.625rem] lg:mt-14">
          Plan Your Itinerary
        </h2>
        <p className="mt-5 text-base font-medium leading-relaxed sm:text-[1.0625rem] sm:leading-[1.75]">
          While it&apos;s essential to leave room for spontaneity and
          unexpected adventures, having a rough itinerary can help you make the
          most of your time and budget. Identify the must-see sights and
          experiences and prioritize them according to your interests and
          preferences. This will help you avoid overscheduling and ensure that
          you have time to relax and enjoy your journey.
        </p>
        <p className="mt-5 text-base font-medium leading-relaxed sm:text-[1.0625rem] sm:leading-[1.75]">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Massa ultricies mi quis hendrerit dolor magna eget est. Euismod in
          pellentesque massa placerat duis ultricies lacus sed turpis.
          Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.
        </p>
      </div>
    </section>
  );
}
