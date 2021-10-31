import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const dayX = new Date("November 23, 2021 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className=" flex items-center  mb-4 lg:mb-6  relative ">
      <p className="text-white top-4 relative font-mont font-bold">
        Time till <br />
        launch:
      </p>
      <div className=" text-white  timer">
        <TimerCountItem time={timeLeft.days} text="Days" />
        <p className="timer-digits px-1 relative top-2 ">:</p>
        <TimerCountItem time={timeLeft.hours} text="Hours" />
        <p className="timer-digits px-1 relative top-2 ">:</p>
        <TimerCountItem time={timeLeft.minutes} text="Minutes" />
        <p className="timer-digits px-1 relative top-2">:</p>
        <TimerCountItem time={timeLeft.seconds} text="Seconds" />
      </div>
    </div>
  );
}
