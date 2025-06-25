"use client";
import { useState } from "react";
import Image from "next/image";

export default function Services({ services }) {
  const [expanded, setExpanded] = useState(services?.[0]?.id || 1);

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
          {services?.map((service, index) => (
            <div
              key={index}
              className={`relative cursor-pointer group shadow-md overflow-hidden rounded-md transition-all duration-500 ${
                expanded === index
                  ? "min-h-72 md:h-auto md:col-span-3"
                  : "h-48 md:h-100"
              }`}
              onClick={() => toggleExpand(index)}
            >
              <div className="absolute inset-0">
                <Image
                  src={
                    service.bgImage?.trim()
                      ? service.bgImage
                      : "https://i.ibb.co/hRtS8bwb/hero-bg.jpg"
                  }
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-transform duration-300 ${
                    expanded === index
                      ? "grayscale-0"
                      : "group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  }`}
                />
              </div>

              {expanded === index ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent "></div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
              )}

              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white z-10">
                <h3
                  className={`font-semibold mb-2 ${
                    expanded === index ? "text-2xl" : "text-xl"
                  }`}
                >
                  {service.title}
                </h3>

                {expanded === index && (
                  <p className="mb-4 animate-fade-slide">
                    {service.description}
                  </p>
                )}

                {expanded !== index && (
                  <button className="mt-auto text-sm px-2 py-1 bg-white rounded-md hover:bg-gray-200 cursor-pointer text-black">
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
