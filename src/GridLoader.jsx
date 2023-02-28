import React from "react";
import { motion } from "framer-motion";

const GridLoader = ({ colors, duration, delay }) => {
  const container = {
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: duration / colors.length,
      },
    },
    exit: {
      transition: {
        staggerChildren: duration / colors.length,
        staggerDirection: -1,
      },
    },
  };

  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const bgVariants = {
    hidden: {
      opacity: 1,
      height: 0,
    },
    show: {
      opacity: 1,
      height: windowHeight,
      transition: {
        ease: "easeOut",
        duration,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={container}
      className="fixed left-0 top-0 bottom-0 -z-10 m-auto flex h-screen w-full flex-row"
    >
      {colors.map((bg) => (
        <motion.div
          key={bg}
          variants={bgVariants}
          className={`pointer-events-none shadow-md w-1/6 ${bg}`}
        />
      ))}
    </motion.div>
  );
};

export default GridLoader;
