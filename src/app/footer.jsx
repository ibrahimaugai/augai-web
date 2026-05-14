"use client";

import Image from "next/image";

import footerBg from "./public/contact.jpg";
import footerLogo from "./public/background.png";

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
            <h2 className="max-w-4xl text-3xl font-light leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-5xl">
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

        <div className="mx-auto w-full flex-1 px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-14">
          <div className="mt-12 lg:mt-14">
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
                {/* Row 1 */}
                <div className="hidden lg:flex lg:col-start-1 lg:row-start-1">786-744-4606</div>
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
                  <div className="hidden lg:flex text-sm font-medium text-black/60">Subscribe</div>
                </div>

                {/* Row 2 */}
                <div className="hidden lg:flex lg:col-start-1 lg:row-start-2">hr@augai.ai</div>
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

          <div className="flex justify-between mt-10 text-md text-black/55">
            <div className="flex lg:hidden lg:col-start-1 lg:row-start-2">hr@augai.ai</div>
            <div className="flex lg:hidden lg:col-start-1 lg:row-start-1">786-744-4606</div>

          </div>






          <div className="mt-4 h-px w-full bg-blue-200/70" />

          <div className="mt-8 flex flex-col gap-6 pb-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-center lg:justify-start gap-3">
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

            <div className="text-sm text-black/45 flex justify-center lg:justify-start">
              Copyright {new Date().getFullYear()} © All Right Reserved Aug AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

