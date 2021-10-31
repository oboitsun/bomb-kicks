import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Cloud from "./Cloud";
const roadmap = [
  {
    month: "jul",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    month: "jul",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    month: "jul",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    month: "jul",
    heading: "Aliquam malesuada",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default function Roadmap() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const cont = {
    show: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.5 } },
    hidden: { opacity: 0 },
  };
  const item = {
    show: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div ref={ref} id="roadmap" className="relative">
      <motion.img
        animate={inView ? { top: [0, -100], left: [-100, 0] } : { left: 0 }}
        className="absolute w-1/4 left-0"
        src="/imgs/palm-l.png"
        alt="spot"
      />

      <Cloud direction />
      <div className="my-container ">
        <Heading>roadmap</Heading>
        <motion.div
          ref={ref}
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-5 lg:gap-10 grid-cols-1  py-10 relative z-10 text-white"
        >
          {roadmap.map((point, i) => (
            <motion.div variants={item} key={i} className=" milestone-point">
              <div className="milestone milestone-month">{point.month}</div>
              <div className="milestone milestone-content">
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
