import React from "react";
import Counter from "./counter";
import { PiUsersThree } from "react-icons/pi";

export default function InfoBadge({ className }: { className: string }) {
  return (
    <div className={`${className}`}>
      <div className="absolute w-[150px] h-[150px] bg-primary02 rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-[150px] h-[150px] bg-primary01 rounded-full"></div>
      <div className="max-w-[343px] w-[100%] h-[163px] backdrop-blur-md border-2 rounded-[25px] m-auto mt-8 flex justify-center items-center">
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
  );
}
