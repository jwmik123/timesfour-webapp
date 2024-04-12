"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#Laag_2 > *",
      { y: 50 },
      {
        y: 0,
        ease: "none",
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: "#Laag_2",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className="bottom-0 w-full pt-10 mt-20 bg-cutty text-tasman -z-10 rounded-2xl"
      >
        <div className="sticky">
          <div>
            <div className="flex flex-col justify-between gap-10 px-10 pt-12 pb-16 mb-10 md:gap-0 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-5 text-xl">
                  <h3 className="text-2xl">Say hi!</h3>
                  <Link
                    href="mailto:hello@timesfour.nl"
                    className="text-white link"
                  >
                    <span>hello@timesfour.nl</span>
                  </Link>
                  <Link href="tel:+31623521980" className="text-white link">
                    <span>+31 6 23521980</span>
                  </Link>
                </div>
              </div>
              <div className="flex w-full gap-20 md:w-1/3">
                <div className="flex flex-col gap-5 text-xl">
                  <h3 className="text-2xl">Socials</h3>
                  <ul className="flex flex-col gap-4 text-tasman">
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="relative block text-white link"
                      >
                        <span alt="ig">Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="relative block text-white link nav-link"
                      >
                        <span alt="li">LinkedIn</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="relative block text-white link nav-link"
                      >
                        <span alt="tt">Tiktok</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex w-full gap-10 md:w-1/2">
                  <div className="flex flex-col gap-5 text-xl">
                    <h3 className="text-2xl ">Legal</h3>
                    <ul className="flex flex-col gap-4 text-tasman">
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="relative block text-white link"
                        >
                          <span alt="Privacy Policy">Privacy Policy</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="relative block text-white link nav-link"
                        >
                          <span alt="Terms &amp; Conditions">
                            Terms &amp; Conditions
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <span className="footer-text">
              <svg
                id="Laag_2"
                data-name="Laag 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 763.79 100.31"
                fill="#cad2c5"
              >
                <polygon
                  className="cls-1"
                  points="46.6 22.09 70 22.09 70 1.69 0 1.69 0 22.09 23.4 22.09 23.4 100.31 46.6 100.31 46.6 22.09"
                />
                <rect
                  className="cls-1"
                  x="82.8"
                  y="1.6"
                  width="23.2"
                  height="98.71"
                />
                <polygon
                  className="cls-1"
                  points="148.4 56 162.67 100.31 189.13 100.31 203.4 56 203.4 100.31 225.8 100.31 225.8 1.6 203 1.6 175.8 83 148.8 1.6 126.8 1.6 126.8 100.31 148.4 100.31 148.4 56"
                />
                <polygon
                  className="cls-1"
                  points="269 80.8 301 80.8 301 60.4 269 60.4 269 22 307.19 22 307.19 1.6 245.8 1.6 245.8 100.31 269 100.31 269 80.8"
                />
                <g>
                  <rect
                    className="cls-1"
                    x="320.2"
                    y="89.6"
                    width="22.8"
                    height="10.71"
                  />
                  <path
                    className="cls-1"
                    d="m389.8,93.8c0-15-8-21.2-21.4-28.8l-16.4-9.2c-6.6-3.8-9-7-9-14.2v-9.6c0-8.8,5-12,11.8-12s11.8,3.2,11.8,12v19.6h22.8v-22.8c0-20.8-15.2-28.8-34.4-28.8h-.4c-19.2,0-34.4,8-34.4,28.8v18.4c0,14.6,7.8,21,21.4,28.8l16.2,9.2c7,3.8,9.2,7.4,9.2,14.6v.51h22.8v-6.51Z"
                  />
                </g>

                <polygon
                  className="cls-1"
                  points="461.79 81.8 492.99 81.8 492.99 61.4 461.79 61.4 461.79 22 499.19 22 499.19 1.6 438.59 1.6 438.59 100.31 461.79 100.31 461.79 81.8"
                />
                <path
                  className="cls-1"
                  d="m534.79,33.2c0-10,5.2-12.8,12.8-12.8s12.8,2.8,12.8,12.8v67.11h23.2V29.6c0-21.2-14-29.6-35.2-29.6h-1.6c-21.2,0-35.2,8.2-35.2,29.6v70.71h23.2V33.2Z"
                />
                <g>
                  <rect
                    className="cls-1"
                    x="602.39"
                    y="1.6"
                    width="23.2"
                    height="98.71"
                  />
                  <rect
                    className="cls-1"
                    x="649.59"
                    y="1.6"
                    width="23.2"
                    height="98.71"
                  />
                </g>
                <path
                  className="cls-1"
                  d="m715.59,85.8h11.6l4.63,14.51h22.87l-6.1-18.11c9.6-4.2,15.2-12.6,15.2-26v-25c0-21.2-14-29.6-35.2-29.6h-36.2v98.71h23.2v-14.51Zm0-63.8h12.2c7.6,0,12.8,2.8,12.8,12.8v18.2c0,10-5.2,12.8-12.8,12.8h-12.2V22Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
