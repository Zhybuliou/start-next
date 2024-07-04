import React from "react";
import PriceCard from "./priceCard";

const dataPrices = [
  {
    id: 1,
    text: [
      "24/7 system monitoring",
      "Security management",
      "Secure finance backup",
      "Secure finance backup",
    ],
  },
  {
    id: 2,
    text: [
      "24/7 system monitoring",
      "24/7 system monitoring",
      "Security management",
      "Secure finance backup",
      "Secure finance backup",
    ],
  },
  {
    id: 3,
    text: [
      "24/7 system monitoring",
      "24/7 system monitoring",
      "24/7 system monitoring",
      "Security management",
      "Secure finance backup",
      "Secure finance backup",
    ],
  },
];

export default function PriceCards() {
  return (
    <div className="flex mt-[20px] justify-center">
      {dataPrices.map((el) => (
        <PriceCard key={el.id} values={el} />
      ))}
    </div>
  );
}
