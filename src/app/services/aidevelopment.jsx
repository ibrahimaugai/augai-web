import Image from "next/image";

import step1 from "../public/step1.png";
import step2 from "../public/step 2.svg";
import step3 from "../public/step 3.svg";
import step4 from "../public/step4.png";
import step5 from "../public/step 5.svg";
import step6 from "../public/step 6.svg";
import { serviceAiDevelopmentContent } from "../serviceAiDevelopmentContent";

const stepIcons = [step1, step2, step3, step4, step5, step6];
const defaultContent = serviceAiDevelopmentContent.services;

export default function AiDevelopmentSection({ contentKey = "services" }) {
  const content = serviceAiDevelopmentContent[contentKey] ?? defaultContent;
  const { line1, highlight, line3, steps } = content;

  return (
    <section
      className="relative w-full bg-white text-neutral-950"
      aria-labelledby="ai-development-heading"
    >
      <div className="relative z-10 mx-auto w-full max-w-[min(100%,88rem)] px-3 pb-10 pt-8 sm:px-4 sm:pb-12 sm:pt-9 md:px-5 md:pb-14 md:pt-10 lg:px-6 lg:pb-16 lg:pt-11 xl:px-8 xl:pb-[4.5rem] xl:pt-12 2xl:max-w-[92rem]">
        <header className="mx-auto max-w-5xl text-center font-sans tracking-tight">
          <span className="block text-[clamp(1.375rem,3.2vw+0.5rem,2.5rem)] font-normal leading-snug text-black">
            {line1}
          </span>
          <span className="mx-auto mt-3 inline-flex max-w-[min(100%,40rem)] justify-center rounded-full bg-[#A51D1D] px-6 py-2.5 text-center text-[clamp(1.0625rem,2.2vw+0.35rem,1.875rem)] font-semibold leading-tight text-white shadow-sm sm:mt-3.5 sm:px-9 sm:py-3 md:mt-4 md:px-10 lg:py-3.5">
            {highlight}
          </span>
          <h2
            id="ai-development-heading"
            className="mt-3 text-[clamp(1.375rem,3.2vw+0.5rem,2.5rem)] font-normal leading-snug text-black sm:mt-3.5 md:mt-4"
          >
            {line3}
          </h2>
        </header>

        <ul className="mt-8 grid list-none grid-cols-1 gap-x-6 gap-y-10 sm:mt-9 sm:gap-y-11 md:mt-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12 lg:mt-11 lg:gap-x-16 lg:gap-y-14 xl:grid-cols-3 xl:gap-x-16 xl:gap-y-[3.5rem] 2xl:gap-x-[5.5rem] 2xl:gap-y-16">
          {steps.map((s, index) => (
            <li key={s.n} className="flex min-w-0 gap-5 sm:gap-6 lg:gap-6 xl:gap-7">
              <div className="relative flex h-[clamp(4rem,8vw,5.5rem)] w-[clamp(4rem,8vw,5.5rem)] shrink-0 items-center justify-center rounded-full border-2 border-[#4A90E2] bg-white p-2.5 shadow-[0_0_0_1px_rgba(74,144,226,0.14),0_4px_20px_-6px_rgba(74,144,226,0.38)] sm:p-3">
                <Image
                  src={stepIcons[index]}
                  alt=""
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5 text-left">
                <p className="text-base font-bold text-[#A51D1D] sm:text-lg lg:text-xl">
                  Step {s.n}
                </p>
                <p className="mt-1 text-[0.9375rem] font-semibold leading-snug text-black sm:text-base lg:text-[1.0625rem] xl:text-[1.125rem]">
                  {s.label}
                </p>
                <p className="mt-2.5 text-[0.875rem] font-semibold leading-relaxed text-neutral-800 sm:mt-3 sm:text-[0.9375rem] sm:leading-[1.65] lg:text-base lg:leading-[1.7]">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
