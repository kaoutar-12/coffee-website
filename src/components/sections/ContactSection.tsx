import React from "react";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";

const ContactSection = () => {
  return (
    <>
      <section className="bg-firstcoloralt bg-[url('/bg-coffee-beans.svg')] rounded-t-[56px] left-0 -top-36 relative flex justify-center">
        <div className="flex xl:gap-40 flex-col max-w-screen-3xl gap-24 w-screen pb-32 md:pb-20">
          <div className="flex xl:pt-32 flex-col xl:flex-row  xl:items-center xl:gap-96 justify-center gap-10">
            <div className="flex xl:items-start  flex-col gap-5 lg:justify-start justify-center items-center h-full">
              <div className="max-lg:pt-20 flex  gap-3 justify-center items-center">
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
              <span className="font-pacifico text-white text-[28px]">
                Sign up for our newsletter
              </span>
            </div>

            <div className="flex flex-col items-center gap-5">
              <input
                type="text"
                className="w-[328px] h-[64px] rounded-[64px] pl-7 border-textcolorlight border-2 bg-transparent placeholder:text-textcolorlight"
                placeholder="Enter e-mail address"
              />
              <button className="flex justify-center items-center shadow-3xl shadow-secondcolor bg-secondcolor w-[328px] h-[44px] rounded-[64px]">
                Subscribe <MdNavigateNext className="size-6" />
              </button>
              <div className="flex gap-1">
                <span className="text-white text-[13px]">
                  We care about your data. Read our
                </span>
                <Link href="#" className="text-secondcolor text-[13px]">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 xl:gap-14">
            <div className="flex justify-center items-center gap-6">
              <TiSocialFacebook className="text-white size-[24px]" />
              <AiFillInstagram className="text-white size-[24px]" />
              <FaTwitter className="text-white size-[24px]" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <LuCopyright className="text-textcolorlight text-[12px]" />
              <span className="text-textcolorlight poppins-regular text-[14px]">
                Copyright Bedimcode. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
