"use client";

import { useState } from "react";

import { serviceQuestionsContent } from "../serviceQuestionsContent";

const { title, subtitle, faqs } = serviceQuestionsContent.staffaugmentation;

export default function Discover() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      className="bg-white text-black"
      aria-labelledby="discover-faq-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-11 md:py-12 lg:px-8 lg:py-14">
        <h2
          id="discover-faq-heading"
          className="mx-auto max-w-4xl text-[clamp(1.75rem,4vw+0.5rem,3.75rem)] font-bold leading-[1.22] tracking-tight text-black lg:max-w-5xl"
        >
          <span className="block">{title}</span>
          <span className="mt-3 block text-[clamp(1.125rem,2vw+0.35rem,1.875rem)] font-light lowercase leading-snug tracking-normal text-neutral-600 sm:mt-4 lg:text-3xl">
            {subtitle}
          </span>
        </h2>

        <div className="mt-8 w-full sm:mt-9 lg:mt-10">
          <div className="mx-auto w-full max-w-[min(100%,52rem)] lg:max-w-[56rem] xl:max-w-[60rem]">
            <div className="h-px w-full bg-neutral-200" aria-hidden />

            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `staff-faq-panel-${idx}`;

              return (
                <div key={faq.question}>
                  <button
                    id={`staff-faq-trigger-${idx}`}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left sm:gap-6 sm:py-6 md:py-6"
                  >
                    <span className="min-w-0 flex-1 text-left text-base font-medium leading-snug text-black sm:text-lg md:text-xl md:leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center text-black/70 sm:h-12 sm:w-12"
                      aria-hidden
                    >
                      <span
                        className={`text-[2.25rem] font-extralight leading-none transition-transform duration-200 sm:text-4xl ${
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
                    aria-labelledby={`staff-faq-trigger-${idx}`}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-left text-sm font-medium leading-relaxed text-neutral-700 sm:pb-5 sm:text-base sm:leading-relaxed md:pb-6 md:text-[1.0625rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-neutral-200" aria-hidden />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
