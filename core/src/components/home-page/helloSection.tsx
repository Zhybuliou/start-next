"use client" 
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HelloSection() {
  return (
    <section className="h-[642px] bg-primary03 flex justify-center">
      <div className="w-[1200px] h-[100%] flex relative">
      <Image
               className="absolute top-20 lg:left-[40%] md:right-0 sm:right-0"
                src="/icons/pattern.png"
                width={320}
                height={320}
                alt="icon pattern"
              />
        <div className="w-[50%] h-[100%] flex items-center">
          <div className="w-[508px] h-[315px] flex flex-col justify-between z-10">
            <span className="w-[130px] bg-primary01 pl-4 pr-4 rounded-button uppercase text-paragraph">
            Hello’ i Am 
            </span>
            <h1 className="text-primary05 text-heading01">
              Adam Buschemia Business Consultant
            </h1>
            <p className="text-primary05 text-paragraph">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
            <Button
              className=" h-[60px] w-[210px]
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
              <p className="text-button ml-2">Book a Meeting</p>
            </Button>
          </div>
        </div>
        <div className="w-[50%] h-[100%] z-10">
        <DotLottieReact
      src="1.lottie"
      loop
      autoplay
    />
        </div>
      </div>
    </section>
  );
}
