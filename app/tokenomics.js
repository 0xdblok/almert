import React from 'react'
import formula from "./formula.png";
import formula1 from "./formula1.png";
import Image from "next/image";
export default function Tokenomics() {
  return (
    <div className="pt-36 ">
    <div className="mx-6 bg-[#00C9FE] lg:mx-48 xl:mx-66  border-4 border-black  rounded-lg ">
      <h1 className="bunge text-center text-nowrap text-4xl xl:text-5xl">
        Tokenomics
      </h1>
    </div>
    <div className="lg:flex justify-center gap-4 w-full pt-8 ">
      <div className="lg:w-1/2">
        <Image
          src={formula}
          className="relative xl:w-[285px] xl:h-[305px] xl:bottom-[195px] lg:w-[260px] lg:h-[303px] lg:bottom-[195px]  md:w-[244px] md:h-[280px] md:bottom-[180px] w-[142px] h-[152px] bottom-[100px] "
          alt=""
          width="450"
          height="450"
        />
        <Image
          src={formula1}
          className="relative md:top-[40px] xl:w-[565px] xl:h-[160px] lg:w-[500px] lg:h-[130px] lg:top-[55px]  md:w-[384px] md:h-[108px] w-[200px] h-[70px] top-[48px] "
          alt=""
          width="450"
          height="450"
        />
      </div>
      <div className="lg:w-1/2 flex bg-[#FCB01C] items-center border-4 border-black rounded-lg mt-6 lg:mt-0">
        {" "}
        <div className="w-full bg-[#FCB01C] ">
          <h1 className="bunge text-center  text-xl xl:text-2xl">
            TOTAL SUPPLY
          </h1>
          <p className="text-center bunge">1.000.000.000 </p>
          <h1 className="bunge text-center pt-8 text-xl xl:text-2xl">LP</h1>
          <p className="text-center bunge">80% </p>
          <h1 className="bunge text-center pt-8 text-xl xl:text-2xl">
            COMMUNITY
          </h1>
          <p className="text-center bunge">15% </p>

          <h1 className="bunge text-center pt-8 text-xl xl:text-2xl">DEV</h1>
          <p className="text-center bunge">5% </p>
          <h1 className="bunge text-center pt-8 text-xl xl:text-2xl">CA</h1>
          <p className="text-center bunge text-wrap">
         
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
