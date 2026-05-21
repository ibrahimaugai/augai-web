"use client";

import Image from "next/image";

import FooterBottom from "./FooterBottom";
import footerUnlock from "./public/unlock.png";

export default function MainFooterSection() {
  return (
    <section className="w-full bg-white text-black">
      {/* Top: form + unlock card */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 lg:px-14 lg:pb-14 lg:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="min-w-0 flex flex-col">
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
              Let&apos;s Get Started Today!
            </h2>

            <form className="mt-6 grid grid-cols-1 gap-4 sm:mt-7">
              <input
                type="text"
                placeholder="Your Name*"
                className="h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-12"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-12"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-12"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name*"
                className="h-11 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-12"
              />
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none"
              />

              <button
                type="button"
                className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:h-12 sm:text-base"
              >
                Schedule Your Call
              </button>
            </form>
          </div>

          <div className="min-w-0 flex min-h-[280px] flex-col lg:min-h-0">
            <div className="relative flex min-h-[280px] flex-1 overflow-hidden rounded-2xl bg-black/5 shadow-sm ring-1 ring-black/5 sm:min-h-[320px] sm:rounded-3xl lg:min-h-0">
              <Image
                src={footerUnlock}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
                priority={false}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full min-h-[240px] flex-col items-center justify-center px-6 py-10 text-center sm:px-8 sm:py-12">
                <h3 className="max-w-md text-2xl font-light leading-[1.2] tracking-tight text-white drop-shadow-sm sm:text-3xl lg:text-4xl xl:text-5xl">
                  Unlock the Future AI-Powered
                  <br />
                  Services Tailored to You
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200/90">
        <div className="mx-auto w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-14">
          <FooterBottom />
        </div>
      </div>
    </section>
  );
}