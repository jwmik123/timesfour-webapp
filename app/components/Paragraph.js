"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Paragraph({ text, font }) {
  const cinzel = font.className;
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "end end"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="font-bebas-neue flex w-full flex-wrap text-[16vw] font-bold leading-tight tracking-tight text-green-300"
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={index}
            range={[start, end]}
            font={cinzel}
            progress={scrollYProgress}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress, font }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={`relative ${font}`}>
      <span className="absolute mr-4 opacity-5">{children}</span>
      <motion.span className="mr-4" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
