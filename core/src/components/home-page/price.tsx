import React from "react";
import PriceCards from "./priceCards";

export default function Price() {
  return (
    <div className="bg-primary04 flex justify-center">
      <div className="max-w-[1200px] w-[100%] mb-[40px]">
        <div className="w-[100%] mt-[40px] text-center">
          <span className="w-[130px] bg-primary02 pl-4 pr-4 rounded-button uppercase text-paragraph">
            Pricing
          </span>
          <h3 className="text-heading-03">Our Pricing Plan</h3>
        </div>
        <PriceCards />
      </div>
    </div>
  );
}
