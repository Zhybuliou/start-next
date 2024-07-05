import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Burger() {
  return (
<div className='lg:hidden visible'>
 <Sheet>
  <SheetTrigger>
    <RxHamburgerMenu className='text-heading-06'/>
  </SheetTrigger>
  <SheetContent className='bg-primary01 sm:max-w-sm'>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
  )
}
