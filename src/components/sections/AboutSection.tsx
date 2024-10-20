import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <section className=" bg-firstcolormedium rounded-t-[56px] left-0 -top-16 relative flex justify-center">
        <div className=" pb-28 xl:pl-10 4xl:pl-52 3xl:pl-56 3xl:pr-24 flex flex-col max-w-screen-3xl lg:flex-row gap-5 w-screen">
          <div className="flex flex-col max-mdl:items-center max-mdl:justify-center lg:pl-44 pt-10 gap-8 lg:gap-8 lg:pt-24">
            <div className="lg:pl-6 ">
              <button className=" shadow-3xl justify-center bg-firstcoloralt text-whitecolor flex flex-row items-center w-44 h-14 rounded-[64px]">
                Scroll Down <FaAngleDown />
              </button>
            </div>
            <span className="text-white text-center lg:text-start poppins-regular text-[15px] font-light  pl-5 pr-5">
              We strive to form deep partnerships with farmers from all over the
              world to create perspective together and form healthy working
              relationships built on trust and respect.
            </span>
          </div>

          <div className=" p-3 grid grid-cols-2 w-screen gap-4 lg:flex lg:justify-center lg:pr-64">
            <div className="flex flex-col items-center ">
              <div className="w-[190px] h-[279px]">
                <Image
                  src="/product-coffee-1.svg"
                  alt="coffee"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <span className="font-pacifico text-[22px] text-white text-center">
                Classic Coffee
              </span>
              <span className="font-pacifico text-[22px] text-white text-center">
                $17.90
              </span>
            </div>
            <div className="flex flex-col items-center ">
              <div className="w-[190px] h-[279px] pt-4">
                <Image
                  src="/product-coffee-2.svg"
                  alt="coffee"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <span className="font-pacifico text-[22px] text-white text-center">
                Black Coffee
              </span>
              <span className="font-pacifico text-[22px] text-white text-center">
                $24.90
              </span>
            </div>
            <div className="flex flex-col items-center ">
              <div className="w-[190px] h-[279px] pt-3">
                <Image
                  src="/product-coffee-3.svg"
                  alt="coffee"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <span className="font-pacifico text-[22px] text-white text-center">
                Strong Coffee
              </span>
              <span className="font-pacifico text-[22px] text-white text-center">
                $32.90
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
