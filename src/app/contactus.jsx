"use client";

import Image from "next/image";

import contactHero from "./public/contactbg.png";
import FooterBottom from "./FooterBottom";
import ServicesNavbar from "./navbar";
import OurSuccessSection from "./aboutus/oursuccess";

function ContactPageFooter() {
  return (
    <footer
      id="footer"
      className="border-t border-neutral-200/90 bg-white text-black"
    >
      <div className="mx-auto w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-14">
        <FooterBottom />
      </div>
    </footer>
  );
}

export default function ContactUs() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-neutral-900">
      <ServicesNavbar ctaHref="#contact" />

      <section
        id="contact"
        className="relative w-full bg-white overflow-x-clip"
        aria-labelledby="contact-hero-heading"
      >
        {/* Fixed-height band so the image ends mid-layout; white bg shows beneath for card overlap */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 min-h-[608px] overflow-hidden sm:min-h-[636px] lg:min-h-0 lg:h-[515px] xl:h-[546px]">
          <Image
            src={contactHero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_top] sm:object-center"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-14 lg:py-10">
          <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[1fr,min(540px,100%)] lg:gap-12">
            <div className="flex min-h-[calc(608px-1.5rem)] min-w-0 flex-col justify-center sm:min-h-[calc(636px-2rem)] lg:min-h-[calc(515px-2.5rem)] xl:min-h-[calc(546px-2.5rem)]">
              <h1
                id="contact-hero-heading"
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]"
              >
                Contact Us
              </h1>
              <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-white sm:mt-5 sm:text-lg sm:leading-relaxed">
                We&apos;re here to help your business harness AI&apos;s full
                potential. For questions, project discussions, or expert AI
                advice, contact Aug AI today to start your journey to smarter,
                more efficient operations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-xl shadow-black/10 ring-1 ring-black/10 sm:p-10 lg:p-12 lg:min-h-[560px] xl:min-h-[600px]">
              <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                Let&apos;s Get Started Today!
              </h2>
              <form className="mt-7 grid grid-cols-1 gap-5 sm:mt-8" noValidate>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-[3.25rem] sm:text-[0.9375rem]"
                />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    autoComplete="tel"
                    className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-[3.25rem] sm:text-[0.9375rem]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Mail"
                    autoComplete="email"
                    className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-[3.25rem] sm:text-[0.9375rem]"
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Details"
                  autoComplete="organization"
                  className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:h-[3.25rem] sm:text-[0.9375rem]"
                />
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={7}
                  className="min-h-[176px] w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3.5 text-sm text-black placeholder:text-black/40 focus:border-blue-500 focus:outline-none sm:min-h-[192px] sm:text-[0.9375rem]"
                />
                <button
                  type="submit"
                  className="mt-1 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#2563eb] px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] sm:h-14 sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <OurSuccessSection />
      <ContactPageFooter />
    </div>
  );
}
