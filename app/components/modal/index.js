import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const projectsSection = document.querySelector(".projects");

    const moveContainer = (e) => {
      if (!projectsSection) return;

      const sectionRect = projectsSection.getBoundingClientRect();
      const { clientX, clientY } = e;

      // Adjust positions relative to the projects section
      const adjustedX = clientX - sectionRect.left;
      const adjustedY = clientY - sectionRect.top;

      gsap.to(container.current, {
        left: adjustedX + "px",
        top: adjustedY + "px",
        duration: 0.8,
        ease: "power3",
      });
      gsap.to(cursor.current, {
        left: adjustedX + "px",
        top: adjustedY + "px",
        duration: 0.5,
        ease: "power3",
      });
      gsap.to(cursorLabel.current, {
        left: adjustedX + "px",
        top: adjustedY + "px",
        duration: 0.45,
        ease: "power3",
      });
    };

    projectsSection.addEventListener("mousemove", moveContainer);

    return () => {
      if (projectsSection) {
        projectsSection.removeEventListener("mousemove", moveContainer);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="h-[350px] w-[350px] rounded-xl flex items-center justify-center absolute z-10 overflow-hidden pointer-events-none"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="absolute w-full h-full modalSlider"
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${index}`}
                style={{ backgroundColor: color }}
                className="flex items-center justify-center h-[100%]"
              >
                <Image
                  src={`/${src}`}
                  width={350}
                  height={0}
                  layout="cover"
                  alt="image"
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="z-20 w-[80px] h-[80px] bg-spruce absolute pointer-events-none rounded-full flex items-center justify-center"
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "closed"}
        className="z-20 w-[80px] h-[80px] bg-transparent absolute pointer-events-none rounded-full flex items-center justify-center text-white"
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
