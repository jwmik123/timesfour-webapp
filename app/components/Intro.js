import React from "react";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Intro = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 0.8, delay: 3, ease: "easeInOut" }}
        className="loading-screen fixed z-[9999] flex h-[100vh] w-full cursor-wait items-center justify-center bg-green-300"
      >
        <div className={`${bebas.className} text-spruce text-5xl`}>
          Welcome to Times Four
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 0.8, delay: 3.1, ease: "easeInOut" }}
        className="loading-screen bg-cutty fixed z-[9998] flex h-[100vh] w-full cursor-wait items-center justify-center"
      ></motion.div>
    </div>
  );
};

export default Intro;
