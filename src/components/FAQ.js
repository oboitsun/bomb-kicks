import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";
import Cloud from "./Cloud";

const faqs = [
  { qstn: "How do I buy a Juicy Kicks?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Juicy Kicks on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Juicy Kicks NFT?", answr: "The Answer" },
  { qstn: "How many Juicy Kicks caan I buy?", answr: "The Answer" },
];
export default function FAQ() {
  return (
    <div id="faq" className="relative">
      <Cloud direction />
      <motion.img
        transition={{ duration: 7, repeat: "Infinity", repeatType: "loop" }}
        className="absolute w-1/4 -left-10 z-0 flip opacity-20"
        src="/imgs/palm-r.png"
        alt="spot"
      />
      <motion.img
        animate={{ rotate: [-5, 4, -5], transformOrigin: "bottom left" }}
        transition={{ duration: 9, repeat: "Infinity", repeatType: "mirror" }}
        className="absolute top-2/4 w-1/6 z-0 -left-20"
        src="/imgs/palm-l.png"
        alt="spot"
      />
      <div className="my-container">
        <div className=" flex flex-col lg:grid grid-cols-2 place-items-center">
          <div className="w-full relative order-1 ">
            <img className=" kiwi " src="/imgs/17.png" alt="kiwi" />
            <svg
              className="cloud fill-current"
              viewBox="0 0 251 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.18125 81.9648H244.166C244.166 81.9648 250.912 82.8091 250.912 75.2107C250.912 75.2107 252.177 69.0897 244.798 69.0897C237.42 69.0897 243.323 68.8786 243.323 68.8786H188.966H18.5346H6.28946C6.28946 68.8786 0.175652 69.7229 0.175652 74.9996C0.175652 74.9996 -1.30009 81.9648 4.18125 81.9648Z"
                fill="current"
              />
              <path
                d="M89.7921 76.8992C91.1449 73.3462 91.9355 69.5118 91.9355 65.5015C91.9355 48.0004 77.7753 33.8237 60.2948 33.8237C42.8142 33.8237 28.6541 48.0004 28.6541 65.5015C28.6541 69.5294 29.4446 73.3638 30.7974 76.8992H89.7921Z"
                fill="current"
              />
              <path
                d="M207.536 72.3085C208.607 69.5294 209.222 66.5041 209.222 63.3381C209.222 49.5835 198.066 38.4144 184.328 38.4144C170.589 38.4144 159.433 49.5659 159.433 63.3381C159.433 66.5041 160.048 69.5294 161.12 72.3085H207.536Z"
                fill="current"
              />
              <path
                d="M175.087 75.2458C177.476 69.0545 178.847 62.3531 178.847 55.335C178.847 24.7653 154.093 0 123.576 0C93.06 0 68.3062 24.7653 68.3062 55.335C68.3062 62.3707 69.6589 69.0721 72.0658 75.2458H175.087Z"
                fill="current"
              />
            </svg>
          </div>
          <div className="faq-list lg:order-1 relative z-10">
            <Heading>FAQ'S</Heading>
            <div className="text-center  mx-auto">
              <SubHeading>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s
              </SubHeading>
            </div>
            <div className="grid grid-cols-1  gap-x-5 w-full">
              <div className="faq-divider"></div>
              <div className="faq-divider hidden lg:block"></div>
              {faqs.map((f, i) => (
                <FaqItem key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
