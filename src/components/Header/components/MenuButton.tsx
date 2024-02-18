import React from "react";
import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 7
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -7
    }
  };

  return (
    <motion.div
      onClick={onClick}
      className="flex h-[40px] w-[40px] cursor-pointer flex-col justify-between rounded-md bg-white/10 p-2 py-3"
    >
      <motion.span
        animate={variant}
        initial={"closed"}
        variants={top}
        className="h-[2px] bg-white"
      ></motion.span>
      <motion.span
        animate={variant}
        initial={"closed"}
        variants={center}
        className="h-[2px] bg-white"
      ></motion.span>
      <motion.span
        animate={variant}
        initial={"closed"}
        variants={bottom}
        className="h-[2px] bg-white"
      ></motion.span>
    </motion.div>
  );
};

export { MenuButton };
