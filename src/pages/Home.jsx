import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";
import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </div>
  );
};

export default HomePage;
