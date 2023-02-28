import { motion, AnimatePresence } from "framer-motion";
// components
import GridLoader from "./GridLoader";
import ViewMyNFT from "./ViewMyNFT";

import ZISOU_DOG from "./assets/zissou-dog.jpg";

export default function App() {
  return (
    <main className="relative z-10 min-h-screen bg-white overflow-hidden">
      <div className="fixed top-0 -z-10 flex items-center justify-center h-screen w-screen">
        <span>LOGO</span>
      </div>
      <AnimatePresence>
        <motion.div key="loader" className="z-20">
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
        </motion.div>
        <ViewMyNFT src={ZISOU_DOG} duration={1.5} delay={5.5} />
      </AnimatePresence>
    </main>
  );
}
