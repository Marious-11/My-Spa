"use client";
import React from "react";

import { motion } from "framer-motion";

function DIV({
  children,
  position,
}: {
  children: React.ReactNode;
  position: "top" | "bottom" | "left" | "right";
}) {
  if (position === "top") {
    return (
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  }

  if (position === "bottom") {
    return (
      <motion.div
        initial={{ y: "-10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }

  if (position === "left") {
    return (
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }

  if (position === "right") {
    return (
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  }
}

export default DIV;
