import React from "react";
import Image from "next/image";
import Link from "next/link";
import PriceCardLi from "./priceCardLi";

type CardData = {
    id: number;
    text: string[];
}

export default function PriceCard({values}:{values: CardData}) {
    const {id, text} = values
  return (
    <div className="w-[320px] h-[580px] bg-white shadow-xl rounded-[20px] ml-2 mr-2 p-4">
      <div className="h-[234px] bg-primary03 rounded-[20px] relative overflow-hidden p-6">
        <Image
          className="absolute right-6 top-[-30px]"
          src={"/icons/Pattern.png"}
          width={100}
          height={100}
          alt="golden dot"
        />
        <h4 className="text-primary05 text-heading-05">Basic Plan</h4>
        <p className="text-primary05 text-paragraph pb-2 border-dotted border-b-2 border-gray-500">
          The argument in favor of using to filler text goes something.
        </p>
        <div className="flex items-center mt-5">
          <h4 className="text-heading-02 text-primary04">$1455</h4>
          <span className="h-[24px] bg-primary02 text-primary04 pl-2 pr-2 rounded-button uppercase text-paragraph ml-3">
            Monthly
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[300px]">
      <ul className=" p-4">
        {text.map((el, i) => <PriceCardLi text={el} key={i} />)}
      </ul>
      <div className="flex justify-center">
        <Link
          className="bg-primary01 rounded-full inline-flex justify-between pl-[70px] pr-[70px] pt-2 pb-2"
          href="/"
        >
          <p className="text-button text-primary03 ">Get This Plan</p>
        </Link>
      </div>
      </div>
    </div>
  );
}
