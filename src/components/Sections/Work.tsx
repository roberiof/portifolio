import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";

const Work = () => {
  const projects = [
    {
      name: "DevBlog",
      github: "https://github.com/roberiof/dev-blog",
      demo: "https://dev-blog-ruddy-eta.vercel.app/",
      gradientColor: "#6e45e2"
    },
    {
      name: "MDD digital",
      github: "https://github.com/roberiof/mdd-digital",
      demo: "https://mdd-digital.vercel.app/",
      gradientColor: "#0464FF"
    },
    {
      name: "Highking",
      github: "https://github.com/roberiof/highking",
      demo: "https://highking.vercel.app/",
      gradientColor: "#3B82F6"
    },
    {
      name: "Spicers",
      github: "https://github.com/roberiof/spicers-frontend",
      demo: "",
      gradientColor: "#ff0c38"
    },
    {
      name: "Car Showcase",
      github: "https://github.com/roberiof/car_showcase",
      demo: "",
      gradientColor: "#446DFF"
    },
    {
      name: "Syncrely",
      github: "https://github.com/roberiof/syncrely",
      demo: "https://syncrely.vercel.app/",
      gradientColor: "#7B59F8"
    }
  ];

  return (
    <section className="m-auto w-11/12" id="work">
      <div className="flex flex-col items-center justify-center space-y-4 py-16 text-center ">
        <p className="hidden text-[11px] font-medium tracking-[0.25em] text-white/50 sm:block">
          SMALL PROJECTS THAT SHOW A LITTLE ABOUT MY WORK.
        </p>
        <Reveal>
          <span className="text-4xl font-bold sm:text-[48px]">
            Examples of Development Work
          </span>
        </Reveal>
      </div>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewpAort={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                background: `linear-gradient(to top,  ${project.gradientColor}, #000000)`
              }}
              className="relative flex h-[350px] w-full items-end justify-center rounded-[30px] bg-white object-contain md:h-[450px] xl:h-[668px]"
            >
              <div
                className={`mainImage-${index} relative z-10 h-[90%] w-full overflow-hidden rounded-t-xl  lg:translate-x-36 xl:translate-x-48`}
              >
                <Image
                  src={`/projects/project-${index}-main.png`}
                  fill
                  alt={"Projeto " + index}
                  className="object-contain"
                />
              </div>
              <motion.div
                className="relative hidden h-full w-full lg:block lg:-translate-x-36  xl:-translate-x-48"
                initial={{ zIndex: 0, opacity: 0.8, x: -250 }}
                transition={{ ease: "easeIn" }}
                // animation to see the guy behind
                // whileHover={{ zIndex: 20, opacity: 1, x: -240 }}
                // onMouseEnter={() =>
                //   animate(`.mainImage-${index}`, { opacity: 0.8 })
                // }
                // onMouseLeave={() =>
                //   animate(`.mainImage-${index}`, { opacity: 1 })
                // }
              >
                <Image
                  src={`/projects/project-${index}-secondary.png`}
                  fill
                  alt={"Projeto " + index}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="flex items-center justify-between px-2 ">
              <span className="text-[#c5c7cc] hover:underline sm:text-[24px]">
                {project.name}
              </span>
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  className="cursor-pointer rounded-full border-2 border-white/50 p-1 px-4 text-sm text-white/50 transition-all hover:scale-110 hover:border-white/80 hover:text-white/80 sm:text-base"
                >
                  Github
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="cursor-pointer rounded-full border-2 border-white/50 p-1 px-4 text-sm text-white/50 transition-all hover:scale-110 hover:border-white/80 hover:text-white/80 sm:text-base"
                  >
                    Demo
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
