import React from "react";
import ProjectsCard from "./projectsCard";

const dataProject = [
  { id: 1, title: "", description: "", url: "/projects/1.jpg", image: "" },
  { id: 2, title: "", description: "", url: "/projects/2.jpg", image: "" },
  { id: 3, title: "", description: "", url: "/projects/3.jpg", image: "" },
  { id: 4, title: "", description: "", url: "/projects/4.jpg", image: "" },
  { id: 5, title: "", description: "", url: "/projects/5.jpg", image: "" },
  { id: 6, title: "", description: "", url: "/projects/6.jpg", image: "" },
  { id: 7, title: "", description: "", url: "/projects/7.jpg", image: "" },
  { id: 8, title: "", description: "", url: "/projects/8.jpg", image: "" },
];

export default function ProjectsCards() {
  return (
    <div className="flex mt-[20px] flex-wrap justify-center">
      {dataProject.map((el) => (
        <ProjectsCard url={el.url} key={el.id} />
      ))}
    </div>
  );
}
