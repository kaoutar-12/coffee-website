import React from "react";
import Image from "next/image";

type Props = {};

const TestimonialSection = (props: Props) => {
  return (
    <>
      <section className="pb-10 bg-firstcolormedium bg-[url('/bg-coffee-beans.svg')] max-sm:pb-24 rounded-t-[56px] left-0 -top-36 relative flex justify-center">
        <div className="mdl:pb-56 4xl:pr-24 xl:pr-32 z-30 3xl:pr-16 relative max-w-screen-3xl w-screen rounded-t-[56px] pt-10 flex sm:items-center flex-col mdl:pr-14">
          <span className="font-pacifico lg:pl-32 text-2xl mdl:text-5xl pr-10 pl-10 text-white text-center">
            Steps of manufacturing our products
          </span>

          <div className="mdl:pl-32 w-full px-5 mdl:pt-32 flex flex-col mdl:flex-row md:justify-center md:items-center gap-32">
            <div className="md:pt-32 md:pr-24 mdl:gap-5 mdl:p-0 flex flex-col justify-center items-start">
              <div className=" w-[150px] h-[150px] rounded-full mdl:w-[260px] mdl:h-[260px] relative bg-firstcolorlight">
                <div className="flex justify-center items-center mdl:w-[105px] mdl:h-[105px] bg-secondcolor w-[75px] h-[75px] absolute -top-5 -left-4 mdl:-top-7 mdl:-left-6 mdl:border-[15px] rounded-full border-[10px]  border-firstcolormedium">
                  <span className="text-3xl mdl:text-4xl text-firstcolormedium poppins-semibold">
                    01
                  </span>
                </div>
                <div className="flex justify-center mdl:pt-10 items-center pt-7">
                  <Image
                    src="/steps-green-coffee.svg"
                    alt="coffee-beans"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <span className="text-[15px] mdl:text-[17px] poppins-regular text-white w-[250px]">
                Harvest occurs annually when the coffee beans reach maturity and
                are collected for processing.
              </span>
            </div>
            <div className=" md:pr-10 md:mb-10 mdl:m-0 mdl:pl-0 mdl:pr-0 mdl:mt-40 flex flex-col justify-center items-start self-end">
              <div className="w-[150px] h-[150px] rounded-full mdl:w-[260px] mdl:h-[260px] relative bg-firstcolorlight max-md:self-end">
                <div className="flex justify-center items-center mdl:w-[105px] mdl:h-[105px] bg-secondcolor w-[75px] h-[75px] absolute -top-5 -left-4 mdl:-top-7 mdl:-left-6 mdl:border-[15px] rounded-full border-[10px] border-firstcolormedium">
                  <span className="text-3xl mdl:text-4xl text-firstcolormedium poppins-semibold">
                    02
                  </span>
                </div>
                <div className="flex justify-center mdl:pt-8 items-center pt-7">
                  <Image
                    src="/steps-coffee-beans.svg"
                    alt="coffee-beans"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <span className="text-[15px] mdl:text-[17px] poppins-regular max-md:text-end text-white w-[250px]">
                The beans are dried using a wet or dry technique, depending on
                the taste we want to obtain.
              </span>
            </div>
            <div className="md:pr-32 md:pb-10 mdl:p-0 mdl:pb-10 flex flex-col justify-center items-start">
              <div className=" w-[150px] h-[150px] rounded-full mdl:w-[260px] mdl:h-[260px] relative bg-firstcolorlight">
                <div className=" flex justify-center items-center mdl:w-[105px] mdl:h-[105px] bg-secondcolor w-[75px] h-[75px] absolute -top-5 -left-4 mdl:-top-7 mdl:-left-6 mdl:border-[15px] rounded-full border-[10px] border-firstcolormedium">
                  <span className="text-3xl mdl:text-4xl text-firstcolormedium poppins-semibold">
                    03
                  </span>
                </div>
                <div className="flex justify-center items-center pt-7">
                  <Image
                    src="/steps-ground-coffee_1.svg"
                    alt="coffee-beans"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <span className="text-[15px] mdl:text-[17px] poppins-regular text-white w-[250px]">
                The coffee is roasted and acquires its flavor by processing the
                grain in ovens.
              </span>
            </div>
          </div>
        </div>
        <div className="max-sm:w-3/4 max-sm:h-3/4 max-sm:mt-24 xl:pt-20 4xl:pt-16 xl:rotate-[95deg] w-2/4 h-5/6 mdl:w-[650px] mdl:h-[650px] mdl:pt-1 mdl:rotate-[100deg] mdl:mt-32 flex justify-center items-center absolute  pt-24 md:pt-56">
          <Image
            src="/Steps_line_dashed.svg"
            alt="coffee-beans"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
