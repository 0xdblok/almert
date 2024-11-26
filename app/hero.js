import React from 'react'
import logo from "./logo.jpg";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="pt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center  md:px-8">
    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
      <Image
        className="mx-auto sm:w-10/12 lg:w-2/3 "
        src={logo}
        alt="Nikula Tisla"
        width={450}
        height={450}
      />{" "}
    </div>{" "}
    <div className="space-y-4 flex-1 sm:text-center lg:text-left ">
      <h1 className="bunge text-center  text-4xl xl:text-5xl">
        ALM<span className="text-[#2055A4]">ERT</span>{" "}
        <span className="text-[#2055A4]">EYNS</span>TAYN
      </h1>
      <p className="bunge md:px-48 text-center text-lg font-medium leading-relaxed sm:mx-auto lg:ml-0">
      I, Almert Eynstayn (not to be confused with that other guy), discovered something revolutionary while eating crayons in my Base blockchain treehouse. With my certified 37 IQ (tested by my pet hamster), I have been CHOSEN to create something that will change everything, maybe.
      </p>
    </div>
    <div className="flex justify-center pt-8"></div>
  </section>
  )
}
