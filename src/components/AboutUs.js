import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
import Slider from "./Slider";
import SliderMob from "./SliderMob";
export default function AboutUs({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
}) {
  return (
    <div id="about-us" className="relative">
      <div className="my-container flex flex-col lg:flex-row items-center">
        <div className="about overflow-hidden">
          <div className="w-full special-grid lg:gap-5 xl:gap-8">
            <Heading>
              About <br />
              <span className="text-myRed">bomb kicks</span>
            </Heading>
            <SubHeading>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </SubHeading>
          </div>

          <div className="hidden lg:block w-full overflow-hidden">
            <Slider />
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full overflow-hidden">
        <SliderMob />
      </div>
    </div>
  );
}