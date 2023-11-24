"use client";
import { useLayoutEffect, useRef } from "react";
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
        start: "top center",
        end: "bottom bottom",
      },
    });
    timeline
      .fromTo(videoRef.current, {
        width: "100%",
        borderRadius: "0",
        ease: "power1.out",
      },{
        width: "70%",
        borderRadius: "25px",
      })
  }, []);

  return (
    <div
      ref={outerRef}
      className="relative flex items-center justify-center w-full overflow-hidden aspect-video"
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
        <source src="https://mik-development.s3.eu-central-1.amazonaws.com/placeholder-x4+(1080p).mp4" />
      </video>
    </div>
  );
}
