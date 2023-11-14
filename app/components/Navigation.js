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

      <div className="flex items-center justify-between">
        <span>A Creative Studio.</span>
      </div>

      <button className="px-12 py-2 text-white transition-colors border border-white rounded-full hover:bg-white hover:text-black">
        Menu
      </button>
    </nav>
  );
};
