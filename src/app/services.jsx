import Image from "next/image";

import generativeAi from "./public/generativeai.png";
import naturalLanguage from "./public/naturallanguage.png";
import computerVision from "./public/computervision.png";
import predictiveAnalytics from "./public/predictiveanalytics.png";
import customSoftware from "./public/customsoftware.png";
import devops from "./public/devops.png";
import uiUxDesignServicesIcon from "./public/uiuxh.png";
import chatIcon from "./public/chat.png";
import machineIcon from "./public/machine.png";

export default function ServicesSection() {
  const services = [
    {
      title: "Generative AI",
      description: "Developing cutting-edge AI solutions...",
      icon: generativeAi,
      lgStart: "lg:col-start-1",
    },
    {
      title: "Machine Learning & Deep Learning",
      description: "Leveraging both machine and deep...",
      icon: machineIcon,
      lgStart: "lg:col-start-3",
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Analyzing natural language data to...",
      icon: naturalLanguage,
      lgStart: "lg:col-start-5",
    },
    {
      title: "Chatbot Development",
      description: "Building intelligent, customizable AI...",
      icon: chatIcon,
      lgStart: "lg:col-start-7",
    },
    {
      title: "Computer Vision",
      description: "Offering solutions that use visual data to auto...",
      icon: computerVision,
      lgStart: "lg:col-start-9",
    },
    {
      title: "Predictive Analytics",
      description: "Using advanced modeling techniques to...",
      icon: predictiveAnalytics,
      lgStart: "lg:col-start-2",
    },
    {
      title: "Custom Software & Web Development",
      description: "Creating bespoke software and web...",
      icon: customSoftware,
      lgStart: "lg:col-start-4",
    },
    {
      title: "UI/UX Design",
      description: "Providing comprehensive UI/UX design...",
      icon: uiUxDesignServicesIcon,
      lgStart: "lg:col-start-6",
    },
    {
      title: "DevOps & Staff Augmentation",
      description: "Streamlining development processes...",
      icon: devops,
      lgStart: "lg:col-start-8",
    },
  ];

  return (
    <section id="services" className="bg-[#FFFFFF] text-black">

      <div className="pt-12">
                      <h2 className="text-center text-4xl font-light tracking-tight sm:text-5xl">
          <span className="text-black">Our </span>
          <span className="font-semibold text-red-700">Services</span>
        </h2>
      </div>

      <div className="mx-auto flex min-h-screen w-full flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:py-14">


        <div className="mt-10 grid items-stretch grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 sm:gap-x-14 sm:gap-y-14 lg:mt-12 lg:grid-cols-10 lg:gap-x-16 lg:gap-y-14">
          {services.map((service) => (
            <div
              key={service.title}
              className={`flex h-full flex-col items-center text-center lg:col-span-2 ${service.lgStart}`}
            >
              <Image
                src={service.icon}
                alt={service.title}
                className="h-16 w-16 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                unoptimized
              />
              <h3 className="mt-5 min-h-[3.25rem] text-lg font-semibold tracking-tight text-black">
                {service.title}
              </h3>
              <p className="mt-2 line-clamp-2 min-h-[2.75rem] max-w-[18rem] text-sm leading-relaxed text-black/45">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-black"
              >
                Read More <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

