import React from "react";
import Image from "next/image";

const LastSection = () => {
  return (
    <>
      <section className="mt-10 bg-white rounded-t-[56px] left-0 -top-60  relative mdl:flex mdl:justify-center ">
        <div className="mdl:pr-40 3xl:pl-56 3xl:pr-[400px] xl:pl-3 3xl:gap-0  xl:pr-64 md:pr-20 pl-14 max-w-screen-3xl flex flex-col rounded-t-[56px] justify-center items-center max-md:gap-12 md:flex-row max-mdl:pr-14 w-screen">
          <div className="flex flex-col mdl:pl-48 mdl:gap-14 justify-center max-md:items-center gap-6">
            <span className="font-pacifico text-[28px] mdl:pr-32 mdl:text-[40px] md:text-start md:pt-12 md:pl-10 md:pr-10 pt-7 text-center ">
              Coffee is the best drink in the morning, it keeps you focused.
            </span>
            <span className="poppins-medium md:pl-10 mdl:pl-10 text-[16px] md:text-[18px]">
              Jhon Doe
            </span>
          </div>
          <div className="w-[328px] h-[219px] mdl:w-[550px] mdl:h-[367px] md:w-[400px] md:h-[270px] md:pt-10 flex justify-center items-center">
            <Image
              src="/testimonial-coffee.svg"
              alt="testimonial"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LastSection;
