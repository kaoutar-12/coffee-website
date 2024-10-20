import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-3/4 max-w-6xl h-full md:flex justify-between px-5 hidden">
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
        <span className="font-pacifico text-xl text-whitecolor">Coffetto</span>
      </div>
      <div>
        <div className="w-2/4 h-full flex items-center gap-9 font-pacifico text-whitecolor ">
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            Home
          </span>
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            About
          </span>
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            Steps
          </span>
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            Testimonial
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
