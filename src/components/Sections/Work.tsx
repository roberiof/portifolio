import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, animate } from "framer-motion";

const Work = () => {
  const projects = [
    {
      name: "DevBlog",
      github: "https://dev-blog-ruddy-eta.vercel.app/",
      demo: "https://github.com/roberiof/dev-blog",
      gradientColor: "#6e45e2"
    },
    {
      name: "MDD digital",
      github: "https://mdd-digital.vercel.app/",
      demo: "https://github.com/roberiof/mdd-digital",
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
      demo: "https://spicers-frontend.vercel.app",
      gradientColor: "#ff0c38"
    },
    {
      name: "Car Showcase",
      github: "https://github.com/roberiof/car_showcase",
      demo: "",
      gradientColor: "#446DFF"
    }
  ];

  return (
    <section className="m-auto w-11/12">
      <div className="py-16 text-center ">
        <p className="text-[11px] font-medium tracking-[0.25em] text-white/50">
          TAKE A LOOK AT SOME OF THE LATEST WORKS.
        </p>
        <h1 className="text-[48px] font-bold">Examples of Development Work</h1>
      </div>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div
              style={{
                background: `linear-gradient(to top,  ${project.gradientColor}, #000000)`
              }}
              className="relative flex h-[150px] w-full items-end rounded-[30px] bg-white object-contain sm:h-[625px] md:h-[650px] xl:h-[685px]"
            >
              <div
                className={`mainImage-${index} relative z-10 h-[90%] w-full translate-x-12  overflow-hidden rounded-t-xl sm:translate-x-36 lg:translate-x-48`}
              >
                <Image
                  src={`/projects/project-${index}-main.png`}
                  fill
                  alt={"Projeto " + index}
                  className="object-contain"
                />
              </div>
              <motion.div
                className="relative h-full w-full -translate-x-12  sm:-translate-x-36 lg:-translate-x-48"
                initial={{ zIndex: 0, opacity: 0.8, x: -250 }}
                whileHover={{ zIndex: 20, opacity: 1, x: -240 }}
                transition={{ ease: "easeIn" }}
                onMouseEnter={() =>
                  animate(`.mainImage-${index}`, { opacity: 0.8 })
                }
                onMouseLeave={() =>
                  animate(`.mainImage-${index}`, { opacity: 1 })
                }
              >
                <Image
                  src={`/projects/project-${index}-secondary.png`}
                  fill
                  alt={"Projeto " + index}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <div className="flex justify-between px-2 ">
              <span className="text-[24px] text-[#c5c7cc] hover:underline">
                {project.name}
              </span>
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  className="cursor-pointer rounded-full border-2 border-white/10 p-1 px-4 text-[#606163] transition-all hover:border-white/50 hover:text-white/50"
                >
                  Github
                </Link>
                <Link
                  href={project.demo}
                  className="cursor-pointer rounded-full border-2 border-white/10 p-1 px-4 text-[#606163] transition-all hover:border-white/50 hover:text-white/50"
                >
                  Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
