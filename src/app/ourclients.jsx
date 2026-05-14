"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import woman from "./public/woman.png";

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-4 w-4 fill-amber-400"
        >
          <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

function ArrowButton({ direction, onClick, disabled }) {
  const isLeft = direction === "left";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
      className="grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-sm ring-1 ring-black/10 transition hover:shadow-md disabled:opacity-40"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`h-6 w-6 ${isLeft ? "" : "rotate-180"}`}
      >
        <path
          fill="currentColor"
          d="M15.7 5.3a1 1 0 0 1 0 1.4L10.41 12l5.3 5.3a1 1 0 1 1-1.42 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 0 1 1.41 0Z"
        />
      </svg>
    </button>
  );
}

export default function OurClientsSection() {
  const testimonials = useMemo(
    () => [
      {
        rating: 5.0,
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        name: "Elisa Grant",
        title: "Legacy Solutions Engineer",
      },
      {
        rating: 5.0,
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        name: "Noah Bennett",
        title: "Product Operations Lead",
      },
      {
        rating: 5.0,
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        name: "Mia Carter",
        title: "Customer Success Manager",
      },
    ],
    [],
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const active = testimonials[activeIdx];

  return (
    <section className="bg-white text-black overflow-x-clip">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <h2 className="mx-auto max-w-5xl text-center text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Hear from{" "}
          <span className="inline-flex rounded-full bg-red-800 px-5 py-2 font-semibold text-white sm:px-6 sm:py-2.5">
            our clients
          </span>{" "}
          real
          <br />
          stories that fuel our
          <br />
          success
        </h2>

        <div className="relative mx-auto mt-16 max-w-5xl pt-20">
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-36 z-0 hidden h-[150px] w-[320px] -translate-x-[calc(50%+170px)] rounded-[40px] bg-indigo-200/55 sm:block lg:h-[190px] lg:w-[380px] lg:-translate-x-[calc(50%+200px)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-6 -top-28 z-0 hidden h-[180px] w-[180px] rounded-[34px] bg-rose-200/60 sm:block lg:right-10 lg:-top-30"
            />
            <div className="hidden sm:block">
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <ArrowButton
                  direction="left"
                  disabled={activeIdx === 0}
                  onClick={() => setActiveIdx((v) => Math.max(0, v - 1))}
                />
              </div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2">
                <ArrowButton
                  direction="right"
                  disabled={activeIdx === testimonials.length - 1}
                  onClick={() =>
                    setActiveIdx((v) =>
                      Math.min(testimonials.length - 1, v + 1),
                    )
                  }
                />
              </div>
            </div>

            <div className="relative mx-auto max-w-5xl px-0 sm:px-16">
              <div className="relative">
                <div className="relative z-10 w-full max-w-[700px] rounded-[22px] bg-white px-7 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5 sm:ml-[100px] sm:pl-[300px] sm:pr-10 sm:py-8">
                  <button
                  type="button"
                  aria-label="More options"
                  className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-indigo-600 transition hover:bg-black/5"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path
                      fill="currentColor"
                      d="M6 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                    />
                  </svg>
                </button>

                  <div className="flex items-center gap-3">
                    <StarRow />
                    <span className="text-sm text-zinc-700">
                      <span className="font-semibold">
                        {active.rating.toFixed(1)}
                      </span>{" "}
                      rating
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] leading-7 text-zinc-800 sm:text-base">
                    {active.text}
                  </p>

                  <div className="mt-5">
                    <div className="text-sm font-semibold text-blue-600">
                      {active.name}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {active.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-0 z-20 hidden w-[240px] -translate-x-[calc(50%+160px)] -translate-y-24 sm:block lg:-translate-x-[calc(50%+170px)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-zinc-200 shadow-sm">
                <Image
                  src={woman}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority={activeIdx === 0}
                />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
              <ArrowButton
                direction="left"
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((v) => Math.max(0, v - 1))}
              />
              <ArrowButton
                direction="right"
                disabled={activeIdx === testimonials.length - 1}
                onClick={() =>
                  setActiveIdx((v) => Math.min(testimonials.length - 1, v + 1))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

