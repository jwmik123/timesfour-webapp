"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navData = [
  { title: "Home", link: "/" },
  { title: "Projecten", link: "/projects" },
  { title: "Agency", link: "/about" },
  { title: "Vacatures", link: "/vacancies" },
  { title: "Contact", link: "/contact" },
];
const footerData = [
  { title: "Instagram", link: "/" },
  { title: "LinkedIn", link: "/" },
  { title: "TikTok", link: "/" },
  { title: "Twitter", link: "/" },
];

export const Navigation = ({ font }) => {
  const bebas = font.className;
  const [hovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  const pathname = usePathname();

  const variants = {
    open: {
      width: 480,
      height: 650,
      right: "-25px",
      top: "-25px",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      right: "0px",
      top: "0px",
      transition: { duration: 0.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
    },
    enter: (index) => ({
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    exit: {
      opacity: 0,
    },
  };
  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + index * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    exit: {
      opacity: 0,
    },
  };

  const playAudio = () => {
    const audio = new Audio("click.mp3"); // Replace with the path to your hover MP3 file
    audio.play();
  };

  const stopAudio = () => {
    const audio = new Audio("click.mp3"); // Replace with the path to your hover MP3 file
    audio.pause();
    audio.currentTime = 0; // Reset audio to start
  };

  return (
    <div className={"fixed z-50 w-full"}>
      <div className="flex justify-between px-10 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`${bebas} min-w-[8rem] cursor-pointer text-6xl`}
        >
          X4
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={"relative"}
        >
          <motion.div
            className={
              "menu absolute right-0 top-0 z-50 rounded-2xl bg-green-300"
            }
            variants={variants}
            initial={"closed"}
            animate={isActive ? "open" : "closed"}
          >
            <AnimatePresence>
              {isActive && (
                <nav
                  className={
                    "box-border flex h-full flex-col justify-between pb-[50px] pl-[40px] pr-[40px] pt-[120px]"
                  }
                >
                  <ul className={"flex flex-col gap-5 text-black"}>
                    {navData.map((item, index) => (
                      <div key={index} className={"perspective-[120px]"}>
                        <motion.li
                          className={`text-5xl font-medium ${
                            pathname === item.link ? "ml-10 list-disc" : ""
                          } hover:underline`}
                          custom={index}
                          variants={perspective}
                          animate={"enter"}
                          exit={"exit"}
                          initial={"initial"}
                        >
                          <Link href={item.link}>{item.title}</Link>
                        </motion.li>
                      </div>
                    ))}
                  </ul>

                  <div className={"flex flex-wrap pt-10 text-black"}>
                    {footerData.map((item, index) => (
                      <motion.a
                        href={item.link}
                        key={index}
                        variants={slideIn}
                        custom={index}
                        animate={"enter"}
                        exit={"exit"}
                        initial={"initial"}
                        className={"link w-1/2 pt-2"}
                      >
                        {item.title}
                      </motion.a>
                    ))}
                  </div>
                </nav>
              )}
            </AnimatePresence>
            <button
              onClick={() => setActive(!isActive)}
              className={`${
                isActive
                  ? "mr-[25px] mt-[25px] border-2 border-black bg-transparent text-black"
                  : "bg-yellow m-0 text-black"
              }
                              absolute right-0 top-0 h-[40px] w-[100px] rounded-2xl
                              text-sm font-medium transition-all duration-100`}
            >
              {isActive ? "CLOSE" : "MENU"}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
