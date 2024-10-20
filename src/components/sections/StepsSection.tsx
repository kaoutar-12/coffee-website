import React from "react";
import Image from "next/image";

type Props = {};

const StepsSection = (props: Props) => {
  return (
    <>
      <section className="pb-32 bg-white rounded-t-[56px] left-0 -top-36 relative flex justify-center">
        <div className="w-screen 4xl:pr-28 3xl:pr-24 3xl:pl-28  max-w-screen-3xl pt-10 flex items-center flex-col max-mdl:gap-16 md:flex-row-reverse">
          <div className="flex flex-col max-sm:items-center gap-7 md:w-2/4">
            <span className="text-firstcoloralt font-pacifico md:pl-5 text-[28px]">
              Our History
            </span>
            <span className="pl-6 pr-6 text-center md:text-start mdl:pr-80 poppins-regular text-textcolorlight text-[15px]">
              We make and grow the best coffee in Peru, accompanying families
              since 1930, with professional workers who harvest, collect and
              select the coffee with quality work, thus providing exquisite
              coffee to enjoy together as a family.
            </span>
          </div>
          <div className="max-mdl:w-[328px] max-mdl:h-[218px] max-md:pl-0 max-mdl:pl-6 lg:w-[800px] lg:h-[300px] lg:pl-32 lg:pt-8">
            <Image
              src="/about-coffee.svg"
              alt="history"
              width={200}
              height={200}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StepsSection;
