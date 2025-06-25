"use client";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import HeroForm from "./HeroForm";
import ServicesForm from "./ServicesForm";
import Inbox from "./Inbox";
import Link from "next/link";

export default function Dashboard() {
  const [activeForm, setActiveForm] = useState("hero");
  const [expandedMessage, setExpandedMessage] = useState(null);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      hero: {
        title: "",
        subtitle: "",
        backgroundImage: "",
      },
      services: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
      ],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "services",
  });

  const dummySubmissions = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "Interested in your services. ",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      message:
        "I need a consultation for my e-commerce project. Please let me know when we can connect.",
    },
  ];

  const onSubmit = (data) => {
    console.log("Updated Data:", data);
  };

  return (
    <section className="min-h-screen p-4 md:p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link
          href="/"
          className="px-4 py-2 rounded bg-gray-800 text-white transition"
        >
          Go to home
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <Inbox
          submissions={dummySubmissions}
          expandedMessage={expandedMessage}
          setExpandedMessage={setExpandedMessage}
        />

        <div className="space-y-2">
          <div className="flex justify-between items-center flex-wrap">
            <h2 className="text-xl font-semibold">
              {activeForm === "hero" ? "Edit Hero Section" : "Edit Services"}
            </h2>
            <div className="flex gap-5">
              <button
                onClick={() => setActiveForm("hero")}
                className={`${activeForm === "hero" ? "underline" : ""}`}
              >
                Edit Hero
              </button>
              <button
                onClick={() => setActiveForm("services")}
                className={`${activeForm === "services" ? "underline" : ""}`}
              >
                Edit Services
              </button>
            </div>
          </div>
          {activeForm === "hero" && (
            <HeroForm
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          )}
          {activeForm === "services" && (
            <ServicesForm
              fields={fields}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </div>
    </section>
  );
}
