"use client";

import Image from "next/image";

import ourSuccessBg from "../public/oursuccessbg.png";

const milestones = [
  { stat: "100+", label: "Project Completed" },
  { stat: "50+", label: "Satisfied Clients" },
  { stat: "40+", label: "Happy Employees" },
  { stat: "6+", label: "Years of Experience" },
];

export default function OurSuccessSection() {
  return (
    <section
      className="relative w-full overflow-x-hidden"
      aria-labelledby="success-milestones-heading"
    >
      <Image
        src={ourSuccessBg}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto w-full">
          <h2
            id="success-milestones-heading"
            className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Our Success Milestones
          </h2>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:max-w-none lg:grid-cols-4 xl:gap-8">
            {milestones.map(({ stat, label }) => (
              <div
                key={label}
                className="rounded-[14px] bg-white px-6 py-9 text-center shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] sm:py-10"
              >
                <p className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                  {stat}
                </p>
                <p className="mt-3 text-sm font-medium leading-snug text-neutral-900 sm:mt-4 sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
