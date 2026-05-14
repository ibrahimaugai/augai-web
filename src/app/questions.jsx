"use client";

import Image from "next/image";

import questionBg from "./public/question.png";
import robot from "./public/robot.png";

export default function QuestionsSection() {
  const faqs = [
    "What AI and Machine Learning services do you offer?",
    "How can staff augmentation benefit my business?",
    "How does Aug AI ensure the quality of its AI solutions?",
    "What makes Aug AI different from other AI solution providers?",
  ];

  return (
    <section className="relative min-h-screen bg-black text-white">
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
        className="hidden md:flex pointer-events-none absolute bottom-0 right-0 z-10 h-auto w-[46vw] max-w-[380px] select-none sm:w-[36vw] md:w-[30vw] lg:w-[26vw]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <h2 className="mx-auto lg:max-w-4xl text-center text-4xl font-light leading-[1.22] tracking-tight sm:text-5xl lg:text-6xl">
          Your questions, answered
          <br />
            <span className="mt-3 block">
              discover everything you need to know!
            </span>
        </h2>

        <div className="mt-14 w-full">
          <div className="max-w-[760px]">
            {faqs.map((q, idx) => (
              <div key={q} className="relative">
                <div className="flex items-center justify-between gap-8 py-10">
                  <p className="text-lg font-medium text-white/90 sm:text-xl">
                    {q}
                  </p>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center text-white/80">
                    <span className="text-4xl font-extralight leading-none">
                      +
                    </span>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="h-px w-full bg-white/20"
                />

                {idx === faqs.length - 1 ? null : (
                  <div aria-hidden="true" className="hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

