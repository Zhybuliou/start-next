"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  { id: 1, name: "Home", path: "" },
  { id: 2, name: "Blog", path: "/blog" },
  { id: 3, name: "About", path: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const langPrefix = pathname.slice(0,3);
  console.log(pathname)

  return (
    <nav className="lg:block hidden">
      <ul className="flex text-navbar">
        {NavLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={`${langPrefix}${link.path}`}
                className={
                  isActive(`${langPrefix}${link.path}`)
                    ? "flex items-center text-primary02 before:inline-block before:w-2 before:h-2 before:mr-1 ml-[36px] before:bg-primary02 before:rounded-full "
                    : "flex items-center before:inline-block before:w-2 before:h-2 before:mr-1 ml-[36px] before:border-primary03 before:border-2 before:rounded-full"
                }
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
