import React from "react";
import "./../styles/team.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
const team = [
  {
    name: "Sheldon",
    position: "CEO",
    imgSrc: "/imgs/2.png",
  },
  {
    name: "Sergey",
    position: "Artist",
    imgSrc: "/imgs/5.png",
  },
  {
    name: "Alex",
    position: "Developer",
    imgSrc: "/imgs/3.png",
  },

  {
    name: "Oleksii",
    position: "Developer",
    imgSrc: "/imgs/1.png",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const cont = {
    show: {
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { transition: { duration: 0.3 } },
  };
  const item = {
    show: {
      x: 0,
      scale: [1, 1, 1],
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.5, delayChildren: 0.5 },
    },
    hidden: { x: "-100%", scale: 0, opacity: 0, transition: { duration: 0.3 } },
  };
  const item1 = {
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { y: "-50px", opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <div id="team" className="relative ">
      <div className="my-container relative team-container">
        <div className="special-grid">
          <Heading>
            <div className="">
              bomb <span className="text-myRed">team</span>
            </div>
          </Heading>
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </SubHeading>
        </div>
        <motion.div
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
          className="team-members grid grid-cols-2 gap-5 xl:gap-10 lg:grid-cols-4"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={item}
              className="w-full flex flex-col items-center"
            >
              <img
                className="w-full block rounded-xl overflow-hidden z-10 mb-2 lg:mb-4 xl:mb-6"
                src={member.imgSrc}
                alt={member.name}
              />

              <motion.p variants={item1} className="team-name">
                {member.name}
              </motion.p>
              <motion.p variants={item1} className="team-pos">
                {member.position}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
