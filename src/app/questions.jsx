"use client";

import { useState } from "react";
import Image from "next/image";

import questionBg from "./public/question.png";
import robot from "./public/robot.png";
import { serviceQuestionsContent } from "./serviceQuestionsContent";

const { title, subtitle, faqs } = serviceQuestionsContent.home;

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black text-white"
      aria-labelledby="home-faq-heading"
    >
      <Image
        src={questionBg}
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20" />

      <Image
        src={robot}
        alt=""
        priority={false}
        className="pointer-events-none absolute bottom-0 right-0 z-10 hidden h-auto w-[42vw] max-w-[340px] select-none md:flex lg:w-[28vw] lg:max-w-[380px] xl:max-w-[400px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16 xl:py-[4.5rem]">
        <h2
          id="home-faq-heading"
          className="mx-auto max-w-5xl text-center text-[clamp(1.75rem,4vw+0.5rem,3.75rem)] font-light leading-[1.2] tracking-tight sm:leading-[1.22] lg:text-[clamp(2.25rem,3.5vw,4rem)]"
        >
          <span className="block">{title}</span>
          <span className="mt-2 block text-[clamp(1.125rem,2.2vw+0.35rem,1.875rem)] font-normal leading-snug text-white/95 sm:mt-3">
            {subtitle}
          </span>
        </h2>

        <div className="mt-8 w-full sm:mt-10 lg:mt-12">
          <div className="w-full max-w-[min(100%,42rem)] sm:max-w-[min(100%,48rem)] md:max-w-[min(100%,52rem)] lg:max-w-[min(100%,56rem)] xl:max-w-[60rem]">
            <div className="h-px w-full bg-white/20" aria-hidden />

            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `home-faq-panel-${idx}`;

              return (
                <div key={faq.question}>
                  <button
                    id={`home-faq-trigger-${idx}`}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left sm:gap-6 sm:py-6 md:gap-8 md:py-7 lg:py-8"
                  >
                    <span className="min-w-0 flex-1 text-left text-base font-medium leading-snug text-white/92 sm:text-lg md:text-xl lg:text-[1.3125rem] lg:leading-snug xl:text-[1.375rem]">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center text-white/80 sm:h-12 sm:w-12 lg:h-[3.25rem] lg:w-[3.25rem]"
                      aria-hidden
                    >
                      <span
                        className={`text-[2.25rem] font-extralight leading-none transition-transform duration-200 sm:text-4xl lg:text-[2.75rem] ${
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
                    aria-labelledby={`home-faq-trigger-${idx}`}
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 text-left text-sm font-medium leading-relaxed text-white/82 sm:pb-5 sm:text-base md:pb-6 md:text-[1.0625rem] md:leading-[1.7] lg:text-[1.125rem] xl:max-w-[54rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/20" aria-hidden />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
