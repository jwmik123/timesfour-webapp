"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function VideoPlayer() {
  const soundRef = useRef(null);
  const outerRef = useRef(null);
  const [soundPos, setSoundPos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  //   useEffect(() => {
  //     gsap.to(soundRef.current, {
  //       duration: 0.5,
  //       left: soundPos.x,
  //       top: soundPos.y,
  //       ease: "power1.out",
  //     });
  //   }, [soundPos]);

  //   useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       setSoundPos({
  //         x: e.clientX,
  //         y: e.clientY,
  //       });
  //     };

  //     outerRef.current.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       outerRef.current.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  return (
    <div
      ref={outerRef}
      className="relative flex items-center justify-center w-full overflow-hidden"
    >
      <span
        ref={soundRef}
        style={{ position: "absolute", left: soundPos.x, top: soundPos.y }}
        className="flex items-center justify-center w-24 h-24 bg-black rounded-full cursor-pointer "
      >
        <svg
          width="22"
          height="32"
          viewBox="0 0 22 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 1C19.1667 5.83335 26.4 18.6 14 31"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M8 7C11.1667 9.66673 15.6 17.0001 8 25"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M1 13C3.26387 14.3334 6.43329 17.6001 1 20"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <div className="absolute w-full bg-black opacity-20 aspect-video"></div>
      <video className="w-full aspect-video" autoPlay loop muted playsInline>
        <source src="https://mik-development.s3.eu-central-1.amazonaws.com/murseeheader.mp4" />
      </video>
    </div>
  );
}
