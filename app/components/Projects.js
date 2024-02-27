"use client";
import { useState } from "react";

export default function Projects({ font }) {
  const bebas = font.className;
  const projects = [
    {
      title: "Mik Development",
      src: "mikdevelopment.png",
      color: "orange",
    },
    {
      title: "Volume Hair Plus",
      src: "volumehair.png",
      color: "blue",
    },
    {
      title: "VitalSelect",
      src: "vitalselect.png",
      color: "green",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="divide-spruce border-spruce mt-10 divide-y-2 border-y-2">
      {projects.map((project, index) => {
        return (
          <Project
            font={bebas}
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        );
      })}
    </div>
  );
}

const Project = ({ title, index, setModal, font }) => {
  return (
    <div className="group relative flex w-full transform cursor-pointer items-center justify-between overflow-hidden px-16 py-24 duration-500 hover:px-12">
      <h2 className={`text-8xl ${font}`}>{title}</h2>
      <span>Design &amp; development</span>
      <div className="absolute -z-10 h-full w-full transform bg-red-500"></div>
    </div>
  );
};
