import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PresaleMinter } from "./minter";
import "./presale.scss";
import { PresaleTimer } from "./timer";
export const PresaleContent = () => {
    const [timerComplete, setTimerComplete] = useState(false);
  const onTimerComplete = (isCompleted) => {
    setTimerComplete(isCompleted);
  };
  return (
    <div className="presale-content">
      <Container style={{padding:"0px"}} fluid>
      {!timerComplete ? <PresaleTimer onComplete={onTimerComplete} /> : <PresaleMinter />}
      </Container>
    </div>
  );
};
