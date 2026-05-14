"use client";

import Image from "next/image";
import { useState } from "react";

import blackLogo from "./public/augaiblacklogo.png";

const navLinkClass =
  "text-base font-medium text-neutral-800 transition hover:text-neutral-950";
const activeNavClass =
  "text-base font-semibold text-[#1d4ed8] transition hover:text-[#1e40af]";

export default function ServicesNavbar({
  activePage = "services",
  ctaLabel = "Contact Us",
  ctaHref = "/contactus#contact",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navClass = (key) =>
    activePage === key ? activeNavClass : navLinkClass;
  const mobileActive = "text-lg font-semibold text-[#1d4ed8]";
  const mobileNormal = "text-lg font-medium text-neutral-700";

  return (
    <header className="relative z-50 shrink-0 border-b border-neutral-200/90 bg-white">
      <nav className="relative mx-auto w-full px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <div className="flex items-center justify-between px-3 py-2.5 sm:px-5 sm:py-3 lg:px-7 lg:py-3.5">
          <a href="/" className="flex shrink-0 items-center leading-none">
            <Image
              src={blackLogo}
              alt="Aug AI"
              priority
              className="h-9 w-auto sm:h-10 lg:h-11"
            />
          </a>

          <div className="hidden items-center gap-8 sm:gap-10 lg:gap-12 lg:flex">
            <a
              href="/"
              className={navClass("home")}
              aria-current={activePage === "home" ? "page" : undefined}
            >
              Home
            </a>
            <a
              href="/services"
              className={navClass("services")}
              aria-current={activePage === "services" ? "page" : undefined}
            >
              Services
            </a>
            <a
              href="/blogs"
              className={navClass("blogs")}
              aria-current={activePage === "blogs" ? "page" : undefined}
            >
              Blogs
            </a>
            <a
              href="/aboutus"
              className={navClass("about")}
              aria-current={activePage === "about" ? "page" : undefined}
            >
              About Us
            </a>
            <a
              href={ctaHref}
              className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] sm:px-6 sm:text-base"
            >
              {ctaLabel}
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral-800 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-black/20 lg:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed left-4 right-4 top-[4.5rem] z-[70] rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl sm:left-6 sm:right-6 sm:top-[5rem] lg:hidden">
            <div className="flex flex-col items-center gap-5 text-center">
              <a
                href="/"
                className={activePage === "home" ? mobileActive : mobileNormal}
                aria-current={activePage === "home" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/services"
                className={
                  activePage === "services" ? mobileActive : mobileNormal
                }
                aria-current={activePage === "services" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/blogs"
                className={activePage === "blogs" ? mobileActive : mobileNormal}
                aria-current={activePage === "blogs" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </a>
              <a
                href="/aboutus"
                className={activePage === "about" ? mobileActive : mobileNormal}
                aria-current={activePage === "about" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href={ctaHref}
                className="rounded-full bg-[#2563eb] px-8 py-3 text-lg font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
