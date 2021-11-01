import React from "react";
import "../styles/heading.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Heading({ children, ...props }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <motion.div ref={ref} className="heading  uppercase text-center">
      {React.Children.map(children, (child, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            animate={inView ? { y: "0" } : { y: "100%" }}
            transition={{ delay: i * 0.3, duration: 0.3 }}
            className="child"
          >
            {child}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
