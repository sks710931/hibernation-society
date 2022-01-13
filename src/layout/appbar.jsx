
import { Box, Button  } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/images/logo.jpg";
import "./appbar.scss";
const Appbar = () => {
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 && !activeClass) {
        setActiveClass(true);
      }
      if (window.scrollY < 50) {
        setActiveClass(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Navbar
      className={`${activeClass ? "nav-white" : ""} navbar-root`}
      sticky="top"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand className="navbar-brand-logo" href="#">
          <img className="logo-img" src={logo} alt="" />
          <span>Hibernation Society</span>
        </Navbar.Brand>

        
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" >
            <Button className="navbar-link" href="#action1">
              #Storywall
            </Button>
            <Button className="navbar-link" href="#action2">
              Members
            </Button>
            <Button className="navbar-link" href="#action2">
              Presale
            </Button>
          </Box>
      </Container>
    </Navbar>
  );
};

export default Appbar;
