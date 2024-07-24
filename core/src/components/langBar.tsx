"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  { id: 1, name: "ru", nameTranslate: "рус", path: "/ru" },
  { id: 2, name: "en", nameTranslate: "анг", path: "/en" },
];

const LangBar = () => {
  const pathname = usePathname();
  const langPrefix = pathname.slice(0,3);
  const isActive = (path: string) => path === langPrefix;

  return (
    <nav className="lg:block hidden">
      <ul className="flex text-navbar">
        {NavLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={`${link.path}`}
                className={
                  isActive(`${link.path}`)
                    ? "flex items-center text-primary02 before:inline-block before:w-2 before:h-2 before:mr-1 ml-[16px] before:bg-primary02 before:rounded-full "
                    : "flex items-center before:inline-block before:w-2 before:h-2 before:mr-1 ml-[16px] before:border-primary03 before:border-2 before:rounded-full"
                }
              >
                { langPrefix !== "/ru" ? link.name : link.nameTranslate }
              </Link>
            </li> 
          );
        })}
      </ul>
    </nav>
  );
};

export default LangBar;
