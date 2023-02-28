import React from "react";
import { motion } from "framer-motion";

const ViewMyNFT = ({ src, duration, delay }) => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration,
        delay,
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 1.2,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
        delay: delay + 0.7,
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
      className="m-auto flex flex-col h-screen w-full justify-center items-center gap-8 md:gap-16"
    >
      <motion.img
        variants={imageVariants}
        src={src}
        className="h-80 md:h-[32rem] w-auto"
      />
      <motion.button
        variants={buttonVariants}
        className="bg-white hover:bg-gray-200 ring-1 ring-black px-8 pt-1 pb-2 shadow-lg shadow-black rounded-3xl text-xl md:text-3xl"
      >
        View My NFT
      </motion.button>
    </motion.div>
  );
};

export default ViewMyNFT;
