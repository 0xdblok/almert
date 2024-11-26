import React from 'react'
import logo from "./logo.jpg";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="pt-24  mx-auto max-w-screen-xl pb-12 px-4 items-center  md:px-8">
    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
      <Image
        className="mx-auto sm:w-10/12 lg:w-2/3 "
        src={logo}
        alt="Nikula Tisla"
        width={400}
        height={400}
      />{" "}
    </div>{" "}
    <div className="space-y-4 flex-1 sm:text-center lg:text-left ">
      <h1 className="bunge text-center  text-4xl xl:text-5xl">
      𝘼𝙇𝙈<span className="text-[#2055A4]">𝙀𝙍𝙏</span>{" "}
        <span className="text-[#2055A4]">  𝙀𝙔𝙉 </span>𝙎𝙏𝘼𝙔𝙉
      </h1>
      <p className="bunge  md:px-28 text-center text-lg font-medium leading-relaxed sm:mx-auto lg:ml-0">
      ɪ, ᴀʟᴍᴇʀᴛ ᴇʏɴꜱᴛᴀʏɴ (ɴᴏᴛ ᴛᴏ ʙᴇ ᴄᴏɴꜰᴜꜱᴇᴅ ᴡɪᴛʜ ᴛʜᴀᴛ ᴏᴛʜᴇʀ ɢᴜʏ), ᴅɪꜱᴄᴏᴠᴇʀᴇᴅ ꜱᴏᴍᴇᴛʜɪɴɢ ʀᴇᴠᴏʟᴜᴛɪᴏɴᴀʀʏ ᴡʜɪʟᴇ ᴇᴀᴛɪɴɢ ᴄʀᴀʏᴏɴꜱ ɪɴ ᴍʏ ʙᴀꜱᴇ ʙʟᴏᴄᴋᴄʜᴀɪɴ ᴛʀᴇᴇʜᴏᴜꜱᴇ. ᴡɪᴛʜ ᴍʏ ᴄᴇʀᴛɪꜰɪᴇᴅ 37 ɪQ (ᴛᴇꜱᴛᴇᴅ ʙʏ ᴍʏ ᴘᴇᴛ ʜᴀᴍꜱᴛᴇʀ), ɪ ʜᴀᴠᴇ ʙᴇᴇɴ ᴄʜᴏꜱᴇɴ ᴛᴏ ᴄʀᴇᴀᴛᴇ ꜱᴏᴍᴇᴛʜɪɴɢ ᴛʜᴀᴛ ᴡɪʟʟ ᴄʜᴀɴɢᴇ ᴇᴠᴇʀʏᴛʜɪɴɢ, ᴍᴀʏʙᴇ.
      </p>
    </div>
    <div className="flex justify-center pt-8"></div>
  </section>
  )
}
