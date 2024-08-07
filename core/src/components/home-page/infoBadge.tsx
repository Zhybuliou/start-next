import React from "react";
import Counter from "./counter";
import { PiUsersThree } from "react-icons/pi";

export default function InfoBadge({ className }: { className: string }) {
  return (
    <div className={`${className}`}>
      <div className="relative h-[100%] w-[100%] flex justify-center z-0">
      <div className="absolute left-0 top-0 w-[150px] h-[150px] bg-primary02 rounded-full z-0"></div>
      <div className="absolute right-0 bottom-0 w-[150px] h-[150px] bg-primary01 rounded-full z-0"></div>
      <div className="max-w-[343px] w-[100%] h-[163px] backdrop-blur-md border-2 rounded-[25px] m-auto flex justify-center items-center z-20 ">
        <PiUsersThree className="text-[110px] mr-4" />
        <div className="w-[150px]">
          <Counter
            start={0}
            end={1500}
            duration={30}
            className="text-heading-02"
          />
          <p className="text-paragraph">Satisfied Clients</p>
        </div>
      </div>
      </div>
    </div>
  );
}
