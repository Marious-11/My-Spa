"use client";
import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

function DIV({
  children,
  position,
}: {
  children: React.ReactNode;
  position: "top" | "bottom" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  if (position === "top") {
    return (
      <motion.div
        ref={ref}
        initial={{ y: "10vh", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "10vh", opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  }

  if (position === "bottom") {
    return (
      <motion.div
        ref={ref}
        initial={{ y: "-10vh", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "-10vh", opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }

  if (position === "left") {
    return (
      <motion.div
        ref={ref}
        initial={{ x: "10vw", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }

  if (position === "right") {
    return (
      <motion.div
        ref={ref}
        initial={{ x: "-10vw", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }
}

export default DIV;
