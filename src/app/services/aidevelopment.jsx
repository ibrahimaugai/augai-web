import Image from "next/image";

import step1 from "../public/step1.png";
import step2 from "../public/step 2.svg";
import step3 from "../public/step 3.svg";
import step4 from "../public/step4.png";
import step5 from "../public/step 5.svg";
import step6 from "../public/step 6.svg";

const steps = [
  { n: 1, icon: step1, label: "Requirement Gathering" },
  { n: 2, icon: step2, label: "Data Collection & Preprocessing" },
  { n: 3, icon: step3, label: "Model Development & Training" },
  { n: 4, icon: step4, label: "Iterative Testing & Refinement" },
  { n: 5, icon: step5, label: "Deployment & Integration" },
  { n: 6, icon: step6, label: "Continuous Monitoring & Optimization" },
];

export default function AiDevelopmentSection() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col bg-white text-neutral-950"
      aria-labelledby="ai-development-heading"
    >
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <header className="mx-auto max-w-5xl text-center font-sans tracking-tight">
          <span className="block text-[clamp(1.6875rem,4.25vw,2.75rem)] font-normal leading-snug text-black lg:text-[clamp(1.75rem,3.25vw,2.875rem)]">
            Innovate With An Advanced, Scalable
          </span>
          <span className="mx-auto mt-4 inline-flex max-w-[min(100%,34rem)] justify-center rounded-full bg-[#A51D1D] px-8 py-3 text-center text-[clamp(1.3125rem,2.9vw,2.125rem)] font-semibold leading-tight text-white shadow-sm sm:max-w-[min(100%,36rem)] sm:px-11 sm:py-3.5 sm:text-[clamp(1.35rem,2.5vw,2.2rem)] md:mt-5 md:px-12 lg:py-4">
            Generative AI Development
          </span>
          <h2
            id="ai-development-heading"
            className="mt-4 text-[clamp(1.6875rem,4.25vw,2.75rem)] font-normal leading-snug text-black md:mt-5 lg:text-[clamp(1.75rem,3.25vw,2.875rem)]"
          >
            Process
          </h2>
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-x-14 gap-y-10 sm:mt-14 md:grid-cols-2 md:gap-y-12 lg:mt-14 lg:gap-x-14 lg:gap-y-14">
          {steps.map((s) => (
            <li key={s.n} className="flex min-w-0 gap-5 sm:gap-6">
              <div className="relative flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-full border-2 border-[#4A90E2] bg-white p-3 shadow-[0_0_0_1px_rgba(74,144,226,0.14),0_4px_20px_-6px_rgba(74,144,226,0.38)] sm:h-[5.25rem] sm:w-[5.25rem] sm:p-3.5">
                <Image
                  src={s.icon}
                  alt=""
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5 text-left">
                <p className="text-lg font-bold text-[#A51D1D] sm:text-xl">
                  Step {s.n}
                </p>
                <p className="mt-1 text-base font-medium leading-relaxed text-black sm:text-[1.05rem]">
                  {s.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
