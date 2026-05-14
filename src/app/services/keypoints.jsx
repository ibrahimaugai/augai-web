import Image from "next/image";

import groupBg from "../public/Group.png";

const points = [
  {
    num: "01",
    title: "Automated Content:",
    body:
      "Generate unique text, images, videos, and more to streamline creative workflows and save time.",
  },
  {
    num: "02",
    title: "Custom AI Solutions:",
    body:
      "Tailored AI models designed to meet specific business needs, from marketing content to personalized customer interactions.",
  },
  {
    num: "03",
    title: "Advanced Technologies:",
    body:
      "Leverage cutting-edge AI technologies like GPT and GANs for high-quality, scalable outputs.",
  },
  {
    num: "04",
    title: "Boost Efficiency:",
    body:
      "Automate repetitive tasks, allowing teams to focus on higher-value, creative strategies.",
  },
  {
    num: "05",
    title: "Scalable and Flexible:",
    body:
      "Solutions that grow with your business, allowing for seamless integration and expansion as needs evolve.",
  },
  {
    num: "06",
    title: "Innovation-Driven:",
    body:
      "Drive innovation by exploring new ways to engage audiences with AI-generated content.",
  },
];

export default function KeyPointsSection() {
  return (
    <section
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#2b6fdd] text-white"
      aria-labelledby="keypoints-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={groupBg}
          alt=""
          fill
          className="object-cover object-center opacity-[0.18]"
          sizes="100vw"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#256aeb]/88 via-[#256aeb]/93 to-[#1d5fd4]/92" />

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-4 py-14 sm:px-6 sm:py-18 lg:px-14 lg:py-24">
        <div className="mx-auto w-full max-w-[min(100%,82rem)]">
          <header className="mx-auto max-w-5xl px-2 text-center sm:px-0">
            <p className="text-[1.5rem] font-medium tracking-wide text-white sm:text-[1.75rem] md:text-[2.0625rem] lg:text-[2.375rem]">
              Key Points Of Our
            </p>
            <h2
              id="keypoints-heading"
              className="mt-3 text-[clamp(2rem,4.5vw+0.85rem,3.75rem)] font-bold leading-[1.1] tracking-tight text-white sm:mt-4 md:text-[clamp(2.5rem,4vw,3.95rem)] lg:text-[3.5rem]"
            >
              Generative AI Services
            </h2>
          </header>

          <ul className="mx-auto mt-12 grid max-w-none list-none grid-cols-1 gap-x-10 gap-y-12 sm:mt-14 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 lg:mt-18 lg:grid-cols-3 lg:gap-x-14 xl:gap-x-16">
            {points.map((item) => (
              <li key={item.num} className="min-w-0 text-left">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="shrink-0 text-[clamp(1.95rem,3.8vw+0.5rem,2.75rem)] font-bold tabular-nums leading-[0.9] tracking-tight text-white lg:text-[2.875rem] xl:text-[3rem]">
                    {item.num}
                  </span>
                  <span className="min-w-0 flex-1 break-words text-lg font-semibold leading-snug text-white sm:text-xl lg:text-[1.3125rem]">
                    {item.title}
                  </span>
                </div>
                <p className="mt-4 max-w-none break-words text-sm font-medium leading-relaxed text-white/94 sm:mt-5 sm:text-[0.9875rem] sm:leading-relaxed lg:text-[1.0625rem]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
