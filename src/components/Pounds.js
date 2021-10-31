import React from "react";
import { motion } from "framer-motion";

export default function Pounds() {
  return (
    <div className="relative  mx-auto  ">
      <motion.img
        className="absolute top-10 right-10 w-1/6"
        src="/imgs/spot.svg"
        alt="spot"
      />
      <motion.img
        className="absolute top-10 left-1/4 w-1/12"
        src="/imgs/spot.svg"
        alt="spot"
      />
      <motion.img
        className="absolute top-3/4 -left-20 w-1/6"
        src="/imgs/spot.svg"
        alt="spot"
      />

      <motion.img
        animate={{ rotate: [-5, 4, -5], transformOrigin: "bottom right" }}
        transition={{ duration: 9, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute w-1/4  -top-10 -right-10"
        src="/imgs/palm-r.png"
        alt="spot"
      />
    </div>
  );
}
