import Image from "next/image";
import logo from "./logo.jpg";
import bann from "./bann.jpg";
import Hero from "./hero";
import Tokenomics from "./tokenomics";
import Footer from "./footer";



export default function Home() {
  return (
    <div className=" bg-gray-100 md:px-24 px-12">
    <Hero />

    <Tokenomics />

    <Footer />
  </div>
  );
}
  /* <div className="bg-[#FCB01C] ">

  <div className="flex flex-col items-center justify-center h-screen">
    <p className="text-white text-4xl font-bold ">Almert Eynstayn</p>
      <Image className=" mb-32" src={logo} alt="Logo" width={400} height={400} />
     <p className="w-full text-left px-4">fgsdgbsdjbgkgbk</p> 
     <div className=" border-4 flex w-full ">
      <div>fgzsg</div>
      <div>fgzsdsgsdgsdgsdgsg</div>
     </div>
     <a className="relative z-0 h-14 flex justify-center items-center rounded-full bg-[#00C8FF] px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-[#34a5c5] hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">Buy on Uniswap</a>
  </div>
 
 
   </div>*/