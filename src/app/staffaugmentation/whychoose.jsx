import Image from "next/image";

import whyChooseBg from "../public/whychoose.png";

const bodyCopy =
  "At Aug AI, We Understand That Businesses Need Flexible, Cost-Effective Staffing Solutions Without Compromising On Quality. By Choosing Our Staff Augmentation Services, You Gain Access To Industry-Leading AI And ML Talent Ready To Contribute To Your Project Immediately. Our Flexible Models—Whether You're Looking For A Dedicated Team Or An Individual Expert—Allow You To Scale Efficiently, Reduce Overhead Costs, And Focus On Delivering Results Faster.";

export default function WhyChoose() {
  return (
    <section
      className="relative isolate w-full overflow-hidden text-white"
      aria-labelledby="why-choose-staff-augmentation-heading"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={whyChooseBg}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/25 to-black/40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
        <h2
          id="why-choose-staff-augmentation-heading"
          className="mx-auto w-full max-w-5xl text-balance text-[clamp(1.875rem,4vw+0.85rem,3.5rem)] font-bold leading-[1.22] tracking-normal text-white sm:leading-[1.24] lg:max-w-6xl lg:text-[clamp(2rem,3.2vw+1rem,3.5rem)] lg:leading-[1.26]"
        >
          <span className="block">Why Choose Aug AI For</span>
          <span className="mt-2 block sm:mt-3">Staff Augmentation?</span>
        </h2>
        <p className="mx-auto mt-8 w-full max-w-5xl text-pretty text-base font-normal leading-relaxed text-white/95 sm:mt-10 sm:text-lg sm:leading-relaxed lg:mt-12 lg:max-w-6xl lg:text-xl lg:leading-relaxed">
          {bodyCopy}
        </p>
      </div>
    </section>
  );
}
