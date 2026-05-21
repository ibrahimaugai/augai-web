"use client";

import Image from "next/image";

import FooterBottom from "./FooterBottom";
import footerBg from "./public/Contact.jpg";

export default function FooterSection() {
  return (
    <section id="footer" className="flex flex-col bg-white text-black">
      <div className="w-full">
        <div className="relative w-full flex-[2] overflow-hidden bg-black">
          <Image
            src={footerBg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 mx-auto flex min-h-[44vh] w-full flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <h2 className="max-w-4xl text-4xl font-light leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Unlock the Future AI-Powered
              <br />
              Services Tailored to You
            </h2>

            <a
              href="/contactus#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90"
            >
              Connect Now
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-200/90">
          <div className="mx-auto w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-14">
            <FooterBottom />
          </div>
        </div>
      </div>
    </section>
  );
}

