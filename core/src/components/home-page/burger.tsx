import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Burger() {
  return (
    <div className="lg:hidden visible">
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu className="text-heading-06" />
        </SheetTrigger>
        <SheetContent className="bg-primary01 sm:max-w-sm">
          <SheetHeader>
            <SheetTitle>
              <h2 className="text-heading-05 mt-2">Logo</h2>
            </SheetTitle>
            <SheetDescription>
              <ul className="mt-5">
                <li className="text-button">Home</li>
                <li className="text-button">About</li>
                <li className="text-button">Contact</li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
