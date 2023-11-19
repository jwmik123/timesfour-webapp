"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navData = [
    {title: "Home", link: "/"},
    {title: "Projecten", link: "/projects"},
    {title: "Agency", link: "/about"},
    {title: "Vacatures", link: "/vacancies"},
    {title: "Contact", link: "/contact"},
]
const footerData = [
    {title: "Instagram", link: "/"},
    {title: "LinkedIn", link: "/"},
    {title: "TikTok", link: "/"},
    {title: "Twitter", link: "/"},
]

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
        transition: {duration: .5, ease: [.76,0,.24,1]}
    },
    closed: {
        width: 100,
        height: 40,
        right: "0px",
        top: "0px",
        transition: {duration: .5, delay: .35, ease: [.76,0,.24,1]}
    }
  }
  const perspective = {
        initial: {
            opacity: 0,
            rotateX: 90,
        },
      enter: (index) => ({
          opacity: 1,
          rotateX: 0,
          transition: {delay: .3 + (index *.1), duration: .5, ease: [.76,0,.24,1]}
      }),
      exit: {
            opacity: 0,
      }
  }
  const slideIn = {
        initial: {
            opacity: 0,
            y: 20,
        },
        enter: (index) => ({
            opacity: 1,
            y:0,
            transition: {delay: .3 + (index *.1), duration: .5, ease: [.76,0,.24,1]}
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
                      <AnimatePresence>
                      {isActive &&
                          <nav className={"h-full pt-[120px] pl-[40px] pb-[50px] pr-[40px] box-border flex flex-col justify-between"}>
                              <ul className={"text-black flex flex-col gap-5"}>
                                  {navData.map((item, index) => (
                                      <div key={index} className={"perspective-[120px]"}>
                                          <motion.li
                                              className={`text-5xl font-medium ${pathname === item.link ? "ml-10 list-disc" : ""}`}
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

                              <div className={"text-black flex flex-wrap pt-10"}>
                                  {footerData.map((item, index) => (
                                        <motion.a
                                            href={item.link}
                                            key={index}
                                            variants={slideIn}
                                            custom={index}
                                            animate={"enter"}
                                            exit={"exit"}
                                            initial={"initial"}
                                            className={"w-1/2 pt-2 link"}
                                        >
                                            {item.title}
                                        </motion.a>
                                  ))}
                              </div>
                          </nav>
                      }
                      </AnimatePresence>
                      <button
                          onClick={() => setActive(!isActive)}
                          className={`absolute font-medium
                            ${isActive ? "mr-[25px] mt-[25px] bg-transparent text-black border-2 border-black" : "m-0 bg-yellow text-black"} 
                            top-0 right-0 w-[100px] h-[40px] text-sm rounded-2xl transition-all duration-100`}>
                          {isActive ? "CLOSE" : "MENU"}
                      </button>
                  </motion.div>

              </div>
          </div>
      </div>
  );
};
