import { Variants, MotionProps } from "framer-motion";

export const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15
    }
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05
    }
  }
} satisfies Variants;

export const menuItem = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 }
  },
  transition: { opacity: { duration: 0.2 } }
} satisfies MotionProps;

export const navLinksStyle =
  " p-2 px-4 font-medium text-[#dddee5] hover:text-white transition-all duration-500 ";

export const defaultControlRole = { opacity: 0, y: 11, x: -10 };
export const defaultControlName = { y: 0 };
export const defaultControlLink = { opacity: 0 };
