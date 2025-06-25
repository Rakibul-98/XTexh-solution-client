"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch(
        "https://x-tech-solution-backend.vercel.app/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      const result = await res.json();
      setResponseMsg("Message sent successfully!");
      reset();
    } catch (error) {
      setResponseMsg("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center gap-10 justify-center ">
      <Image
        className="hidden lg:block"
        src="/contact.svg"
        alt="Contact XTech Solution"
        width={500}
        height={500}
      />
      <div className="flex-grow max-w-sm w-full p-5 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
          />

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
          />

          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMsg && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {responseMsg}
          </p>
        )}
      </div>
    </div>
  );
}
