import React from "react";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Map from "../../components/home/Map";
import ChatPlugin from "../../components/home/ChatPlugin";

const HomePage = () => {
  return (
    <div>
      <Hero
        title="Empowering Your Business with Smart Tech"
        subtitle="Innovative software & AI-driven solutions to help your company grow."
        backgroundImage="https://i.ibb.co/hRtS8bwb/hero-bg.jpg"
      />
      <Services />
      <Map />
      <ChatPlugin />
    </div>
  );
};

export default HomePage;
