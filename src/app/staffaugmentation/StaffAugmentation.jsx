"use client";

import Image from "next/image";

import ServicesNavbar from "../Services/navbar";
import staffBanner from "../public/staffbanner.png";
import Benefits from "./benefits";
import Models from "./models";
import StaffProcess from "./staffprocess";
import WhyChoose from "./whychoose";
import Discover from "./discover";
import MainFooterSection from "../mainfooter";

export default function StaffAugmentation() {
  return (
    <div className="bg-white text-neutral-900">
      <div className="flex h-[100svh] max-h-[100svh] min-h-0 flex-col overflow-hidden">
        <ServicesNavbar activePage="__" />

        <section
          className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden"
          aria-labelledby="staff-augmentation-heading"
        >
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={staffBanner}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent"
              aria-hidden
            />
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center py-5 sm:py-8 md:py-10 lg:py-12">
            <main className="w-full min-h-0 px-4 sm:px-6">
              <div className="ml-4 sm:ml-6">
                <div className="pl-4 sm:pl-6">
                  <h1
                    id="staff-augmentation-heading"
                    className="max-w-4xl text-[clamp(1.875rem,5vw+0.75rem,4.75rem)] font-extrabold leading-[1.05] tracking-tight text-white sm:leading-[1.02]"
                  >
                    Staff Augmentation
                  </h1>
                  <p className="mt-4 max-w-4xl text-[clamp(1rem,1.05vw+0.85rem,1.3125rem)] leading-relaxed tracking-normal text-white/95 sm:mt-6 sm:max-w-[42rem] sm:leading-[1.72] lg:mt-8 lg:max-w-[46rem] lg:text-[clamp(1.0625rem,1.35vw,1.35rem)] lg:leading-[1.72]">
                    Transform your content creation process with Generative AI,
                    generating text, images, and audio that mimic human creativity,
                    driving innovation and engagement.
                  </p>
                  <div className="mt-6 sm:mt-8 lg:mt-10">
                    <a
                      href="/#footer"
                      className="inline-flex min-h-[2.875rem] items-center justify-center rounded-full bg-white px-10 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90 sm:min-h-[3.25rem] sm:px-12 sm:text-base sm:py-3.5"
                    >
                      Find Your Solution
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>

      <Benefits />
      <Models />
      <StaffProcess />
      <WhyChoose />
      <Discover />
      <MainFooterSection />
    </div>
  );
}
