import Image from "next/image";

import groupBg from "../public/Group.png";
import { serviceKeyPointsContent } from "../serviceKeyPointsContent";

const defaultContent = serviceKeyPointsContent.services;

export default function KeyPointsSection({ contentKey = "services" }) {
  const content = serviceKeyPointsContent[contentKey] ?? defaultContent;
  const { title, points } = content;

  return (
    <section
      className="relative isolate flex w-full flex-col justify-center overflow-hidden bg-[#2b6fdd] py-14 text-white sm:py-16 md:min-h-[min(72vh,720px)] md:py-16 lg:min-h-[min(82svh,880px)] lg:py-20 xl:min-h-[min(85svh,920px)] xl:py-24"
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto w-full max-w-5xl text-center">
          <p className="text-balance text-2xl font-medium tracking-[0.03em] text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] [word-spacing:0.12em]">
            Key Points Of Our
          </p>
          <h2
            id="keypoints-heading"
            className="mt-2 text-balance text-4xl font-bold tracking-[0.025em] text-white sm:mt-3 sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-[3.25rem] lg:leading-tight"
          >
            {title}
          </h2>
        </header>

        <ul className="mx-auto mt-10 grid w-full list-none grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:mt-14 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12 xl:mt-16 xl:gap-x-14 xl:gap-y-14">
          {points.map((item) => (
            <li key={item.num} className="min-w-0 py-1 text-left sm:py-2">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="shrink-0 text-2xl font-bold tabular-nums leading-none tracking-tight text-white sm:text-[1.625rem] lg:text-3xl">
                  {item.num}
                </span>
                <span className="min-w-0 break-words text-lg font-bold leading-snug text-white sm:text-xl">
                  {item.title}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-white/94 sm:mt-5 sm:text-base sm:leading-[1.7] lg:mt-6 lg:text-[1.0625rem]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
