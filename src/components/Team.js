import React from "react";
import "./../styles/team.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SubHeading from "./SubHeading";
import Heading from "./Heading";

import Cloud from "./Cloud";

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} id="team" className="relative ">
      <img
        className="absolute w-1/4  -top-10 -right-10 z-0 "
        src="/imgs/palm-r.png"
        alt="spot"
      />
      {/* <motion.img
        animate={inView ? { top: ["75%", "65%"], right: [-100, 0] } : { right: 0 }}
        className="absolute  w-1/3 z-0 right-0 flip"
        src="/imgs/palm-l.png"
        alt="spot"
      /> */}
      <img
        className="absolute top-10 left-1/2 w-1/12 z-0"
        src="/imgs/spot.svg"
        alt="spot"
      />
      <img
        className="absolute top-3/4 -left-20 w-1/6 z-0"
        src="/imgs/spot.svg"
        alt="spot"
      />

      <div className="my-container relative team-container">
        <div className="w-full flex flex-col items-start gap-5 pb-10 ">
          <Heading>Our team</Heading>
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </SubHeading>
        </div>
        <div className="w-full flex justify-center overflow-hidden relative"></div>
      </div>
    </div>
  );
}
