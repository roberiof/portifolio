import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export interface RevelProps {
  children: JSX.Element;
  width?: "fit" | "full";
}

const Reveal = ({ children, width = "fit" }: RevelProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-${width}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial={"hidden"}
        animate={slideControls}
        className="absolute bottom-4 left-0 right-0 top-4 z-20 bg-pinkDark"
        transition={{ duration: 0.5, ease: "easeIn" }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
