const benefits = [
  {
    num: "01",
    title: "Cost Efficiency:",
    body:
      "Save up to 70% on recruitment, training, and long-term salary expenses by hiring only the talent you need, when you need it.",
  },
  {
    num: "02",
    title: "Access to Specialized Skills:",
    body:
      "Get instant access to a pool of AI, machine learning, and software development experts who are ready to contribute to your project.",
  },
  {
    num: "03",
    title: "Scalability:",
    body:
      "Easily scale your team up or down depending on your project's requirements without the overhead costs of full-time hiring.",
  },
  {
    num: "04",
    title: "Faster Time to Market:",
    body:
      "By leveraging our ready-to-go experts, you can speed up development processes and bring products to market more quickly.",
  },
  {
    num: "05",
    title: "Flexibility:",
    body:
      "Whether you need an individual expert or a full team, our staff augmentation models offer flexibility to meet any project size or timeline.",
  },
  {
    num: "06",
    title: "Maintain Control:",
    body:
      "Unlike outsourcing, staff augmentation allows you to manage and control your team directly, ensuring alignment with your company's goals and processes.",
  },
];

export default function Benefits() {
  return (
    <section
      className="relative w-full overflow-x-hidden bg-white py-8 sm:py-10 md:py-12"
      aria-labelledby="benefits-staff-augmentation-heading"
    >
      <div
        className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-violet-200/50 blur-3xl sm:h-72 sm:w-72"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 bottom-16 h-64 w-64 rounded-full bg-sky-200/45 blur-3xl sm:bottom-24 sm:h-80 sm:w-80"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6">
        <header className="mx-auto w-full max-w-5xl text-center">
          <p className="text-balance text-2xl font-normal tracking-[0.03em] text-black sm:text-3xl md:text-4xl lg:text-[2.5rem] [word-spacing:0.12em]">
            Benefits Of
          </p>
          <h2
            id="benefits-staff-augmentation-heading"
            className="mt-2 text-balance text-4xl font-bold tracking-[0.025em] text-black sm:mt-3 sm:text-5xl md:text-6xl md:leading-[1.1] lg:text-[3.25rem] lg:leading-tight"
          >
            Staff Augmentation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-neutral-800 sm:mt-5 sm:max-w-2xl sm:text-lg md:max-w-3xl sm:leading-relaxed">
            Staff augmentation allows businesses to rapidly scale their teams with
            highly skilled professionals while maintaining full control over the
            project. Here are the key benefits of augmenting your team with Aug AI:
          </p>
        </header>

        <ul className="mx-auto mt-8 grid w-full list-none grid-cols-1 gap-x-6 gap-y-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:mt-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-11 xl:gap-x-14">
          {benefits.map((item) => (
            <li key={item.num} className="min-w-0 text-left">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="shrink-0 text-2xl font-bold tabular-nums leading-none tracking-tight text-black sm:text-[1.625rem] lg:text-3xl">
                  {item.num}
                </span>
                <span className="min-w-0 break-words text-lg font-bold leading-snug text-black sm:text-xl">
                  {item.title}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-neutral-900 sm:mt-5 sm:text-base sm:leading-relaxed">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
