"use client";
import React from "react";
import Navbar from "../navBar";
import { Button } from "../ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Header() {
  return (
    <div className="h-[100px] flex justify-center items-center ">
      <div className="h-[60px] w-[1200px] flex items-center justify-between">
        <div className="w-[182px] text-heading-05">Logo</div>
        <Navbar />
        <Button
          className="w-[235px] h-[60px]
         bg-primary04 text-primary03 
         hover:bg-primary01
         transition-color duration-300 ease-in-out	
         rounded-full flex justify-between pl-[10px]"
        >
          <div className="h-[45px] w-[45px] p-2 rounded-full bg-primary01">
            <DotLottieReact
              src="7.lottie"
              loop
              autoplay
              style={{ opacity: 0.5 }}
            />
          </div>
          <p className="text-button">+ (888) 452 1505</p>
        </Button>
      </div>
    </div>
  );
}
