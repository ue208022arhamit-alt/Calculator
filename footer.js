import React from "react";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: "#222",
  color: "#fff",
  padding: "30px 0",
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
}));

const LeftColumn = styled("div")(({ theme }) => ({
  flex: 1,
}));

const RightColumn = styled("div")(({ theme }) => ({
  flex: 2,
  display: "flex",
  justifyContent: "space-between",
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

const Tagline = styled(Typography)(({ theme }) => ({
  color: "#888",
}));

const Columns = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const ColumnTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

const ColumnLinks = styled("div")(({ theme }) => ({
  marginTop: "8px",
}));

const SocialIcons = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  marginTop: "20px",
}));

const SocialIcon = styled("a")(({ theme }) => ({
  color: "#fff",
  fontSize: "30px",
}));

const Footer = () => {
  return (
    <Root>
      <Container>
        <LeftColumn>
          <CompanyName variant="h6">Travel Buddy</CompanyName>
          <Tagline variant="body2">Building the future of travel experiences.</Tagline>
        </LeftColumn>
        <RightColumn>
          <Columns>
            <ColumnTitle variant="subtitle1">Company</ColumnTitle>
            <ColumnLinks>
              <div>
                <Button href="/about">About</Button>
              </div>
              <div>
                <Button href="/careers">Careers</Button>
              </div>
              <div>
                <Button href="/mobile">Mobile</Button>
              </div>
            </ColumnLinks>
          </Columns>
          <Columns>
            <ColumnTitle variant="subtitle1">Contact</ColumnTitle>
            <ColumnLinks>
              <div>
                <Button href="/help">Help/FAQ</Button>
              </div>
              <div>
                <Button href="/press">Press</Button>
              </div>
              <div>
                <Button href="/affiliates">Affiliates</Button>
              </div>
            </ColumnLinks>
          </Columns>
          <SocialIcons>
            <SocialIcon href="#">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href="#">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon href="#">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="#">
              <LinkedInIcon />
            </SocialIcon>
          </SocialIcons>
        </RightColumn>
      </Container>
    </Root>
  );
};

export default Footer;
