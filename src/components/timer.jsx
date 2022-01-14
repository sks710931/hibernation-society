import React from "react";
import "./timer.scss";
import { useTimer } from "react-timer-hook";

const getTime = () => {
  //const datum = new Date(Date.UTC(2022, 0, 28, 11, 0, 0));
  //return datum.getTime();
  return Date.now() + 5000;
};

export const Timer = ({onComplete}) => {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp: getTime(),
    onExpire: () => onComplete(true),
  });

  return (
    <div className="timer-container">
      <p>Minting of Hibernation Society NFT's Starts in</p>
      {isRunning ? (
        <div className="timer">
          <div className="timer-number">
            <span className="number">{days}</span>
            <span className="text">Days</span>
          </div>
          <span className="seperator">:</span>
          <div className="timer-number">
            <span className="number">{hours}</span>
            <span className="text">Hours</span>
          </div>{" "}
          <span className="seperator">:</span> 
          <div className="timer-number">
            <span className="number">{minutes}</span>
            <span className="text">Minutes</span>
          </div>
          <span className="seperator">:</span> 
          <div className="timer-number">
            <span className="number">{seconds}</span>
            <span className="text">Seconds</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
