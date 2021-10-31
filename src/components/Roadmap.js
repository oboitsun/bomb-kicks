import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Burst from "./Burst";
import RoadmapPath from "./RoadmapPath";

const roadmap = [
  {
    key: 1,
    month: "jul",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 2,
    month: "aug",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  {
    key: 4,
    month: "Oct",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 3,
    month: "sep",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 5,
    month: "nov",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: 6,
    month: "dec",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default function Roadmap() {
  const { ref, inView } = useInView({ threshold: 0 });
  const cont = {
    show: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0 } },
    hidden: { opacity: 0 },
  };
  const item = {
    show: { opacity: 1 },
    hidden: { opacity: 1 },
  };
  return (
    <div ref={ref} id="roadmap" className="relative">
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
        <motion.div
          ref={ref}
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="roadmap-path-wrapper relative"
        >
          {roadmap.map((point, i) => (
            <motion.div variants={item} key={point.key} className="milestone-point">
              <div className="w-1/2 relative">
                <Burst delay={point.key} />
                <div className="milestone milestone-month">{point.month}</div>
              </div>
              <div className="w-3/4 milestone milestone-content">
                <p className="month-heading">{point.heading}</p>
                <p className="month-text">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
