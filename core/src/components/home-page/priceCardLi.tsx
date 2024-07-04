import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PriceCardLi({ text }: { text: string }) {
  return (
    <li className="flex items-center mb-2">
      <FaCheckCircle className="text-primary02 text-heading-06" />
      <p className="ml-[10px] text-paragraph">{text}</p>
    </li>
  );
}
