import React from "react";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";

const HomePage = () => {
  return (
    <div>
      <Hero
        title="Empowering Your Business with Smart Tech"
        subtitle="Innovative software & AI-driven solutions to help your company grow."
        backgroundImage="https://i.ibb.co/hRtS8bwb/hero-bg.jpg"
      />
      <Services />
    </div>
  );
};

export default HomePage;
