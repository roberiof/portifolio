import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "@components/Button/Button";
import { linkedInLink } from "@/utils/links";
import Reveal from "../Reveal/Reveal";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const transformedX = useTransform(scrollYProgress, [0, 1], [120, 0]);

  return (
    <section className="m-auto w-11/12 overflow-hidden pb-24 pt-44">
      <motion.div
        className={`top-effect transition-all`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", duration: 2 }}
      ></motion.div>

      <div className="m-auto flex max-w-6xl flex-col gap-12 text-center">
        <h1 className="-gap-2 flex w-full flex-col items-center justify-center text-[36px] font-black sm:text-[64px] ">
          <Reveal>
            <span className="w-fit">Hi, I&apos;m Robério</span>
          </Reveal>
          <Reveal>
            <span className="gradient-text"> Software Developer </span>
          </Reveal>
        </h1>
        <span className="text-medium m-auto -mt-8 max-w-[750px] text-base font-medium text-white/50  sm:text-[24px] sm:leading-9">
          <Reveal>
            <span>
              With nearly 3 years of experience especialized on web software,
              I&apos;ve been developing beautiful and functional solutions for
              my clients.
            </span>
          </Reveal>
        </span>

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
        className="mt-16 hidden justify-end gap-4 sm:flex"
        initial={{ x: 1000 }}
        style={{ x: transformedX }}
        transition={{ ease: "easeIn" }}
        ref={ref}
      >
        {[1, 2, 3, 4].map((index) => (
          <Image
            key={index}
            src={`/projects/project-${index}-main.png`}
            width={450}
            height={600}
            priority={index === 3 || index === 4}
            alt={`Projeto ${index}`}
            className={"rounded-xl "}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
