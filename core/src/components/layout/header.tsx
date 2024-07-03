import React from "react";
import Navbar from "../navBar";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-[100px] flex justify-center items-center ">
      <div className="h-[60px] w-[1200px] flex items-center justify-between">
        <div className="w-[182px] text-heading-05">Logo</div>
        <Navbar />
        <Button
          className="w-[235px] h-[60px]
         bg-primary04 text-primary03 
         hover:text-primary05
         rounded-full flex justify-between pl-[10px]"
        >
          <Image
            src="/icons/tel.png"
            width={45}
            height={45}
            alt="icon telephone"
          />
          <p className="text-button">+ (888) 452 1505</p>
        </Button>
      </div>
    </div>
  );
}
