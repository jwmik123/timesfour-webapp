import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  let marqueeRef = useRef(null);

  useEffect(() => {
    if (marqueeRef.current) {
      let direction = 1;

      const roll1 = roll(".marquee-inner-wrap", { duration: 12 }, false), // Added the third parameter `reverse`
        scroll = ScrollTrigger.create({
          trigger: marqueeRef.current, // Changed the trigger
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              roll1.timeScale(direction); // Used the `timeScale()` method on the timeline
            }
            self.direction === -1
              ? marqueeRef.current.classList.remove("flipped")
              : marqueeRef.current.classList.add("flipped");
          },
        });

      function roll(targets, vars, reverse) {
        vars = vars || {};
        vars.ease || (vars.ease = "none");
        const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() {
              this.totalTime(this.rawTime() + this.duration() * 10);
            },
          }),
          elements = gsap.utils.toArray(targets),
          clones = elements.map((el) => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () =>
            elements.forEach((el, i) =>
              gsap.set(clones[i], {
                position: "absolute",
                overwrite: false,
                top: el.offsetTop,
                left:
                  el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
              })
            );
        positionClones();
        elements.forEach((el, i) =>
          tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
        );
        window.addEventListener("resize", () => {
          let time = tl.totalTime();
          tl.totalTime(0);
          positionClones();
          tl.totalTime(time);
        });
        return tl;
      }
    }
  }, []);

  return (
    <div
      className={`relative flex overflow-auto rounded-xl text-6xl text-black bg-yellow-400 marquee ${bebas.className}`}
      ref={marqueeRef}
    >
      <ul className="relative flex items-center marquee-inner-wrap">
        <li class="single-marquee-part flex relative items-center">
          <h3 class="big whitespace-nowrap py-5 ml-5 flex items-center bottom-0 gap-5">
            Film Times four
            <svg
              width="24"
              height="24"
              viewBox="0 0 290 290"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="145"
                cy="145"
                r="135"
                stroke="#1B1B1B"
                stroke-width="20"
              />
              <path
                d="M139 97L120.7 148.45L141.25 202H123.25L110.2 163.6L97.9 202H80.2L100.75 148.45L81.85 97H99.85L110.95 132.1L121.3 97H139ZM190.428 97V163.15H197.928V177.85H190.428V202H173.628V177.85H143.628V162.7L167.928 97H190.428ZM173.628 113.8L156.828 163.15H173.628V113.8Z"
                fill="#1B1B1B"
              />
            </svg>
          </h3>
        </li>
        <li class="single-marquee-part flex relative items-center">
          <h3 class="big whitespace-nowrap py-5 ml-5 flex items-center gap-5">
            Marketing Times four
            <svg
              width="24"
              height="24"
              viewBox="0 0 290 290"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="145"
                cy="145"
                r="135"
                stroke="#1B1B1B"
                stroke-width="20"
              />
              <path
                d="M139 97L120.7 148.45L141.25 202H123.25L110.2 163.6L97.9 202H80.2L100.75 148.45L81.85 97H99.85L110.95 132.1L121.3 97H139ZM190.428 97V163.15H197.928V177.85H190.428V202H173.628V177.85H143.628V162.7L167.928 97H190.428ZM173.628 113.8L156.828 163.15H173.628V113.8Z"
                fill="#1B1B1B"
              />
            </svg>
          </h3>
        </li>
        <li class="single-marquee-part flex relative items-center">
          <h3 class="big whitespace-nowrap py-5 ml-5 flex items-center gap-5">
            Development Times four
            <svg
              width="24"
              height="24"
              viewBox="0 0 290 290"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="145"
                cy="145"
                r="135"
                stroke="#1B1B1B"
                stroke-width="20"
              />
              <path
                d="M139 97L120.7 148.45L141.25 202H123.25L110.2 163.6L97.9 202H80.2L100.75 148.45L81.85 97H99.85L110.95 132.1L121.3 97H139ZM190.428 97V163.15H197.928V177.85H190.428V202H173.628V177.85H143.628V162.7L167.928 97H190.428ZM173.628 113.8L156.828 163.15H173.628V113.8Z"
                fill="#1B1B1B"
              />
            </svg>
          </h3>
        </li>
        <li class="single-marquee-part flex relative items-center">
          <h3 class="big whitespace-nowrap py-5 ml-5 flex items-center gap-5">
            Design Times four
            <svg
              width="24"
              height="24"
              viewBox="0 0 290 290"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="145"
                cy="145"
                r="135"
                stroke="#1B1B1B"
                stroke-width="20"
              />
              <path
                d="M139 97L120.7 148.45L141.25 202H123.25L110.2 163.6L97.9 202H80.2L100.75 148.45L81.85 97H99.85L110.95 132.1L121.3 97H139ZM190.428 97V163.15H197.928V177.85H190.428V202H173.628V177.85H143.628V162.7L167.928 97H190.428ZM173.628 113.8L156.828 163.15H173.628V113.8Z"
                fill="#1B1B1B"
              />
            </svg>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Marquee;