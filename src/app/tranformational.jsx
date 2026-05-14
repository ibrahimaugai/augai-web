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

      <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col pl-4 pb-28 pt-16 sm:pl-6 sm:pb-32 sm:pt-20 lg:pb-20 lg:pt-24">
        <h2 className="max-w-[18ch] pl-4 text-5xl font-light leading-[1.12] tracking-tight text-white sm:pl-6 sm:text-6xl lg:text-7xl">
          <span className="block">
            The <span className="font-extrabold">Aug ai</span>
          </span>
          <span className="mt-4 block sm:mt-5">transformational</span>
          <span className="mt-4 block sm:mt-5">process</span>
        </h2>

        <div className="mt-12 pl-4 sm:pl-6 max-w-3xl">
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-12">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-indigo-900">
                  {step.n}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-sm font-medium leading-relaxed text-white/85">
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
        className="hidden md:flex absolute bottom-0 right-0 h-auto w-[52vw] max-w-[420px] select-none sm:w-[38vw] md:w-[30vw] lg:w-[24vw]"
      />
    </section>
  );
}

