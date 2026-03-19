import React from "react";
import star from "./images/star.png";
import starDark from "./images/starDark.png";
import vector from "./images/vector.png";
import vector01 from "./images/vector01.png";
import cv1 from "./images/cv1.png";
import cv2 from "./images/cv2.png";
import cv3 from "./images/cv3.png";
import cv4 from "./images/cv4.png";
import cv5 from "./images/cv5.png";
export default function OverwrapImage() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="flex relative md:mt-15 justify-center px-6 container mx-auto items-center"
      >
        {/* Star */}
        {/* <img
          data-aos="fade-left"
          data-aos-delay="500"
          className="absolute w-15 top-3 z-20 right-75"
          src={star}
          alt=""
        /> */}
        <img
          className="absolute block dark:hidden w-15 top-3 z-20 right-75 zoom-rotate"
          src={star}
          alt=""
        />
        <img
          className="absolute hidden dark:block w-15 top-3 z-20 right-75 zoom-rotate"
          src={starDark}
          alt=""
        />

        {/* Card 1 */}
        <div
          data-aos="flip-right"
          data-aos-delay="300"
          className="bg-white z-2 sm:rounded-[24px] max-sm:rounded-[12px] border border-[#e6e9ef] shadow-lg sm:p-2 max-sm:p-0.5 -rotate-8 transform sm::w-[150px] sm::h-[180px] max-sm:w-[100px] max-sm:h-[120px] md:w-[250px] md:h-[250px] lg:h-[300px] -mr-8"
        >
          <img
            src={cv1}
            className="w-full h-full object-cover sm:rounded-[16px] max-sm:rounded-[8px]"
            alt="Image 1"
          />
        </div>

        {/* Card 2 */}
        <div
          data-aos="flip-right"
          data-aos-delay="300"
          className="bg-white z-4 sm:rounded-[24px] max-sm:rounded-[12px] border border-[#e6e9ef] shadow-lg sm:p-2 max-sm:p-0.5 rotate-6 transform sm::w-[150px] sm::h-[180px] max-sm:w-[100px] max-sm:h-[120px] md:w-[250px] md:h-[250px] lg:h-[300px] mt-8 -mr-8"
        >
          <img
            src={cv2}
            className="w-full h-full object-cover sm:rounded-[16px] max-sm:rounded-[8px]"
            alt="Image 2"
          />
        </div>

        {/* Card 3 */}
        <div
          data-aos="flip-right"
          data-aos-delay="300"
          className="bg-white z-3 sm:rounded-[24px] max-sm:rounded-[12px] border border-[#e6e9ef] shadow-lg sm:p-2 max-sm:p-0.5 -rotate-8 transform sm::w-[150px] sm::h-[180px] max-sm:w-[100px] max-sm:h-[120px] md:w-[250px] md:h-[250px] lg:h-[300px] -mr-8"
        >
          <img
            src={cv3}
            className="w-full h-full object-cover sm:rounded-[16px] max-sm:rounded-[8px]"
            alt="Image 3"
          />
        </div>

        {/* Card 4 */}
        <div
          data-aos="flip-left"
          data-aos-delay="400"
          className="bg-white z-2 sm:rounded-[24px] max-sm:rounded-[12px] border border-[#e6e9ef] shadow-lg sm:p-2 max-sm:p-0.5 rotate-6 transform sm::w-[150px] sm::h-[180px] max-sm:w-[100px] max-sm:h-[120px] md:w-[250px] md:h-[250px] lg:h-[300px] mt-8 -mr-8"
        >
          <img
            src={cv4}
            className="w-full h-full object-cover sm:rounded-[16px] max-sm:rounded-[8px]"
            alt="Image 4"
          />
        </div>

        {/* Card 5 */}
        <div
          data-aos="flip-left"
          data-aos-delay="500"
          className="bg-white sm:rounded-[24px] max-sm:rounded-[12px] z-1 border border-[#e6e9ef] shadow-lg sm:p-2 max-sm:p-0.5 -rotate-8 transform sm::w-[150px] sm::h-[180px] max-sm:w-[100px] max-sm:h-[120px] md:w-[250px] md:h-[250px] lg:h-[300px]"
        >
          <img
            src={cv5}
            className="w-full h-full object-cover sm:rounded-[16px] max-sm:rounded-[8px]"
            alt="Image 5"
          />
        </div>

        {/* Decorative Elements */}

        <img
          data-aos="fade-right"
          data-aos-delay="300"
          className="w-[39.76px] z-10 h-[48.43px] absolute left-3 top-0"
          src={vector}
        />

        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-[100px] h-[250px] absolute left-0 -top-10 blur-[100px] dark:bg-[#AAD9D9]/80 bg-amber-300"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="w-[100px] h-[250px] absolute right-0 bottom-0 blur-[100px] dark:bg-[#AAD9D9]/80 bg-amber-300"
        ></div>
        <img
          data-aos="fade-left"
          data-aos-delay="300"
          className="w-[39.76px] h-[48.43px] z-10 absolute right-3 bottom-0"
          src={vector01}
        />


      </div>
    </>
  );
}
