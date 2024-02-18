"use client";
import "./style.css";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

import { motion, useAnimationControls } from "framer-motion";
import { linkedInLink } from "@utils/links";
import { useRef } from "react";
import {
  defaultControlRole,
  defaultControlName,
  defaultControlLink,
  navLinksStyle
} from "./constants";

import MobileHeader from "./components/MobileHeader";

export const Header = () => {
  const link = useRef<HTMLAnchorElement | null>(null);

  const controlRole = useAnimationControls();
  const controlName = useAnimationControls();
  const controlLink = useAnimationControls();

  const startAnimation = () => {
    controlRole.start({ opacity: 1, x: -116 });
    controlName.start({ y: -10 });
    controlLink.start({ opacity: 1 });
  };

  const endAnimation = () => {
    controlRole.start(defaultControlRole);
    controlName.start(defaultControlName);
    controlLink.start(defaultControlLink);
  };

  return (
    <motion.header
      animate={{ y: 20 }}
      initial={{ y: "-100%", x: "-50%", left: "50%" }}
      className="glassmorphism fixed z-10 flex w-11/12 max-w-[550px] justify-between border border-white/10 px-4 py-2 text-white"
    >
      <motion.div
        onHoverStart={startAnimation}
        onHoverEnd={endAnimation}
        className="group flex cursor-pointer items-center gap-3 transition-all"
        onClick={() => link?.current?.click()}
      >
        <Link
          href={linkedInLink}
          target="__blank"
          ref={link}
          className="hidden"
        />
        <div className="relative h-10 w-10 flex-shrink-0 rounded-full">
          <Image
            src="/profile.png"
            fill
            alt="Foto de Robério Filho"
            className="cursor-pointer rounded-full object-cover"
          />
        </div>
        <motion.span
          transition={{ type: "spring" }}
          initial={defaultControlName}
          animate={controlName}
          className="flex w-full items-center gap-3 font-semibold group-hover:underline"
        >
          <span className="flex-shrink-0">Robério Filho</span>
          <motion.a
            target="__blank"
            initial={defaultControlLink}
            animate={controlLink}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <FaExternalLinkAlt
              size={12}
              className="transition-all hover:scale-125 group-hover:scale-125"
            />
          </motion.a>
        </motion.span>
        <motion.span
          transition={{ type: "tween", delay: 0.2 }}
          initial={defaultControlRole}
          animate={controlRole}
          className="flex w-full text-xs text-white/50"
        >
          Visit my LinkedIn
        </motion.span>
      </motion.div>

      {/* WEB HEADER */}
      <nav className="group relative hidden md:flex">
        <a href="" className={"peer/work" + navLinksStyle}>
          Work
        </a>
        <a href="" className={"peer/about " + navLinksStyle}>
          About
        </a>
        <a
          href="mediumLink"
          target="__blank"
          className={"peer/blog flex items-center gap-2 " + navLinksStyle}
        >
          <span>Blog</span>
          <span>
            <FaExternalLinkAlt size={14} />
          </span>
        </a>
        <span className="absolute top-0 -z-10 hidden h-full w-[70px] rounded-md border border-white/10 bg-white/10 transition-all group-hover:flex peer-hover/about:left-[73px] peer-hover/blog:left-[148px] peer-hover/work:left-0 peer-hover/blog:w-[80px]"></span>
      </nav>

      {/* MOBILE HEADER */}
      <MobileHeader />
    </motion.header>
  );
};
