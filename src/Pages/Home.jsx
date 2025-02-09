import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import Title from "../Components/Title";
import BestSeller from "../Components/BestSeller";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
}

export default Home;
