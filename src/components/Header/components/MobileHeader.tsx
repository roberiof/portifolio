import React, { useState } from "react";
import useSound from "use-sound";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { mediumLink } from "@/utils/links";

import { MenuButton } from "./MenuButton";
import { menu, menuItem } from "../constants";
import clickAudio from "@public/audio/click.mp3";

const MobileHeader = () => {
  const [play] = useSound(clickAudio);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <motion.span
        variants={menu}
        animate={open ? "open" : "closed"}
        initial="closed"
        exit="closed"
        className="select-none"
      >
        <MenuButton
          isOpen={open}
          onClick={() => {
            setOpen((prev) => !prev);
            play();
          }}
        />
        <AnimatePresence>
          <motion.div
            initial={"closed"}
            exit={"closed"}
            animate={open ? "open" : "closed"}
            variants={menu}
            className="absolute right-0 mt-4 flex w-[130px] flex-col gap-2 rounded-md border border-white/10 bg-[rgba(34,33,33,0.9)] p-3"
          >
            <motion.a
              {...menuItem}
              className="cursor-pointer font-semibold text-[#dddee5] hover:text-white"
            >
              Work
            </motion.a>
            <motion.a
              {...menuItem}
              className="cursor-pointer font-semibold text-[#dddee5] hover:text-white"
            >
              About
            </motion.a>
            <motion.a
              {...menuItem}
              className="flex cursor-pointer items-center gap-2 font-semibold text-[#dddee5] hover:text-white"
              href={mediumLink}
              target="__blank"
            >
              Blog
              <FaExternalLinkAlt
                size={12}
                className="transition-all hover:scale-125"
              />
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};

export default MobileHeader;
