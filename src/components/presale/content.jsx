import React from "react";
import {  Container } from "react-bootstrap";
import { PresaleMinter } from "./minter";
import "./presale.scss";
export const PresaleContent = () => {
   
  return (
    <div className="presale-content">
      <Container style={{padding:"0px"}} fluid>
       <PresaleMinter />
      </Container>
    </div>
  );
};
