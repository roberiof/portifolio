import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "@components/Button/Button";
import { linkedInLink } from "@/utils/links";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const transformedX = useTransform(scrollYProgress, [0, 1], [0, 1000]);

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
          Hi, I&apos;m Robério
          <br />
          <span className="gradient-text"> Software Developer </span>
        </h1>
        <p className="text-medium m-auto max-w-[750px] text-[24px] font-medium leading-9  text-white/50">
          With nearly 3 years of experience especialized on web software,
          I&apos;ve been developing beautiful and functional solutions for my
          clients.
        </p>
        {/* <div className="flex items-center justify-center gap-8">
          <div className="flex gap-2 font-semibold">
            <Image src="/check-portifolio.svg" width={20} height={20} alt="Icons"/>
            <span>Performance</span>
          </div>
          <div className="flex gap-2 font-semibold">
            <Image src="/check-portifolio.svg" width={20} height={20} alt="Icons"/>
            <span>Animations</span>
          </div>
          <div className="flex gap-2 font-semibold">
            <Image src="/check-portifolio.svg" width={20} height={20} alt="Icons"/>
            <span>Code Quality</span>
          </div>
        </div> */}
        <Button className="m-auto mt-4" onClick={() => null}>
          <Link href={linkedInLink} target="_blank">
            Get in touch
          </Link>
        </Button>
      </div>

      <motion.div
        className="mt-16 flex justify-end gap-4"
        style={{ x: transformedX }}
        ref={ref}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={`/projects/project-${index}-main.png`}
            width={450}
            height={600}
            alt={"Projetot 1"}
            className={"rounded-xl "}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
