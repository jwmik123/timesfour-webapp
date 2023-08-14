"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const phrase =
//   "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);
  useEffect(() => {
    const chars = Array.from(textRef.current.children);
    chars.forEach((char) => {
      gsap.set(char, { opacity: 0.2 });
    });
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
        scrollTimeline.staggerTo(chars, 0.1, { opacity: 0.9 }, 0.05);
      }
    });
    observer.observe(textRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <p className="text-[4rem] leading-[4rem] tracking-tight" ref={textRef}>
      {Array.from(text).map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </p>
  );
  // let refs = useRef([]);
  // const body = useRef(null);
  // const container = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   createAnimation();
  // }, []);

  // const createAnimation = () => {
  //   gsap.to(refs.current, {
  //     scrollTrigger: {
  //       trigger: container.current,
  //       scrub: true,
  //       start: "top",
  //       end: `+=${window.innerHeight / 1.5}`,
  //     },
  //     opacity: 0,
  //     stagger: 0.1,
  //     ease: "none",
  //   });
  // };

  // const splitWords = (phrase) => {
  //   let body = [];
  //   phrase.split(" ").forEach((word, i) => {
  //     const letters = splitLetters(word);
  //     body.push(
  //       <p
  //         key={word + "_" + i}
  //         className="text-[4rem] leading-[4rem] tracking-tight"
  //       >
  //         {letters}
  //       </p>
  //     );
  //   });
  //   return body;
  // };

  // const splitLetters = (word) => {
  //   let letters = [];
  //   word.split("").forEach((letter, i) => {
  //     letters.push(
  //       <span
  //         key={letter + "_" + i}
  //         ref={(el) => {
  //           refs.current.push(el);
  //         }}
  //       >
  //         {letter}
  //       </span>
  //     );
  //   });
  //   return letters;
  // };

  // return (
  //   <div
  //     ref={container}
  //     className="flex h-[100vh] items-end justify-center text-white"
  //   >
  //     <div ref={body} className="animated-text w-[90%] flex flex-wrap">
  //       {splitWords(phrase)}
  //     </div>
  //   </div>
  // );
};

export default AnimatedText;
