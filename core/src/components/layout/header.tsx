"use client";
import React from "react";
import Navbar from "../navBar";
import { Button } from "../ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Burger from "../home-page/burger";
import LangBar from "../langBar";

export default function Header() {
  return (
    <div className="min-h-[100px] flex justify-center items-center">
      <div className="min-h-[60px] max-w-[1200px] w-[100%] flex items-center justify-between flex-wrap p-2 pr-5">
        <div className="w-[182px] text-heading-05">Logo</div>
        <Navbar />
        <LangBar />
        <Burger />
        <Button
          className="lg:flex hidden w-[235px] h-[60px]
         bg-primary04 text-primary03 
         hover:bg-primary01
         transition-color duration-300 ease-in-out	
         rounded-full justify-between pl-[10px]"
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
