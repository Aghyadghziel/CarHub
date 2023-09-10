"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
function NavBar() {
  return (
    <header className="absolute  w-full z-10">
      <nav
        className=" max-w-[1440px] flex mx-auto justify-between items-center sm:px-16 px-6 py-4
      "
      >
        <Link className="flex justify-center items-center" href="/">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            className="object-contain"
            width={118}
            height={18}
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default NavBar;
