import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyle";
import {
  // HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyle";

const HeroPage = () => {
  return (
    <div>
      <HeroSection>
        {/* <HeroVideo src="./assets/hero.mp4" autoPlay muted /> */}
        <Container>
          <MainHeading>Your data is secure with us</MainHeading>
          <HeroText>
            We provide the best system from clients all over the world
          </HeroText>
          <ButtonWrapper>
            <Link to="/signUp">
              <Button>Get Started</Button>
            </Link>
            <Link to="/pricing">
              <HeroButton>Find more</HeroButton>
            </Link>
          </ButtonWrapper>
        </Container>
      </HeroSection>
    </div>
  );
};

export default HeroPage;
