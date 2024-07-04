import React from "react";
import Image from "next/image";

export default function ProjectsCard({ url }: { url: string }) {
  return (
    <div className="w-[280px] h-[366px] bg-primary04 rounded-[20px] mt-4 mb-4 overflow-hidden">
      <Image
        className="rounded-[20px]"
        src={url}
        width={280}
        height={300}
        alt="icon pattern"
      />
    </div>
  );
}
