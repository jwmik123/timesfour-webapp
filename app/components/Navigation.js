"use client";
import Link from "next/link";
import { useState } from "react";
import {motion} from "framer-motion";

const navData = [
    {title: "Home", link: "/"},
    {title: "Projecten", link: "/projects"},
    {title: "Over X4", link: "/about"},
    {title: "Contact", link: "/contact"},
]

export const Navigation = ({ font }) => {
  const bebas = font.className;
  const [hovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);

  const variants = {
    open: {
        width: 480,
        height: 650,
        right: "-25px",
        top: "-25px",
        transition: {duration: .5, ease: [.76,0,.24,1]}
    },
    closed: {
        width: 100,
        height: 40,
        right: "0px",
        top: "0px",
        transition: {duration: .5, ease: [.76,0,.24,1]}
    }
  }

  const perspective = {
        initial: {
            opacity: 0,
        },
      enter: (index) => ({
            opacity: 1,
          transition: {delay: .5 + index *.1}
      }),
      exit: {
            opacity: 0,
      }
  }

  return (
      <div className={"fixed w-full z-50"}>
          <div className="flex justify-between py-10 px-10">
              <span
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`${bebas} text-4xl min-w-[8rem] cursor-pointer`}
              >
                {hovered ? "Times Four" : "X4"}
              </span>
              <div className="absolute left-[45%] lg:top-[50%] md:top-[50%] flex items-center justify-between">
                  <span>A Creative Studio.</span>
              </div>
              <div className={"relative"}>
                  <motion.div
                      className={"menu bg-yellow-400 rounded-2xl absolute top-0 right-0 z-50"}
                      variants={variants}
                      initial={"closed"}
                      animate={isActive ? "open" : "closed"}>
                      {isActive &&
                          <nav className={"h-full pt-[100px] pl-[40px] pb-[50px] pr-[40px] box-border"}>
                              <ul className={"text-black flex flex-col gap-5"}>
                                  {navData.map((item, index) => (
                                      <motion.li
                                          key={index}
                                          className={"text-5xl font-medium"}
                                          custom={index}
                                          variants={perspective}
                                          animate={"enter"}
                                          exit={"exit"}
                                          initial={"initial"}
                                      >
                                          <Link href={item.link}>{item.title}</Link>
                                      </motion.li>
                                  ))}
                              </ul>
                          </nav>
                      }
                      <button
                          onClick={() => setActive(!isActive)}
                          className={`absolute font-medium ${isActive ? "mr-[25px] mt-[25px] bg-white text-black" : "m-0 bg-yellow text-black"} top-0 right-0 w-[100px] h-[40px] text-sm rounded-2xl
                                transition-all duration-100`}>
                          {isActive ? "CLOSE" : "MENU"}
                      </button>
                  </motion.div>
              </div>
          </div>
      </div>
  );
};
