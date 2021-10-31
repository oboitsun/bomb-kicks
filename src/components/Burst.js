import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/burst.scss";
export default function Burst() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const cont = {
    hide: { opacity: 1 },
    show: {
      opacity: 1,
      delay: 1,
      transition: { staggerChildren: 0.1, staggerDelay: 1 },
    },
  };
  const item = {
    hide: { scale: 0, opacity: 0, rotate: 0 },
    show: { opacity: 1, scale: 1, rotate: [0, 10], transition: { duration: 0.1 } },
  };
  return (
    <motion.div
      ref={ref}
      variants={cont}
      initial="hide"
      animate={inView ? "show" : "hidden"}
      className="relative h-96 w-96 burst"
    >
      <motion.img
        variants={item}
        key={1}
        className="phase phase1 "
        src="/imgs/burst/phase1.svg"
        alt="burst phase"
      />
      <motion.img
        variants={item}
        key={2}
        className="phase phase2 "
        src="/imgs/burst/phase2.svg"
        alt="burst phase"
      />
      <motion.img
        variants={item}
        key={3}
        className="phase phase3 "
        src="/imgs/burst/phase3.svg"
        alt="burst phase"
      />
      <motion.img
        variants={item}
        key={4}
        className="phase phase4 "
        src="/imgs/burst/phase4.svg"
        alt="burst phase"
      />
      <motion.img
        variants={item}
        key={5}
        className="phase phase5 "
        src="/imgs/burst/phase5.svg"
        alt="burst phase"
      />
      <motion.img
        variants={item}
        key={6}
        className="phase phase6 "
        src="/imgs/burst/phase6.svg"
        alt="burst phase"
      />
      <motion.img
        variants={item}
        key={7}
        className="phase phase7 "
        src="/imgs/burst/phase7.svg"
        alt="burst phase"
      />
      <motion.img
        variants={item}
        key={8}
        className="phase phase8 "
        src="/imgs/burst/phase8.svg"
        alt="burst phase"
      />
    </motion.div>
  );
}
