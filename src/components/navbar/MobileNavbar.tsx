import React from 'react'
import Image from "next/image";

const MobileNavbar = () => {
  return (
    <div className="mobile hidden max-md:flex">
    <div className="flex justify-center items-center">
      <div className="flex gap-3 justify-center items-center">
        <div className="w-8 h-8">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <span className="font-pacifico text-xl text-whitecolor">
          Coffetto
        </span>
      </div>
    </div>
  </div>
  )
}

export default MobileNavbar