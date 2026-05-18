import Image from "next/image";

import transformBg from "./public/tranform.png";
import hand from "./public/hand.png";

export default function TranformationalSection() {
  const steps = [
    {
      n: "1",
      title: "Discovery & Requirement Gathering",
      body: "We define the project's scope, objectives, and requirements to align our solutions with your goals.",
    },
    {
      n: "2",
      title: "Feasibility & Strategic Planning",
      body: "We assess feasibility and create a roadmap that aligns scope, budget, and timelines.",
    },
    {
      n: "3",
      title: "Solution Design",
      body: "Our team designs scalable solutions, translating your vision into a technical blueprint.",
    },
    {
      n: "4",
      title: "Agile Development",
      body: "Agile development ensures flexibility, feedback, and continuous improvement.",
    },
    {
      n: "5",
      title: "Testing & Quality Assurance",
      body: "We rigorously test each solution for performance, security, and scalability.",
    },
    {
      n: "6",
      title: "Deployment & Delivery",
      body: "We deploy seamlessly, with ongoing support and optimization as your business grows.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black">
      <Image
        src={transformBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-32 pt-16 sm:px-8 sm:pb-36 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24 lg:pr-[min(34vw,420px)] xl:pr-[min(30vw,440px)]">
        <h2 className="max-w-[20ch] text-5xl font-light leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block">
            The <span className="font-extrabold">Aug ai</span>
          </span>
          <span className="mt-4 block sm:mt-5">transformational</span>
          <span className="mt-4 block sm:mt-5">process</span>
        </h2>

        <div className="mt-14 w-full font-roboto sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-14 lg:gap-x-16 lg:gap-y-16">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-5 sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-indigo-900 sm:h-14 sm:w-14 sm:text-lg">
                  {step.n}
                </div>
                <div className="min-w-0 flex-1 pr-2 sm:pr-4">
                  <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl lg:text-[1.35rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-relaxed text-white/90 sm:mt-4 sm:text-lg sm:leading-8 lg:text-[1.125rem] lg:leading-8">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Image
        src={hand}
        alt=""
        priority
        className="pointer-events-none absolute bottom-0 right-0 hidden h-auto w-[52vw] max-w-[420px] select-none md:block sm:w-[38vw] md:w-[30vw] lg:w-[28vw] xl:w-[26vw]"
      />
    </section>
  );
}
