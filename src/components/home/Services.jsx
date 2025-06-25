"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "We build scalable, secure, and tailored software solutions to meet your unique business needs. We build scalable, secure, and tailored software solutions to meet your unique business needs.We build scalable, secure, and tailored software solutions to meet your unique business needs.",
    image: "https://i.ibb.co/hRtS8bwb/hero-bg.jpg",
  },
  {
    id: 2,
    title: "AI & Automation Integration",
    description:
      "Leverage the power of Artificial Intelligence to automate workflows and boost efficiency.",
    image: "https://i.ibb.co/hRtS8bwb/hero-bg.jpg",
  },
  {
    id: 3,
    title: "IT Consulting & Strategy",
    description:
      "Get expert guidance to modernize your IT infrastructure and stay ahead in the digital era.",
    image: "https://i.ibb.co/hRtS8bwb/hero-bg.jpg",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(1);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? 1 : id);
  };

  return (
    <section id="services" className="pt-16 pb-10">
      <div className="px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative cursor-pointer group shadow-md overflow-hidden rounded-md transition-all duration-500 ${
                expanded === service.id
                  ? "min-h-72 md:h-auto md:col-span-3"
                  : "h-48 md:h-100"
              }`}
              onClick={() => toggleExpand(service.id)}
            >
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-transform duration-300 ${
                    expanded === service.id
                      ? ""
                      : "group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  }`}
                />
              </div>

              {expanded === service.id ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent "></div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
              )}

              <div
                className={`absolute inset-0 p-4 flex flex-col justify-end text-white z-10`}
              >
                <h3
                  className={`font-semibold mb-2 ${
                    expanded === service.id ? "text-2xl" : "text-xl"
                  }`}
                >
                  {service.title}
                </h3>

                {expanded === service.id && (
                  <p className="mb-4 animate-fade-slide">
                    {service.description}
                  </p>
                )}

                {expanded !== service.id && (
                  <button className="mt-auto text-sm  px-2 py-1 bg-white rounded-md hover:bg-gray-200 cursor-pointer text-black">
                    More Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
