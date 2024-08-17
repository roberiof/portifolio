import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import Reveal from "../Reveal/Reveal";

const About = () => {
  const paragraphStyles = " text-[#86858c]";
  return (
    <section
      className="relative mx-4 overflow-hidden pb-20 pt-32 min-[600px]:pb-40"
      id="about"
    >
      <div className="m-auto flex w-11/12 flex-col items-center justify-center gap-8 lg:gap-16 ">
        <div className="flex flex-col items-center justify-center text-center">
          <Reveal>
            <h1 className="text-5xl font-bold lg:text-7xl">The Developer</h1>
          </Reveal>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: [0, 0.2], y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-stroke text-4xl opacity-20 sm:text-7xl lg:text-[7em]"
          >
            Behind the screen
          </motion.h1>
        </div>
        <div className="flex items-center justify-between gap-16 text-center sm:text-start ">
          <Image
            src={"/profile-pic.jpg"}
            width={200}
            height={200}
            className="hidden rounded-xl transition-all hover:-rotate-2 hover:scale-110 lg:block"
            alt="Foto de perfil"
          />
          <div className="max-w-[650px] space-y-4">
            <Reveal>
              <p className={paragraphStyles}>
                Always dedicated and studious since I was a little kid, at 13
                years old, I had the big opportunity to move from my hometown
                (Crato - CE), a small country city, to live by myself in an
                accommodation in a big city to study with a full scholarship at
                one of the best schools in Brazil:{" "}
                <Link
                  href="https://www.fariasbrito.com.br/#/"
                  className="font-semibold underline"
                  target="_blank"
                >
                  Farias Brito.
                </Link>
              </p>
            </Reveal>
            <Reveal>
              <p className={paragraphStyles}>
                There I earned a variety of Olympic medals and got in touch with
                the computing world for the first time, which led me, at 17, to
                enroll in the Information Systems bachelor&apos;s course at{" "}
                <Link
                  href="https://portal.cin.ufpe.br/"
                  className="font-semibold underline"
                  target="_blank"
                >
                  CIn (Centro de Informática)
                </Link>
                , one of the most renowned national computing departments. In
                the very first semester, I already started working with software
                development.
              </p>
            </Reveal>
            <Reveal>
              <p className={paragraphStyles}>
                Currently, I&apos;m building professional web solutions, from
                simple landing pages to big SaaS platforms with real-time chats,
                at
                <Link
                  href="https://www.linkedin.com/company/atomstudioo/mycompany/"
                  className="font-semibold underline"
                >
                  {" "}
                  Atom Studio
                </Link>{" "}
                software house.
              </p>
            </Reveal>
          </div>
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
