"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import ourSuccessBg from "../public/oursuccessbg.png";

const milestones = [
  { value: 100, suffix: "+", label: "Project Completed" },
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 40, suffix: "+", label: "Happy Employees" },
  { value: 6, suffix: "+", label: "Years of Experience" },
];

const DURATION_MS = 2000;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function OurSuccessSection() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(() => milestones.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let frameId = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / DURATION_MS, 1);
      const eased = easeOutCubic(progress);

      setCounts(
        milestones.map((m) =>
          progress >= 1 ? m.value : Math.floor(eased * m.value)
        )
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
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
            {milestones.map(({ suffix, label }, index) => (
              <div
                key={label}
                className="rounded-[14px] bg-white px-6 py-9 text-center shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04] sm:py-10"
              >
                <p className="text-4xl font-bold tabular-nums tracking-tight text-neutral-900 sm:text-5xl">
                  {counts[index]}
                  {suffix}
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
