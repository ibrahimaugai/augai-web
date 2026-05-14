"use client";

import Image from "next/image";

import blueBg from "../public/bluebg.png";
import personUsingAi from "../public/person-using-ai-tool-job 1.png";

export default function OurApproachSection() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden text-white"
      aria-labelledby="our-approach-heading"
    >
      <Image
        src={blueBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl sm:top-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-24 right-0 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl sm:right-0 sm:h-80 sm:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-2xl"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-center gap-12 py-16 sm:gap-14 sm:py-20 lg:flex-row lg:items-center lg:gap-14 lg:py-16 xl:gap-16">
        {/* Left — same indent as home.jsx hero (ml + pl only, no extra wide section px) */}
        <div className="flex w-full min-w-0 flex-1 flex-col justify-center lg:w-1/2">
          <div className="ml-4 sm:ml-6">
            <div className="pl-4 sm:pl-6">
              <div className="max-w-3xl pr-4 sm:pr-6">
                <h2 id="our-approach-heading" className="text-white">
                  <span className="block text-5xl font-normal leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
                    Our
                  </span>
                  <span className="mt-2 block text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
                    Approach
                  </span>
                </h2>
                <p className="mt-8 max-w-3xl text-left text-lg leading-relaxed text-white/95 sm:mt-10 sm:text-xl sm:leading-relaxed md:text-xl md:leading-[1.75]">
                  At AUG AI, we seamlessly integrate AI into your business,
                  tailoring solutions like chatbots, machine learning models, and
                  predictive analytics to meet your goals. Our expert team drives
                  innovation and results through consultative collaboration and
                  skilled staff augmentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — image slightly smaller than before; mirror a little right margin like readable edge */}
        <div className="flex w-full min-w-0 flex-1 items-center justify-center lg:w-1/2 lg:justify-end">
          <div className="relative mr-4 w-full max-w-[17.5rem] sm:mr-6 sm:max-w-xs md:max-w-sm lg:mr-8 lg:max-w-md xl:max-w-lg">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl sm:aspect-[5/6]"
              style={{
                borderRadius: "50% 50% 0 0 / 38% 38% 0 0",
              }}
            >
              <Image
                src={personUsingAi}
                alt="Person using AI tools on a laptop"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 94vw, 45vw"
              />
            </div>
            <span className="absolute right-0 top-[6%] z-10 max-w-[13rem] rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-blue-600 shadow-lg sm:top-[8%] sm:max-w-none sm:px-6 sm:text-base">
              Seamless Deployment
            </span>
            <span className="absolute bottom-[12%] left-0 z-10 max-w-[16rem] -translate-x-[6rem] rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-red-900 shadow-lg sm:-translate-x-24 sm:px-5 sm:text-base md:-translate-x-36">
              Client-Centric Approach
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
