import React from "react";
import "./../styles/team.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SubHeading from "./SubHeading";
import Heading from "./Heading";

export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} id="team" className="relative ">
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
