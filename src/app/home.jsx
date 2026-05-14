"use client";
import Image from "next/image";
import { useState } from "react";

import hero from "./public/herobg.png";
import logo from "./public/augailogo.png";
import ServicesSection from "./services";
import TranformationalSection from "./tranformational";
import OurClientsSection from "./ourclients";
import QuestionsSection from "./questions";
import BlogsSection from "./blogs";
import FooterSection from "./footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <section className="relative h-screen bg-black">
        <Image
          src={hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/55" />

        <div className="relative z-10 flex h-screen flex-col">
          <header>
            <nav className="relative mx-auto w-full px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between rounded-full bg-transparent px-5 py-3.5 backdrop-blur-sm sm:px-7">
                <a href="/" className="flex items-center gap-3">
                  <Image
                    src={logo}
                    alt="AugAI logo"
                    priority
                    className="h-10 w-auto sm:h-11"
                  />
                </a>

                <div className="hidden items-center gap-12 lg:flex">
                  <a href="/" className="text-base font-medium text-white/70">
                    Home
                  </a>
                  <a
                    href="/services"
                    className="text-base font-medium text-white/70"
                  >
                    Services
                  </a>
                  <a href="/blogs" className="text-base font-medium text-white/70">
                    Blogs
                  </a>
                  <a href="/aboutus" className="text-base font-medium text-white/70">
                    About Us
                  </a>
                  <a
                    href="#get-started"
                    className="rounded-full bg-white px-6 py-2.5 text-base font-semibold text-black shadow-sm transition hover:bg-white/90"
                  >
                    Get Started
                  </a>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
                  aria-label="Toggle Menu"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {isOpen && (
                <div className="absolute left-4 right-4 top-20 z-50 rounded-3xl bg-black/80 p-6 backdrop-blur-lg lg:hidden">
                  <div className="flex flex-col items-center gap-6 text-center">
                    <a
                      href="/"
                      className="text-lg font-medium text-white/70"
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </a>
                    <a
                      href="/services"
                      className="text-lg font-medium text-white/70"
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="/blogs"
                      className="text-lg font-medium text-white/70"
                      onClick={() => setIsOpen(false)}
                    >
                      Blogs
                    </a>
                    <a
                      href="/aboutus"
                      className="text-lg font-medium text-white/70"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </a>
                    <a
                      href="#get-started"
                      className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black shadow-sm transition hover:bg-white/90"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              )}
            </nav>
          </header>

          <main className="my-auto">
            <div className="ml-4 sm:ml-6 ">
              <div className="pl-4 sm:pl-6">
                <h1 className="max-w-4xl text-2xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                  AI solutions that
                  <br />
                  drive efficiency
                  <br />
                  &amp; innovation
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
                  At Aug AI, we’re transforming the way businesses leverage
                  technology through innovative, human-centered AI solutions. We
                  believe that artificial intelligence should be more than just
                  cutting-edge—it should be practical, adaptable, and tailored to
                  the unique challenges of each business we serve.
                </p>

                <div className="mt-10">
                  <a
                    href="#get-started"
                    className="inline-flex items-center justify-center rounded-full bg-white px-10 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <ServicesSection />
      <TranformationalSection />
      <OurClientsSection />
      <QuestionsSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
}

