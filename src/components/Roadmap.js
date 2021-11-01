import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Burst from "./Burst";
import RoadmapPoint from "./RoadmapPoint";

const roadmap = [
  {
    key: 0,
    month: "jul",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 1,
    month: "aug",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  {
    key: 1,
    month: "Oct",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 0,
    month: "sep",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 0,
    month: "nov",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 1,
    month: "dec",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default function Roadmap() {
  return (
    <div id="roadmap" className="relative">
      <div className="my-container relative">
        <Heading>roadmap</Heading>
        <motion.div className="line-h line1 hidden lg:block"></motion.div>
        <div className="line-h line2 hidden lg:block"></div>
        <div className="line-h line3 hidden lg:block"></div>
        <div className="arc arc-r hidden lg:block">
          <div className="arc-inner"></div>
        </div>
        <div className="arc arc-l hidden lg:block">
          <div className="arc-inner"></div>
        </div>
        <motion.div className="roadmap-path-wrapper relative">
          {roadmap.map((point, i) => (
            <RoadmapPoint key={i} idx={i} point={point} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
