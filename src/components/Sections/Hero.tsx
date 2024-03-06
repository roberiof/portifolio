import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Button from "@components/Button/Button";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const transformedX = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section className="m-auto w-11/12 overflow-hidden pb-24 pt-44">
      <motion.div
        className={`top-effect transition-all`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 2 }}
      ></motion.div>

      <div className="m-auto flex max-w-6xl flex-col gap-12 text-center">
        <h1 className="text-[64px] font-black leading-[72px]">
          <span className="gradient-text">Design partner </span>
          <br />
          for Growing Startups
        </h1>
        <p className="text-medium m-auto max-w-[750px] text-[24px] font-medium leading-9  text-white/50">
          Ship new app features, get a consistent website, marketing, or any
          other design with a simple monthly fee. Pause or cancel anytime.
        </p>
        <Button onClick={() => console.log("asdasdf")} className="m-auto mt-4">
          Book a discover call
        </Button>
      </div>

      <motion.div
        className="mt-16 flex justify-end gap-8"
        style={{ x: transformedX }}
        transition={{ type: "inertial" }}
        ref={ref}
      >
        <div className="h-[500px] w-[350px] bg-gray-100">1 </div>
        <div className="h-[500px] w-[350px] bg-gray-100">2 </div>
        <div className="h-[500px] w-[350px] bg-gray-100">3 </div>
        <div className="h-[500px] w-[350px] bg-gray-100">4 </div>
      </motion.div>
    </section>
  );
};

export default Hero;
