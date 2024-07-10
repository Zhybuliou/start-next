import Link from "next/link";
import React from "react";
import ProjectsCards from "./projectsCards";

export default function Projects() {
  return (
    <div className="bg-primary03 sm:mt-[80px] pb-[40px] bg-my_bg_dots bg-repeat flex justify-center">
      <div className="max-w-[1200px] w-[100%] h-[100%] relative pl-4 pr-4">
        <div className="flex h-[60px] justify-between w-[100%] sm:mt-[80px] mt-[40px] items-center">
          <div className="flex w-[100%] items-center justify-between">
          <div>
            <span className=" bg-primary02 pl-4 pr-4 rounded-button uppercase text-paragraph">
              Work
            </span>
            <h3 className="sm:text-heading-03 text-heading-05 text-primary05">
              My latest project
            </h3>
          </div>
          <div>
            <Link
              className="bg-primary01 rounded-full inline-flex justify-between pl-[10px] pr-[10px] pt-2 pb-2"
              href="/"
            >
              <p className="text-button text-primary03 ">More...</p>
            </Link>
          </div>
          </div>
        </div>
        <ProjectsCards />
      </div>
    </div>
  );
}
