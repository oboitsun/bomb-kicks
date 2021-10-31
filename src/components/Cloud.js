import React from "react";
import { motion } from "framer-motion";
export default function Cloud({ direction }) {
  return (
    <img
      initial={{ x: direction ? "10vw" : "-10vw" }}
      animate={{
        x: direction ? "-100vw" : "100vw",
        opacity: [1, 0.5, 1, 0.5],
        top: [14, -15, 14, -15],
      }}
      transition={{ repeat: "Infinity", repeatType: "mirror", duration: 25 }}
      className="w-1/2 lg:w-1/6 absolute top-20 z-10"
      src="/imgs/cloud.svg"
      alt="cloud"
    />
  );
}
