"use client";

import { useState } from "react";
import Image from "next/image";

import modelsBg from "../public/models.png";

const TAB_DEDICATED = "dedicated";
const TAB_INDIVIDUAL = "individual";

const dedicatedContent = {
  title: "Dedicated Team Model",
  body:
    "Our Dedicated Team model allows you to scale up with a full team of experts who are entirely focused on your project. Whether you need a team of AI engineers, data scientists, or developers, we provide professionals who are fully integrated into your workflows and aligned with your objectives.",
  cardTitle: "Benefits Of The Dedicated Team Model:",
  bullets: [
    {
      title: "Complete Team Focus:",
      text: "A dedicated team works solely on your project, ensuring maximum focus, accountability, and consistent progress toward your milestones.",
    },
    {
      title: "Seamless Collaboration:",
      text: "Our team becomes a direct extension of your in-house team, collaborating with your staff to meet your business goals.",
    },
    {
      title: "Full Flexibility:",
      text: "Scale the team up or down depending on project needs, ensuring optimal resource utilization without long-term commitments.",
    },
  ],
};

const individualContent = {
  title: "Individual Hiring Model",
  body:
    "Our Individual Hiring model lets you add specialized talent one role at a time—ideal when you need a senior engineer, ML specialist, or DevOps expert embedded with your team without committing to a full dedicated squad.",
  cardTitle: "Benefits Of The Individual Hiring Model:",
  bullets: [
    {
      title: "Targeted Expertise:",
      text: "Bring in exactly the skill set you need for the phase you are in, from short-term spikes to longer engagements.",
    },
    {
      title: "Lower Overhead:",
      text: "Onboard proven professionals quickly while avoiding the cost and lead time of a full team ramp-up.",
    },
    {
      title: "Direct Management:",
      text: "Augmented specialists follow your processes and tooling, with clear reporting lines into your leadership.",
    },
  ],
};

export default function Models() {
  const [activeTab, setActiveTab] = useState(TAB_DEDICATED);
  const content =
    activeTab === TAB_DEDICATED ? dedicatedContent : individualContent;

  return (
    <section
      className="relative overflow-hidden bg-[#0755EB] py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="models-staff-augmentation-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={modelsBg}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[#0755EBED]"
        aria-hidden
      />

      <div className="relative z-10 w-full px-4 sm:px-6">
        <header className="mx-auto max-w-5xl text-center">
          <p className="text-xl font-medium tracking-wide text-white/95 sm:text-2xl md:text-[1.75rem]">
            Models of
          </p>
          <h2
            id="models-staff-augmentation-heading"
            className="mt-2 text-3xl font-bold leading-tight tracking-tight text-white sm:mt-3 sm:text-4xl md:text-5xl lg:text-[3rem]"
          >
            Staff Augmentation
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/90 sm:mt-8 sm:text-lg">
            At Aug AI, we offer two flexible staff augmentation models to fit your
            business needs: Dedicated Team and Individual Hiring.
          </p>
        </header>

        <div
          className="mt-10 flex w-full flex-wrap justify-center gap-8 border-b border-white/25 sm:mt-12 sm:gap-12 md:gap-16"
          role="tablist"
          aria-label="Staff augmentation models"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === TAB_DEDICATED}
            id="tab-dedicated"
            aria-controls="panel-models"
            className={`relative pb-5 text-center text-lg font-semibold transition sm:text-xl md:text-2xl ${
              activeTab === TAB_DEDICATED
                ? "text-white"
                : "text-white/70 hover:text-white/90"
            }`}
            onClick={() => setActiveTab(TAB_DEDICATED)}
          >
            Dedicated Team Model
            <span
              className={`absolute bottom-0 left-0 right-0 h-1 rounded-full bg-white transition-opacity ${
                activeTab === TAB_DEDICATED ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === TAB_INDIVIDUAL}
            id="tab-individual"
            aria-controls="panel-models"
            className={`relative pb-5 text-center text-lg font-semibold transition sm:text-xl md:text-2xl ${
              activeTab === TAB_INDIVIDUAL
                ? "text-white"
                : "text-white/70 hover:text-white/90"
            }`}
            onClick={() => setActiveTab(TAB_INDIVIDUAL)}
          >
            Individual Hiring Model
            <span
              className={`absolute bottom-0 left-0 right-0 h-1 rounded-full bg-white transition-opacity ${
                activeTab === TAB_INDIVIDUAL ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden
            />
          </button>
        </div>

        <div
          id="panel-models"
          role="tabpanel"
          aria-labelledby={
            activeTab === TAB_DEDICATED ? "tab-dedicated" : "tab-individual"
          }
          className="mt-12 grid w-full grid-cols-1 items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-14"
        >
          <div className="min-w-0 text-left">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {content.title}
            </h3>
            <p className="mt-5 text-base font-normal leading-relaxed text-white/90 sm:mt-6 sm:text-lg sm:leading-relaxed">
              {content.body}
            </p>
          </div>

          <div className="min-w-0">
            <div className="rounded-2xl border border-white/15 bg-blue-950/55 p-8 shadow-xl backdrop-blur-sm sm:rounded-3xl sm:p-9 lg:p-10">
              <h4 className="text-lg font-bold leading-snug text-white sm:text-xl">
                {content.cardTitle}
              </h4>
              <ul className="mt-6 space-y-6 sm:mt-8 sm:space-y-7">
                {content.bullets.map((item) => (
                  <li key={item.title} className="text-left">
                    <p className="text-base font-bold leading-snug text-white sm:text-lg">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm font-normal leading-relaxed text-white/85 sm:text-base sm:leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
