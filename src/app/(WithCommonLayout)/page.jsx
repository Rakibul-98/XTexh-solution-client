import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Map from "../../components/home/Map";
import ChatPlugin from "../../components/home/ChatPlugin";

async function getSettings() {
  const res = await fetch(
    "https://x-tech-solution-backend.vercel.app/api/settings",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch settings");
  return res.json();
}

export default async function HomePage() {
  const settings = await getSettings();

  return (
    <div>
      <Hero
        title={settings.hero?.title}
        subtitle={settings.hero?.subtitle}
        backgroundImage={settings.hero?.backgroundImage}
      />
      <Services services={settings.services} />
      <Map />
      <ChatPlugin />
    </div>
  );
}
