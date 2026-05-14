"use client";

import Image from "next/image";

import masadPortrait from "../public/masad.png";

const team = [
  { name: "M. Asad", role: "CEO AUGAI" },
  { name: "M. Asad", role: "CEO AUGAI" },
  { name: "M. Asad", role: "CEO AUGAI" },
  { name: "M. Asad", role: "CEO AUGAI" },
];

function TeamCard({ name, role, staggerDown }) {
  return (
    <div
      className={`flex min-h-[19.5rem] w-full max-w-[280px] flex-col items-center justify-between rounded-2xl bg-white px-5 pb-7 pt-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] sm:min-h-[20.5rem] sm:px-6 sm:pb-8 sm:pt-9 ${
        staggerDown
          ? "sm:mt-9 lg:mt-10 xl:mt-11"
          : "lg:mt-0"
      }`}
    >
      <div className="mx-auto shrink-0 rounded-full bg-gradient-to-b from-orange-200 via-orange-300 to-red-400 p-[2px] shadow-sm sm:p-[3px]">
        <div className="rounded-full bg-white p-[2px] sm:p-[3px]">
          <div className="relative mx-auto h-[7.25rem] w-[7.25rem] overflow-hidden rounded-full ring-2 ring-neutral-200 sm:h-32 sm:w-32">
            <Image
              src={masadPortrait}
              alt={name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 40vw, 144px"
            />
          </div>
        </div>
      </div>
      <div className="mt-auto flex w-full flex-col items-center pt-4">
        <p className="text-lg font-bold text-neutral-900 sm:text-xl">{name}</p>
        <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-[#2563eb] sm:text-sm">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function BrilliantTeamSection() {
  return (
    <section
      className="relative w-full overflow-x-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24"
      aria-labelledby="brilliant-team-heading"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-14">
        <h2
          id="brilliant-team-heading"
          className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-snug tracking-wide text-neutral-800 sm:text-4xl sm:leading-[1.35] md:text-[2.125rem] md:leading-[1.45] md:tracking-[0.02em]"
        >
          Our Brilliant Team Of AUG AI
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start justify-items-center gap-x-6 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0 xl:gap-x-7">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              staggerDown={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
