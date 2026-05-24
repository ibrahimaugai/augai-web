"use client";

import Image from "next/image";

import ServicesNavbar from "../navbar";
import macroEyeIris from "../public/macro-eye-iris 1.png";
import pariWomanWithTablet from "../public/woman-holding-pen-tablet-with-lg-logo-it 1.png";
import OurApproachSection from "./ourapproach";
import WhyChooseUsSection from "./whychooseus";
import OurSuccessSection from "./oursuccess";
import BrilliantTeamSection from "./brilliantteam";
import AboutFooterSection from "./aboutfooter";

export default function AboutUs() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-neutral-900">
      <ServicesNavbar
        activePage="about"
        ctaLabel="Get Started"
        ctaHref="/#footer"
      />

      {/* Hero — spacing matches home.jsx (ml + pl, no extra wide px) */}
      <section
        className="relative min-h-[min(520px,72svh)] w-full sm:min-h-[min(560px,65svh)] lg:min-h-[520px]"
        aria-labelledby="about-hero-heading"
      >
        <Image
          src={macroEyeIris}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-950/85 via-purple-950/70 to-blue-900/50"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-indigo-950/40" />

        <div className="relative z-10 flex min-h-[min(520px,72svh)] flex-col justify-center py-14 sm:min-h-[min(560px,65svh)] sm:py-16 lg:min-h-[520px] lg:py-20">
          <main className="w-full">
            <div className="ml-4 sm:ml-6">
              <div className="pl-4 sm:pl-6">
                <h1
                  id="about-hero-heading"
                  className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[3.25rem] md:leading-[1.08]"
                >
                  About Us
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/95 sm:mt-6 sm:text-lg md:text-xl md:leading-relaxed">
                  AUG AI empowers businesses with tailored AI and ML solutions,
                  leveraging Predictive Analytics, NLP, and Computer Vision to
                  optimize operations and unlock data potential.
                </p>
                <div className="mt-8 sm:mt-10">
                  <a
                    href="/#footer"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-10 py-3 text-sm font-semibold text-neutral-900 shadow-md transition hover:bg-white/95 sm:min-h-12 sm:text-base"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Mission — image left, copy left-aligned */}
      <section
        className="relative overflow-x-hidden overflow-y-visible bg-white py-14 sm:py-16 md:py-20 lg:py-24"
        aria-labelledby="mission-heading"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -left-12 top-20 h-48 w-48 rounded-full bg-violet-200/45 blur-2xl sm:h-64 sm:w-64" />
          <div className="absolute left-[18%] top-[48%] h-2 w-2 rounded-full bg-red-500/90" />
          <div className="absolute bottom-24 right-1/3 h-36 w-36 rounded-full bg-sky-100/80 blur-xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Image — pull left like home content, no extra center indent on desktop */}
            <div className="flex w-full justify-center lg:justify-start">
              <div className="relative w-full max-w-[min(100%,380px)] overflow-visible sm:max-w-md">
                <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full shadow-xl sm:max-w-[380px] lg:mx-0">
                  <Image
                    src={pariWomanWithTablet}
                    alt="Aug AI team member reviewing insights on a tablet"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
                <span className="absolute right-0 top-[8%] z-10 rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-600 shadow-md sm:px-5 sm:text-sm">
                  Smart Automation
                </span>
                <span className="absolute -left-[6rem] top-[68%] z-10 max-w-[13rem] -translate-y-1/2 rounded-full bg-white px-3 py-2 text-center text-xs font-semibold text-red-900 shadow-md sm:-left-32 sm:px-5 sm:text-sm">
                  AI-Powered Solutions
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col items-start lg:pl-4 xl:pl-8">
              <h2
                id="mission-heading"
                className="w-full max-w-xl text-left text-neutral-900"
              >
                <span className="block text-[2.375rem] font-normal leading-tight tracking-tight sm:text-[3.125rem] md:text-[3.25rem]">
                  Our
                </span>
                <span className="mt-1 block text-5xl font-bold tracking-tight sm:text-6xl">
                  Mission
                </span>
              </h2>
              <p className="mt-6 w-full max-w-xl text-left text-base font-medium leading-relaxed text-neutral-800 sm:text-lg">
                We aim to empower businesses by providing innovative AI solutions
                that enable smarter decision-making, improved efficiency, and
                sustainable growth. Our talented engineers work closely with
                clients to deliver solutions that not only address today&apos;s
                challenges but anticipate future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurApproachSection />
      <WhyChooseUsSection />
      <OurSuccessSection />
      <BrilliantTeamSection />
      <AboutFooterSection />
    </div>
  );
}
