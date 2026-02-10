import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const HeroSection = () => {
  const Hero = styled(Box)(({ theme }) => ({
    width: "80%",
    margin: "2rem auto",
    display: "flex",
    flexDirection: "row",
  }));

  const ContentContainer = styled(Box)(({ theme }) => ({
    flex: "1 1 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    flex: "1 1 0",
    borderRadius: "1rem",
    overflow: "hidden",
    img: {
      height: "100%",
      width: "100%",
      display: "block",
    },
  }));

  const Text = styled(Typography)(({ theme }) => ({
    margin: "1rem auto",
  }));

  return (
    <Hero>
      <ContentContainer>
        <Text variant="h5">Explore the Most Exciting Destinations Worldwide</Text>

        <Text variant="h2">Discover experience and embrace a new and vibrant life</Text>

        <Text variant="h5">
          Create memories that last a lifetime
          <br />
          Travel to amazing places and make every moment count
        </Text>
      </ContentContainer>

      <ImgContainer>
        <img src="./bubble.svg" alt="" />
      </ImgContainer>
    </Hero>
  );
};

export default HeroSection;
