"use client";
import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import HeroForm from "./HeroForm";
import ServicesForm from "./ServicesForm";
import Inbox from "./Inbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [activeForm, setActiveForm] = useState("hero");
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [errorMessages, setErrorMessages] = useState(null);
  const [loadingSettings, setLoadingSettings] = useState(true);
  const [errorSettings, setErrorSettings] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("xtech_token");

    if (!token) {
      router.push("/admin/login");
    }
  }, [router]);

  const { register, handleSubmit, control, reset } = useForm({
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

  const handleLogout = () => {
    localStorage.removeItem("xtech_token");
    router.push("/");
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoadingMessages(true);
        setErrorMessages(null);

        const token = localStorage.getItem("xtech_token");
        const res = await fetch(
          "https://x-tech-solution-backend.vercel.app/api/messages",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await res.json();
        setSubmissions(data.messages || data);
      } catch (err) {
        setErrorMessages(err.message);
      } finally {
        setLoadingMessages(false);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoadingSettings(true);
        setErrorSettings(null);

        const token = localStorage.getItem("xtech_token");

        const res = await fetch(
          "https://x-tech-solution-backend.vercel.app/api/settings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch settings");
        }

        const data = await res.json();

        const formattedData = {
          hero: {
            title: data.hero?.title || "",
            subtitle: data.hero?.subtitle || "",
            backgroundImage: data.hero?.backgroundImage || "",
          },
          services:
            data.services && data.services.length
              ? data.services
              : [
                  { title: "", description: "" },
                  { title: "", description: "" },
                  { title: "", description: "" },
                ],
        };

        reset(formattedData);
      } catch (err) {
        setErrorSettings(err.message);
      } finally {
        setLoadingSettings(false);
      }
    };

    fetchSettings();
  }, [reset]);

  const onSubmit = async (data) => {
    setSaving(true);
    setSaveMessage(null);

    try {
      const token = localStorage.getItem("xtech_token");

      const res = await fetch(
        "https://x-tech-solution-backend.vercel.app/api/settings",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to save settings");
      }

      setSaveMessage("Settings saved successfully!");
    } catch (err) {
      setSaveMessage(`Error: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="min-h-screen p-4 md:p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-1 rounded bg-gray-800 text-white transition"
          >
            Go home
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-1 rounded bg-red-800 text-white transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {loadingMessages && <p>Loading messages...</p>}
        {errorMessages && (
          <p className="text-red-600">Error: {errorMessages}</p>
        )}
        {!loadingMessages && !errorMessages && (
          <Inbox
            submissions={submissions}
            expandedMessage={expandedMessage}
            setExpandedMessage={setExpandedMessage}
          />
        )}

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

          {loadingSettings ? (
            <p>Loading settings...</p>
          ) : errorSettings ? (
            <p className="text-red-600">Error: {errorSettings}</p>
          ) : activeForm === "hero" ? (
            <HeroForm
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={handleSubmit(onSubmit)}
              saving={saving}
            />
          ) : (
            <ServicesForm
              fields={fields}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={handleSubmit(onSubmit)}
              saving={saving}
            />
          )}

          {saveMessage && (
            <p className="mt-4 text-center text-green-700">{saveMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}
