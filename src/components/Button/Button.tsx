"use client";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import "./style.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <motion.button
      className={twMerge("btn-hover-effect", className)}
      onClick={onClick}
      initial={{ y: 0 }}
      whileHover={{ y: -12, scale: 1.05 }}
      transition={{ duration: 0.04, type: "spring" }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
