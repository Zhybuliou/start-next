import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-primary03 bg-my_bg_dots bg-repeat flex justify-center">
      <div className="max-w-[1200px] w-[100%] h-[100%] flex items-center flex-col pt-4 pb-3 pl-4 pr-4">
        <div className=" w-[100%] flex flex-wrap">
          <div className="xl:max-w-[240px] w-[100%] xl:h-[200px] xl:border-r-2 xl:border-opacity-25 xl:border-primary04 xl:block flex justify-center flex-col items-center">
            <div className="text-heading-05 text-primary05">Logo</div>
            <div className="text-primary05">social link</div>
          </div>
          <div className="flex max-w-[800px] w-[100%] text-primary04 ml-10 justify-between flex-wrap">
            <div className="max-w-[240px]">
              <h5 className="text-button">Product</h5>
              <div className="h-[3px] w-[40px] bg-primary01 rounded-lg"></div>
              <ul className="text-primary05 text-paragraph list-disc p-4">
                <li>Service</li>
                <li>FAQ</li>
                <li>Single Service</li>
                <li>Get Quote</li>
                <li>Prices</li>
              </ul>
            </div>
            <div className="max-w-[240px]">
              <h5 className="text-button">Service</h5>
              <div className="h-[3px] w-[40px] bg-primary01 rounded-lg"></div>
              <ul className="text-primary05 text-paragraph list-disc p-4">
                <li>Service</li>
                <li>FAQ</li>
                <li>Single Service</li>
                <li>Get Quote</li>
                <li>Prices</li>
              </ul>
            </div>
            <div className="max-w-[240px]">
              <h5 className="text-button">Address</h5>
              <div className="h-[3px] w-[40px] bg-primary01 rounded-lg"></div>
              <p className="p-3">
                1700 W Blancke St, kiyev port south USA, America
              </p>
              <div className="flex mt-3">
                <Link
                  className="bg-primary04 rounded-full inline-flex pl-[10px] pr-[10px] pt-2 pb-2"
                  href="/"
                >
                  <p className="text-button text-primary03 ">
                    Book an Appoinment
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-[100%] border-t-2 border-opacity-25 border-primary04 flex text-primary05 justify-center sm:text-paragraph text-xs pt-2 flex-wrap">
          <p>©2022 Company. All rights reserved</p>
          <span className="mr-1 ml-1"> | </span>
          <p>Terms of Service</p>
          <span className="mr-1 ml-1"> | </span>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
