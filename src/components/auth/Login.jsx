"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "admin@xtech.com",
      password: "password123",
    },
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch(
        "https://x-tech-solution-backend.vercel.app/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Invalid email or password");
      }

      const result = await res.json();
      setResponseMsg("Login successful!");
      router.push("/admin");
      localStorage.setItem("xtech_token", result.token);
      reset();
    } catch (error) {
      setResponseMsg(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center gap-10 justify-center ">
      <Image
        className="hidden lg:block"
        src="/login.svg"
        alt="Admin Login"
        width={500}
        height={500}
      />
      <div className="flex-grow max-w-sm w-full p-5 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
          />

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Your Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
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
