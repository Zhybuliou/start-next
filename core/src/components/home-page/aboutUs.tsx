"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <section className="flex justify-center">
      <div className="w-[1200px] h-[660px] mt-[100px] bg-gray-300">
        <div className="w-[40%]">
          <span className="w-[130px] bg-primary01 pl-4 pr-4 rounded-button uppercase text-paragraph">
            About Me
          </span>
          <h3 className="text-heading-02">About our Consuting Agency Team</h3>
          <p className="text-paragraph text-primary02">
            We create experiences and build products that make business grow
          </p>
          <p className="text-paragraph text-primary03">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <div>
            <Link href="/">
              <div className="h-[50px] w-[50px] rounded-full bg-primary02">
              <DotLottieReact src="mail.lottie" loop autoplay />
              </div>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div className="h-[50px] w-[50px] p-2 rounded-full bg-primary02">
              <DotLottieReact src="7.lottie" loop autoplay style={{ opacity: 0.5}} />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[60%]"></div>
      </div>
    </section>
  );
}
