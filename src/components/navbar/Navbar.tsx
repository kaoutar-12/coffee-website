import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-3/4 max-w-6xl h-full md:flex justify-between px-5 hidden">
      <div className="flex gap-3 justify-center items-center">
        <div className="w-8 h-8">
          <Link href="#home">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </Link>
        </div>
        <span className="font-pacifico text-xl text-whitecolor">Coffetto</span>
      </div>
      <div>
        <div className="w-2/4 h-full flex items-center gap-9 font-pacifico text-whitecolor ">
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            <Link href="#home">Home</Link>
          </span>
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            <Link href="#about">About</Link>
          </span>
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            <Link href="#steps">Steps</Link>
          </span>
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            <Link href="#Testimonial">Testimonial</Link>
          </span>
          <span className="hover:text-secondcolor cursor-pointer hover:scale-110">
            <Link href="#contact">Contact</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
