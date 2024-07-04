"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import InfoBadge from "./infoBadge";

export default function AboutUs() {
  return (
    <section className="flex justify-center">
      <div className="w-[1200px] mt-[100px] flex">
        <div className="w-[40%]">
          <span className="w-[130px] bg-primary01 pl-4 pr-4 rounded-button uppercase text-paragraph">
            About Me
          </span>
          <h3 className="text-heading-02">About our Consuting Agency Team</h3>
          <p className="text-paragraph text-primary02 mt-[20px]">
            We create experiences and build products that make business grow
          </p>
          <p className="text-paragraph text-primary03 mt-[20px]">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <div className="mt-[58px]">
            <Link
              href="/"
              className="flex items-center border-t-2 border-gray-400 pt-4 pb-4"
            >
              <div className="h-[50px] w-[50px] rounded-full bg-[#fff3d6]">
                <DotLottieReact src="mail.lottie" loop autoplay />
              </div>
              <p className="text-button ml-2">Buschemia@gmailcom</p>
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="flex items-center border-t-2 border-gray-400 pt-4 pb-4"
            >
              <div className="h-[50px] w-[50px] p-2 rounded-full bg-[#e2f4e2]">
                <DotLottieReact
                  src="7.lottie"
                  loop
                  autoplay
                  style={{ opacity: 0.5 }}
                />
              </div>
              <p className="text-button ml-2">+(001) 5648 6584</p>
            </Link>
          </div>
          <Link
            className="
         mt-4
         bg-primary03 text-primary05 
         hover:text-primary05
         rounded-full inline-flex justify-between pl-[10px] pr-[10px] pt-2 pb-2"
            href="/"
          >
            <p className="text-button ">Make An Appointment</p>
          </Link>
        </div>
        <div className="w-[60%] relative">
          <Image
            className="absolute left-4 bottom-0 z-0"
            src="/icons/pattern.png"
            width={300}
            height={300}
            alt="icon pattern"
          />
          <div className="z-10 relative top-10 h-[600px]">
            <DotLottieReact src="e1.lottie" loop autoplay />
          </div>
          <InfoBadge className="absolute top-0 right-0 w-[447px] h-[258px]" />
        </div>
      </div>
    </section>
  );
}
