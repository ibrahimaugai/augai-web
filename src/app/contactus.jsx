"use client";

import Image from "next/image";

import contactHero from "./public/contactbg.png";
import footerLogo from "./public/background.png";
import ServicesNavbar from "./navbar";
import OurSuccessSection from "./aboutus/oursuccess";

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-black/30 text-black/70 transition hover:bg-black/5"
    >
      {children}
    </a>
  );
}

function ContactPageFooter() {
  return (
    <footer id="footer" className="bg-white text-black">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-14">
        <div className="mt-2 lg:mt-4">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={footerLogo}
              alt="Aug AI"
              className="h-14 w-auto"
              priority={false}
            />
          </div>

          <div className="mt-10 text-sm text-black/55">
            <div className="grid gap-y-7 lg:grid-cols-[220px_1fr_360px] lg:items-start lg:gap-x-16">
              <div className="hidden lg:flex lg:col-start-1 lg:row-start-1">
                786-744-4606
              </div>
              <div className="lg:col-start-2 lg:row-start-1">
                <div className="flex w-full max-w-[520px] items-center justify-between">
                  <a href="/" className="hover:text-black">
                    Home
                  </a>
                  <a href="/aboutus" className="hover:text-black">
                    About Us
                  </a>
                  <a href="/contactus#contact" className="hover:text-black">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="lg:col-start-3 lg:row-start-1 lg:justify-self-end">
                <div className="hidden text-sm font-medium text-black/60 lg:flex">
                  Subscribe
                </div>
              </div>

              <div className="hidden lg:flex lg:col-start-1 lg:row-start-2">
                hr@augai.ai
              </div>
              <div className="lg:col-start-2 lg:row-start-2">
                <div className="grid grid-cols-3 gap-x-16">
                  <a href="/services" className="hover:text-black">
                    Services
                  </a>
                  <a href="/blogs" className="hover:text-black">
                    Blogs
                  </a>
                  <span aria-hidden="true" />
                </div>
              </div>
              <div className="lg:col-start-3 lg:row-start-2">
                <div className="flex w-full overflow-hidden rounded-lg border border-black/10 bg-white">
                  <input
                    type="email"
                    placeholder="Get Updates, Stay Ahead"
                    className="w-full px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none"
                  />
                  <button
                    type="button"
                    aria-label="Subscribe"
                    className="grid w-14 place-items-center bg-blue-600 text-white transition hover:bg-blue-700"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M13.2 5.3a1 1 0 0 1 1.4 0l6.4 6.4a1 1 0 0 1 0 1.4l-6.4 6.4a1 1 0 1 1-1.4-1.4l4.7-4.7H4a1 1 0 1 1 0-2h13.9l-4.7-4.7a1 1 0 0 1 0-1.4Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between text-md text-black/55 lg:hidden">
          <div>hr@augai.ai</div>
          <div>786-744-4606</div>
        </div>

        <div className="mt-4 h-px w-full bg-blue-200/70" />

        <div className="mt-8 flex flex-col gap-6 pb-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <SocialIcon label="LinkedIn">
              <span className="text-xs font-semibold">in</span>
            </SocialIcon>
            <SocialIcon label="Facebook">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.2l.8-3H13V9c0-.6.4-1 1-1Z"
                />
              </svg>
            </SocialIcon>
            <SocialIcon label="Twitter">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M18.9 7.1c.01.14.01.28.01.43 0 4.4-3.35 9.48-9.48 9.48-1.88 0-3.62-.55-5.09-1.5.26.03.52.04.79.04 1.56 0 3-.53 4.14-1.43-1.46-.03-2.69-.99-3.11-2.31.2.03.4.05.61.05.29 0 .59-.04.86-.11-1.53-.31-2.69-1.66-2.69-3.28v-.04c.45.25.97.41 1.52.43-.9-.6-1.49-1.63-1.49-2.79 0-.61.16-1.18.46-1.67 1.65 2.03 4.12 3.36 6.91 3.5-.05-.24-.08-.49-.08-.75 0-1.82 1.47-3.29 3.29-3.29.95 0 1.81.4 2.41 1.04.75-.15 1.45-.42 2.09-.8-.25.77-.77 1.41-1.45 1.82.66-.08 1.3-.26 1.89-.52-.45.66-1.01 1.25-1.66 1.72Z"
                />
              </svg>
            </SocialIcon>
          </div>

          <div className="flex justify-center text-sm text-black/45 lg:justify-start">
            Copyright {new Date().getFullYear()} © All Right Reserved Aug AI
          </div>
        </div>
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
