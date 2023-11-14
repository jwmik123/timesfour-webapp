"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoPlayer() {
  const outerRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: outerRef.current,
        scrub: true,
        start: "top 100%",
        end: "bottom 60%",
      },
    });
    timeline
      .from(videoRef.current, {
        clipPath: "inset(100%)",
        ease: "power1.out",
        duration: 2,
      })
      .to(videoRef.current, { clipPath: "inset(0%)" });
  }, []);

  return (
    <div
      ref={outerRef}
      className="relative flex items-center justify-center w-full overflow-hidden"
    >
      <div className="absolute z-10 w-full bg-black opacity-0 aspect-video"></div>
      <video
        ref={videoRef}
        className="w-full aspect-video"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* <source src="https://mik-development.s3.eu-central-1.amazonaws.com/murseeheader.mp4" /> */}
        <source src="https://mik-development.s3.eu-central-1.amazonaws.com/placeholder-x4+(1080p).mp4" />
      </video>
    </div>
  );
}
