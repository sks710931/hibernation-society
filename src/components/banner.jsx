import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import "./banner.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import discord from "../assets/images/discord.svg"
export const Banner = () => {
    const handleClickTwitter = () => {
        window.open(
            `https://twitter.com/HibernationSoc`,
            "_blank"
          )
    }
    const handleClickInstagram = () => {
        window.open(
            `https://www.instagram.com/hibernationsociety/`,
            "_blank"
          )
    }
    const handleClickDiscord = () => {
        window.open(
            `https://discord.com/invite/uW46NyCAyU`,
            "_blank"
          )
    }

  return (
    <Container fluid className="banner-container">
      <Box
        className="banner-box"
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Box>
      <Box
        className="banner-over"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1 className="banner-text">Hibernation Society</h1>
        <Typography className="banner-alt-text" variant="body2">
          Follow us on{" "}
          <IconButton onClick={handleClickTwitter} className="icon-btn">
            <TwitterIcon />
          </IconButton>
          <IconButton onClick={handleClickInstagram} className="icon-btn">
            <InstagramIcon />
          </IconButton>
          <IconButton onClick={handleClickDiscord} className="icon-btn">
            <img src={discord} alt="discord" />
          </IconButton>
        </Typography>
      </Box>
    </Container>
  );
};
