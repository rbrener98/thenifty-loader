import React, { useMemo } from "react";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";

const GridLoader = ({ colors, duration, delay }) => {
  const windowSize = useWindowSize();

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

  const bgVariants = useMemo(
    () => ({
      hidden: {
        opacity: 1,
        height: 0,
      },
      show: {
        opacity: 1,
        height: windowSize.height,
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
    }),
    [windowSize.height]
  );

  return (
    <motion.div
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
