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

export default function StaffProcess() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col justify-start overflow-x-hidden bg-white text-neutral-950"
      aria-labelledby="staff-augmentation-process-heading"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <header className="text-center">
          <h2
            id="staff-augmentation-process-heading"
            className="mx-auto inline-flex max-w-[min(100%,48rem)] items-center justify-center rounded-full bg-[#A51D1D] px-7 py-3 text-center text-[clamp(1.125rem,2.8vw+0.65rem,2.125rem)] font-semibold leading-tight text-white shadow-md sm:px-10 sm:py-3.5 md:px-12 md:py-4 lg:px-14 lg:py-[1.125rem]"
          >
            Staff Augmentation Process
          </h2>
        </header>

        <ul className="mt-12 grid w-full list-none grid-cols-1 gap-x-8 gap-y-10 sm:mt-14 sm:gap-x-12 sm:gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-16 md:gap-y-14 lg:mt-[4.25rem] lg:gap-x-20 lg:gap-y-16">
          {steps.map((s) => (
            <li key={s.n} className="flex min-w-0 items-center gap-5 sm:gap-6 md:gap-8">
              <div className="relative flex h-[5rem] w-[5rem] shrink-0 items-center justify-center rounded-full border-2 border-[#4A90E2] bg-[#EEF6FF] p-3 shadow-[0_0_0_1px_rgba(74,144,226,0.14),0_4px_20px_-6px_rgba(74,144,226,0.35)] sm:h-[5.5rem] sm:w-[5.5rem] sm:p-3.5 md:h-24 md:w-24 md:p-4 lg:h-[5.75rem] lg:w-[5.75rem]">
                <Image
                  src={s.icon}
                  alt=""
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="text-lg font-bold text-[#A51D1D] sm:text-xl md:text-2xl">
                  Step {s.n}
                </p>
                <p className="mt-1 text-base font-medium leading-relaxed text-black sm:mt-1.5 sm:text-lg sm:leading-relaxed md:text-xl md:leading-snug">
                  {s.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
