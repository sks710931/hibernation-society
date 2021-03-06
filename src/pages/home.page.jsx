import React, {useState} from "react";
import { Banner } from "../components/banner";
import { Images } from "../components/images";
import { Perks } from "../components/perks";
import { RoadmapFour } from "../components/roadmap/roadmap-four";
import { RoadmapOne } from "../components/roadmap/roadmap-one";
import { RoadmapThree } from "../components/roadmap/roadmap-three";
import { RoadmapTwo } from "../components/roadmap/roadmap-two";
import { Team } from "../components/team";
import { Welcome } from "../components/welcome";
import {Timer} from "../components/timer";
import {Minter} from "../components/minter";

export const Home = () => {
  const [timerComplete, setTimerComplete] = useState(false);
  const onTimerComplete = (isCompleted) => {
    setTimerComplete(isCompleted);
  };
  return (
    <div>
      <Banner />
       {!timerComplete ? <Timer onComplete={onTimerComplete} /> : <Minter />} 
      <Welcome />
      <Perks />
      <Images />

      <Team />
      <RoadmapOne />
      <RoadmapTwo />
      <RoadmapThree />
      <RoadmapFour />
    </div>
  );
};
