"use client";
import { useState, useEffect } from "react";
import { sanityFetch } from "../sanity/client";
import Modal from "./modal";

const EVENTS_QUERY =
  '*[_type == "event"]{_id, name, slug, date}|order(date desc)';

export default function Projects({ font }) {
  const [events, setEvents] = useState([]);
  const bebas = font.className;

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await sanityFetch({ query: EVENTS_QUERY });
      setEvents(fetchedEvents);
    };

    fetchEvents();
  }, []);

  const projects = [
    {
      title: "Mik Development",
      src: "mikdevelopment.png",
      color: "black",
    },
    {
      title: "Volume Hair Plus",
      src: "volumehair.png",
      color: "black",
    },
    {
      title: "VitalSelect",
      src: "vitalselect.png",
      color: "black",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="relative flex flex-col projects">
      <div className="mt-10 divide-y-2 divide-spruce border-spruce border-y-2">
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
      <Modal modal={modal} projects={projects} />
    </section>
  );
}

const Project = ({ title, index, setModal }) => {
  return (
    <div
      className="relative flex items-center justify-between w-full px-16 py-16 overflow-hidden duration-500 transform cursor-pointer group hover:px-12"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h2 className={`text-7xl font-rift font-bold`}>{title}</h2>
      <span>Design &amp; development</span>
    </div>
  );
};
