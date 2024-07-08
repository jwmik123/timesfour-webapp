"use client";

export default function ProjectMobile({ font }) {
  const bebas = font.className;
  const projects = [
    {
      id: 1,
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
  return (
    <section className="relative flex flex-col projects">
      <div className="">
        {projects.map((project, index) => {
          return (
            <Project
              font={bebas}
              key={index}
              title={project.title}
              background={project.src}
            />
          );
        })}
      </div>
    </section>
  );
}

const Project = ({ title, background }) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`relative flex items-center justify-between w-full px-16 py-16 overflow-hidden duration-500 transform cursor-pointer cover group hover:px-12`}
    >
      <h2 className={`text-2xl font-rift font-bold`}>{title}</h2>
      <span>Design &amp; development</span>
    </div>
  );
};
