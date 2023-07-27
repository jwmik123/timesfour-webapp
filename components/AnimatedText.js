"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = Array.from(textRef.current.children);
    chars.forEach((char) => {
      gsap.set(char, { opacity: 0 });
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
        scrollTimeline.staggerTo(chars, 0.9, { opacity: 1 }, 0.04);
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
};

export default AnimatedText;
