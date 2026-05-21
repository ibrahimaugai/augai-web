"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import questionBanner from "../public/questionbanner.png";
import { serviceQuestionsContent } from "../serviceQuestionsContent";

const defaultContent = serviceQuestionsContent.services;

export default function ServicesQuestionsSection({ contentKey = "services" }) {
  const content = serviceQuestionsContent[contentKey] ?? defaultContent;
  const { title, subtitle, faqs } = content;
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setOpenIndex(null);
  }, [contentKey]);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      className="relative w-full bg-black text-white"
      aria-labelledby="services-faq-heading"
    >
      <div className="pointer-events-none absolute inset-0 min-h-full">
        <Image
          src={questionBanner}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,88rem)] flex-col px-3 pb-12 pt-10 sm:px-4 sm:pb-14 sm:pt-11 md:px-5 lg:px-6 lg:pb-16 lg:pt-12 xl:px-8">
        <h2
          id="services-faq-heading"
          className="mx-auto max-w-5xl text-center text-[clamp(1.75rem,4vw+0.5rem,3.5rem)] font-light leading-[1.2] tracking-tight sm:leading-[1.22]"
        >
          <span className="block">{title}</span>
          <span className="mt-2 inline-block text-[clamp(1.125rem,2.2vw+0.35rem,1.75rem)] font-normal leading-snug text-white/95 sm:mt-3">
            {subtitle}
          </span>
        </h2>

        <div className="mt-8 flex w-full justify-center sm:mt-9 md:mt-10 lg:mt-11">
          <div className="w-full max-w-[min(100%,56rem)] rounded-[1.5rem] border border-white/15 bg-white/10 px-4 py-2 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:max-w-[min(100%,60rem)] sm:rounded-[1.75rem] sm:px-7 sm:py-3 md:px-9 lg:max-w-[64rem] lg:rounded-[2rem] lg:px-10 xl:max-w-[68rem]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${contentKey}-${idx}`;

              return (
                <div key={faq.question} className="relative">
                  <button
                    id={`faq-trigger-${contentKey}-${idx}`}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left sm:gap-8 sm:py-6 md:gap-10 md:py-6 lg:py-7"
                  >
                    <span className="mx-auto min-w-0 flex-1 text-center text-[1.0625rem] font-medium leading-relaxed text-white/92 sm:text-xl md:text-[1.25rem] md:leading-relaxed lg:text-[1.3125rem] xl:text-[1.375rem]">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center text-white/85 transition-transform duration-200 sm:h-12 sm:w-12 md:h-[3.25rem] md:w-[3.25rem]"
                      aria-hidden
                    >
                      <span
                        className={`text-[2.25rem] font-extralight leading-none transition-transform duration-200 sm:text-4xl md:text-[2.75rem] ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`faq-trigger-${contentKey}-${idx}`}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mx-auto max-w-[52rem] px-2 pb-5 text-center text-[0.9375rem] font-medium leading-relaxed text-white/82 sm:px-4 sm:pb-6 sm:text-base md:pb-7 md:text-[1.0625rem] md:leading-[1.7] lg:text-[1.125rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {idx < faqs.length - 1 ? (
                    <div aria-hidden="true" className="h-px w-full bg-white/20" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
