"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/css";

import MikDevelopment from "../../public/mikdevelopment.png";
import VolumeHair from "../../public/volumehair.png";
import VitalSelect from "../../public/vitalselect.png";

gsap.registerPlugin(ScrollTrigger);

export default function Carousel() {
  useEffect(() => {
    gsap.utils.toArray(".slide-image").forEach((el, index) => {
      gsap.fromTo(
        el,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(100% at 50% 50%)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
          },
          delay: index * 0.5 + 0.5,
          duration: 0.8,
        }
      );
    });

    gsap.utils.toArray(".slide-container").forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
          },
          delay: index * 0.5,
          duration: 0.3,
        }
      );
    });
  }, []);
  //TODO: Images should be fetched from the backend
  return (
    <div className="relative w-full">
      <Swiper
        direction={"horizontal"}
        spaceBetween={50}
        slidesPerView={2.5}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="my-20 cursor-grab"
      >
        <SwiperSlide>
          <div className="overflow-hidden bg-yellow-400 rounded h-96 slide-container">
            <Image
              src={MikDevelopment}
              className="object-cover w-full h-full slide-image"
              alt="Mik Development"
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden bg-yellow-400 rounded h-96 slide-container">
            <Image
              src={VolumeHair}
              className="object-cover w-full h-full slide-image"
              alt="Mik Development"
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden bg-yellow-400 rounded h-96 slide-container">
            <Image
              src={VitalSelect}
              className="object-cover w-full h-full slide-image"
              alt="Mik Development"
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden bg-yellow-400 rounded h-96 slide-container">
            <Image
              src={MikDevelopment}
              className="object-cover w-full h-full slide-image"
              alt="Mik Development"
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
