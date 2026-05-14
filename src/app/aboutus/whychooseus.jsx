"use client";

import Image from "next/image";

import robotAi from "../public/robotai.png";

const points = [
  {
    n: "01",
    title: "Expertise",
    body: "Our team is made up of highly qualified AI and ML engineers, data scientists, and technical experts with experience across multiple industries.",
  },
  {
    n: "02",
    title: "Flexibility",
    body: "We customize AI solutions to meet the specific needs of startups, enterprises, and everything in between.",
  },
  {
    n: "03",
    title: "Scalability",
    body: "Our AI models and solutions grow with your business, ensuring that you're always at the forefront of innovation.",
  },
  {
    n: "04",
    title: "Results-Oriented",
    body: "From improving productivity to making data-driven decisions, our focus is on delivering measurable outcomes.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-x-hidden bg-white py-16 text-neutral-900 sm:py-20 lg:py-0"
      aria-labelledby="why-choose-heading"
    >
      <div className="grid w-full flex-1 grid-cols-1 items-center gap-12 lg:min-h-[100svh] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:gap-x-8 xl:gap-x-14">
        {/* Left — ~45%: home-style ml + pl */}
        <div className="relative min-w-0">
          <div className="pointer-events-none absolute -left-8 top-1/3 h-48 w-48 rounded-full bg-sky-100/60 blur-2xl sm:h-64 sm:w-64" aria-hidden />
          <div className="pointer-events-none absolute bottom-12 left-1/4 h-32 w-32 rounded-full bg-blue-100/50 blur-xl" aria-hidden />

          <div className="relative ml-4 sm:ml-6">
            <div className="pl-4 sm:pl-6">
              <h2
                id="why-choose-heading"
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                Why Choose Us?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-800 sm:mt-5 sm:text-lg">
                Why do businesses choose AUG AI for their AI needs? Here&apos;s
                what makes us unique.
              </p>

              <div className="relative mx-auto mt-10 max-w-md sm:mt-12 lg:mx-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/[0.06] sm:rounded-3xl">
                  <Image
                    src={robotAi}
                    alt="AI robot holding a glowing AI core"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 42vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — ~55%: home-mirror mr + pr, 2×2 grid */}
        <div className="min-w-0">
          <div className="ml-4 mr-4 sm:ml-6 sm:mr-6 lg:ml-0">
            <div className="pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pl-4 lg:pr-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:gap-x-6 lg:gap-y-11 xl:gap-x-10">
                {points.map(({ n, title, body }) => (
                  <article key={n} className="min-w-0">
                    <div className="flex flex-col items-start gap-0">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-neutral-200/90 bg-white text-base font-bold tabular-nums text-red-900 shadow-[0_4px_16px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] sm:h-16 sm:w-16 sm:rounded-2xl sm:text-xl">
                        {n}
                      </div>
                      <h3 className="mt-4 text-xl font-bold tracking-tight text-neutral-900 sm:mt-5 sm:text-2xl md:text-[1.75rem]">
                        {title}:
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-800 sm:mt-4 sm:text-base sm:leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
