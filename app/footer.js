import React from 'react'
import telegram from "./telegram.png";
import Image from "next/image";
import x from "./x.png";

export default function Footer() {
  return (
    <div className="flex pt-6 justify-end pb-6 px-8">
    <div className="flex gap-2">
      {" "}

      <a
        href="https://x.com/almerteynstayn"
        className="flex items-center font-mono font-medium ">
        <Image
          className=" md:w-[30px] md:h-[30px]"
          alt="hero"
          src={x}
          width="35"
          height="35"
        />
      </a>{" "}
    </div>
  </div>
  )
}
