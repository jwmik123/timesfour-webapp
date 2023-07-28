"use client";
import { useState } from "react";

export const Navigation = ({ font }) => {
  const bebas = font.className;
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="flex justify-between mx-10 my-10">
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
        <li className="">Oplossingen</li>
        <li className="">Over ons</li>
      </ul>

      <button className="px-6 py-2 text-white bg-yellow-400 rounded-md">
        Contact
      </button>
    </nav>
  );
};
