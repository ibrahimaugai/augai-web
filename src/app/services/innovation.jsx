import Image from "next/image";

import maskGroup from "../public/Mask group.png";

export default function InnovationSection({ sideImage = maskGroup }) {
  return (
    <section
      className="flex min-h-[100svh] flex-col bg-white text-neutral-900"
      aria-labelledby="innovation-heading"
    >
      <div className="flex min-h-0 flex-1 flex-col justify-center py-5 sm:py-8 md:py-10 lg:py-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <main className="min-w-0 w-full min-h-0 px-3 sm:px-4 lg:px-6">
            <div className="ml-3 sm:ml-4 lg:ml-6">
              <div className="pl-3 text-left sm:pl-4 lg:pl-6">
                <h2
                  id="innovation-heading"
                  className="max-w-4xl text-[clamp(1.875rem,5vw+0.75rem,4.75rem)] leading-snug tracking-tight text-neutral-950 sm:leading-snug"
                >
                  <span className="font-bold">Empowering</span>
                  <br />
                  <span className="font-extralight">innovation &amp;</span>
                  <br />
                  <span className="font-extralight">creativity</span>
                </h2>
                <p className="mt-4 max-w-4xl text-[clamp(1rem,1.05vw+0.85rem,1.3125rem)] leading-relaxed tracking-normal text-neutral-900 sm:mt-6 sm:max-w-[42rem] sm:leading-[1.72] lg:mt-8 lg:max-w-[46rem] lg:text-[clamp(1.0625rem,1.35vw,1.35rem)] lg:leading-[1.72]">
                  At Aug AI, our Generative AI services help businesses automate creative
                  processes, generating unique content such as text, images, and videos.
                  With advanced technologies like GPT and GANs, we deliver scalable,
                  AI-driven solutions that drive innovation and efficiency.
                </p>
              </div>
            </div>
          </main>

          <div className="flex w-full justify-center overflow-visible px-3 py-8 sm:px-5 sm:py-10 lg:px-4 xl:px-8">
            <div className="flex max-w-[100%] items-stretch justify-center gap-4 sm:gap-7 md:gap-10">
              {/* Lilac circle — outside image on the left, aligned low (bottom-left area) */}
              <div className="flex min-h-0 min-w-[2.75rem] shrink-0 flex-col justify-end pb-14 sm:min-w-14 sm:pb-16 md:pb-[4.75rem]">
                <div
                  className="pointer-events-none h-14 w-14 shrink-0 rounded-full bg-[#cfaef0]/92 shadow-[0_0_24px_rgba(180,140,235,0.72)] blur-[6px] sm:h-16 sm:w-16 md:h-[4.25rem] md:w-[4.25rem]"
                  aria-hidden
                />
              </div>

              {/* Image + purple shape (only behind the photo, no circles overlap) */}
              <div className="relative shrink-0 w-[clamp(240px,calc(76vw-5rem),360px)] sm:w-[clamp(260px,min(380px,calc(50vw-4rem)),380px)]">
                <div
                  className="pointer-events-none absolute right-[-4%] top-[-10%] z-0 h-32 w-32 rounded-[50%_46%_54%_50%] bg-gradient-to-br from-violet-200/88 via-purple-100/82 to-purple-50/62 sm:right-[-2%] sm:top-[-8%] sm:h-36 sm:w-36"
                  aria-hidden
                />
                <div className="relative z-10 aspect-[7/9] w-full overflow-hidden rounded-[1.625rem] shadow-[0_18px_40px_-18px_rgba(88,28,135,0.32)] ring-1 ring-black/5 sm:rounded-[1.875rem] md:rounded-[2rem]">
                  <Image
                    src={sideImage}
                    alt="Aug AI — innovation and intelligent systems"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 70vw, 380px"
                  />
                </div>
              </div>

              {/* Lilac circle — outside image on the right, aligned high (top-right area) */}
              <div className="flex min-h-0 min-w-[2.75rem] shrink-0 flex-col items-end justify-start pt-12 sm:min-w-14 sm:pt-14 md:pt-16">
                <div
                  className="pointer-events-none h-14 w-14 shrink-0 rounded-full bg-[#d4baf5]/92 shadow-[0_0_24px_rgba(176,142,226,0.72)] blur-[6px] sm:h-16 sm:w-16 md:h-[4.25rem] md:w-[4.25rem]"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
