"use client";

import FooterBottom from "../FooterBottom";

export default function AboutFooterSection() {
  return (
    <footer
      id="about-footer"
      className="border-t border-neutral-200/90 bg-white text-black"
    >
      <div className="mx-auto w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-14">
        <FooterBottom />
      </div>
    </footer>
  );
}
