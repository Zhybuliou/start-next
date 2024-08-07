import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  url,
  title,
  text,
  color,
}: {
  url: string;
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div
      className={
        "sm:ml-4 mb-3 w-[300px] h-[440px] bg-primary04 rounded-[20px] shadow-xl relative"
      }
    >
      <Image className="rounded-[20px]" src={`${url}`} fill alt="image" />
      <div className="z-100 absolute pl-3 pr-3 top-[200px]">
        <h3 className={`text-heading-06 text-${color}`}>{title}</h3>
        <p className={`text-paragraph text-${color}`}>{text}</p>
        <Link
          className="
         mt-4
         bg-primary04 text-primary03 
         hover:text-primary05
         rounded-full inline-flex justify-between pl-[10px] pr-[10px] pt-2 pb-2"
          href="/"
        >
          <p className="text-button ">Our Service</p>
        </Link>
      </div>
    </div>
  );
}
