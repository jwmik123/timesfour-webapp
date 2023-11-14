"use client";
import Link from "next/link";
import { useState } from "react";

export const Navigation = ({ font }) => {
  const bebas = font.className;
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="flex justify-between py-10 mx-10">
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${bebas} text-4xl min-w-[8rem] cursor-pointer`}
      >
        {hovered ? "Times Four" : "X4"}
      </span>

      <ul className="flex items-center justify-between gap-10 text-lg">
        <li className="">Home</li>
        <li className="">Werk</li>
        <li className="">
          <Link href="/projects/">Oplossingen</Link>
        </li>
        <li className="">Over ons</li>
      </ul>

      <button className="px-12 py-2 text-black transition-colors bg-white rounded-sm hover:bg-yellow-400">
        Contact
      </button>
    </nav>
  );
};
