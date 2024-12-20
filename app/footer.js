import React from 'react'
import telegram from "./telegram.png";
import Image from "next/image";
import x from "./x.png";

export default function Footer() {
  return (
    <div className="flex pt-6 justify-end pb-6 px-8">
    <div className="flex gap-2">

     
    <a
        href="https://t.me/almertonbase"
        className="flex items-center font-mono font-medium text-blue-600 hover:underline ">
        <Image
          className=" md:w-[35px] md:h-[35px]"
          alt="hero"
          src={telegram}
          width="32"
          height="32"
        />
      </a>{" "}
      {" "}

      <a
        href="https://x.com/almerteynstayn/"
        className="flex items-center font-mono font-medium text-blue-600 hover:underline ">
        <Image
          className=" md:w-[35px] md:h-[35px]"
          alt="hero"
          src={x}
          width="30"
          height="30"
        />
      </a>{" "}
    </div>
  </div>
  )
}
