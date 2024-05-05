import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        <div className="flex items-center justify-between gap-16 ">
          <Image
            src={"/profile.png"}
            width={250}
            height={250}
            className="object- rounded-xl transition-all hover:-rotate-2 hover:scale-110"
            alt="Foto de perfil"
          />
          <div className="max-w-[650px] space-y-4">
            <p className={paragraphStyles}>
              Always dedicated and studious since little kid, at my 13 years
              old, I had the big opportunity to move from my hometown (Crato -
              CE), a small country city, to live by myself in an accommodation
              in a big city to study with a full scholarship in of one the best
              schools of Brazil:{" "}
              <Link
                href="https://www.fariasbrito.com.br/#/"
                className="font-semibold underline"
              >
                Farias Brito.
              </Link>
            </p>
            <p className={paragraphStyles}>
              There I own a variety of olympics medals and got in touch with the
              computing world for the first time, which led me, at 17, to enroll
              at Information Systems bachelor course of{" "}
              <Link
                href="https://portal.cin.ufpe.br/"
                className="font-semibold underline"
              >
                CIn (Centro de Informática)
              </Link>
              , one of the most renowned national computing departments. In the
              very first semester, I already started working with software
              development.
            </p>
            <p className={paragraphStyles}>
              Currently, I'm building professional web solutions, from simple
              landing pages to big SASS platforms with realtime chats, at{" "}
              <Link
                href="https://www.linkedin.com/company/atomstudioo/mycompany/"
                className="font-semibold underline"
              >
                Atom Studio
              </Link>{" "}
              software house.
            </p>
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
