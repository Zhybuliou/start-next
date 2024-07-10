"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HelloSection() {
  return (
    <section className="lg:h-[642px] h-[600px] bg-primary03 bg-my_bg_dots flex lg:justify-center justify-between">
      <div className="w-[1200px] h-[100%] flex relative overflow-hidden">
        <Image
          className="absolute lg:top-20 lg:left-[40%] top-[-150px]"
          src="/icons/pattern.png"
          width={320}
          height={320}
          alt="icon pattern"
        />
        <div className="lg:w-[50%] w-[100%] h-[100%] flex items-center">
          <div className="w-[508px] h-[315px] flex flex-col justify-between z-10 ml-4">
            <span className="w-[130px] bg-primary01 pl-4 pr-4 rounded-button uppercase text-paragraph">
              Hello’ i Am
            </span>
            <h1 className="text-primary05 lg:text-heading-01 text-heading-04">
              Adam Buschemia Business Consultant
            </h1>
            <p className="text-primary05 text-paragraph">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
            <Button
              className=" h-[60px] w-[210px] mt-8
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
        <div className="w-[50%] h-[100%] z-10 lg:block hidden">
          <DotLottieReact src="1.lottie" loop autoplay />
        </div>
      </div>
    </section>
  );
}
