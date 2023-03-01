import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
// components
import GridLoader from "./GridLoader";
import ViewMyNFT from "./ViewMyNFT";
// hooks
import useWindowSize from "../hooks/useWindowSize";
// assets
import ZISOU_DOG from "../assets/zissou-dog.jpg";

export default function Loader() {
  const windowSize = useWindowSize();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set("exit");
    controls.start("show");
  }, [windowSize]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        animate={controls}
        initial="hidden"
        exit="exit"
        className="z-20"
      >
        <GridLoader
          colors={[
            "bg-nifty-green",
            "bg-nifty-white",
            "bg-nifty-gray",
            "bg-nifty-yellow",
            "bg-nifty-red",
            "bg-nifty-blue",
          ]}
          duration={1.5}
          delay={3}
        />
        <ViewMyNFT src={ZISOU_DOG} duration={1.5} delay={5.5} />
      </motion.div>
    </AnimatePresence>
  );
}
