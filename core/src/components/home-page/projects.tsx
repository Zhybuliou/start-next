import Link from "next/link";
import React from "react";
import ProjectsCards from "./projectsCards";

export default function Projects() {
  return (
    <div className="bg-primary03 mt-[80px] pb-[40px] bg-my_bg_dots bg-repeat flex justify-center">
      <div className="w-[1200px] h-[100%] relative">
        <div className="flex h-[60px] justify-between w-[100%] mt-[80px] items-center">
          <div>
            <span className="w-[130px] bg-primary02 pl-4 pr-4 rounded-button uppercase text-paragraph">
              Work
            </span>
            <h3 className="text-heading-03 text-primary05">
              My latest project
            </h3>
          </div>
          <div>
            <Link
              className="bg-primary01 rounded-full inline-flex justify-between pl-[10px] pr-[10px] pt-2 pb-2"
              href="/"
            >
              <p className="text-button text-primary03 ">More works</p>
            </Link>
          </div>
        </div>
        <ProjectsCards />
      </div>
    </div>
  );
}
