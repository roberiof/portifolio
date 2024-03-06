import { motion } from "framer-motion";
import React from "react";
import "../../app/globals.css";

const About = () => {
  const paragraphStyles = " text-[#86858c]";
  return (
    <section className="relative overflow-hidden pb-40 pt-32">
      <div className="m-auto flex w-11/12 flex-col items-center justify-center gap-16 ">
        <div className="text-center">
          <h1 className="text-7xl font-bold">The Developer</h1>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: [0, 0.2], y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-stroke opacity-20"
          >
            Behind the screen
          </motion.h1>
        </div>
        <div className="max-w-[650px] space-y-4">
          <p className={paragraphStyles}>
            Hello there! My name is Lovro, and I&apos;m a freelance designer. I
            work directly with clients to provide high-quality design solutions
            that help businesses achieve their goals.
          </p>
          <p className={paragraphStyles}>
            I work directly with you on a one-to-one basis. This approach
            ensures that I can dedicate my full attention to your project,
            delivering the highest quality design solutions tailored to your
            needs.
          </p>
          <p className={paragraphStyles}>
            My approach is simple: instead of charging per project or per hour,
            I offer a flat monthly rate that covers as many design requests as
            you need.
          </p>
          <p className={paragraphStyles}>
            This way, you can focus on your business without worrying about the
            cost of design work.
          </p>
          <div className="my-4 border-l-2 border-white pl-4">
            <p className="text-xl font-semibold">
              My ultimate goal is your success. I’am committed to working with
              you until you&apos;re completely satisfied.
            </p>
          </div>
          <p className={paragraphStyles}>
            If you&apos;re interested in learning more about my approach and how
            I can help grow your business,{" "}
            <span className="underline">let&apos;s schedule a free call</span>.
            Together, we can take your business to the next level.
          </p>
        </div>
      </div>
      <motion.div
        className={`bottom-effect transition-all`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 2 }}
      ></motion.div>
    </section>
  );
};

export default About;
