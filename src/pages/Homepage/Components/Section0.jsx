import React from "react";
import vector1 from "./images/dashVector01.png";
import vector2 from "./images/dashVector02.png";
import vector1Dark from "./images/dashVector01-dark.png";
import vector2Dark from "./images/dashVector02-dark.png";
import { IoIosCloudDownload } from "react-icons/io";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { BsBrowserChrome } from "react-icons/bs";
export default function Section0() {
  return (
    <div>
      <section className="w-full pt-10 overflow-hidden">
        <div className="w-full flex items-center justify-center relative">
          <div className="w-full relative h-full max-w-screen relative rounded-tl-3xl rounded-tr-3xl">
            {/* Left Background Vector */}
            <img
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-delay="200"
              className="w-[250px] max-sm:w-[200px] max-sm:opacity-50 block dark:hidden"
              src={vector1}
              alt="vector"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-delay="200"
              className="w-[250px] max-sm:w-[200px] max-sm:opacity-50 hidden dark:block"
              src={vector1Dark}
              alt="vector"
            />

            {/* Right Background Vector */}
            <img
              data-aos="fade-left"
              data-aos-duration="1400"
              className="absolute max-sm:w-[200px] max-sm:opacity-50 block dark:hidden top-0 right-0 w-[250px]"
              src={vector2}
              alt="vector"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1400"
              className="absolute max-sm:w-[200px] max-sm:opacity-50 hidden dark:block top-0 right-0 w-[250px]"
              src={vector2Dark}
              alt="vector"
            />

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col max-sm:gap-5 justify-center items-center text-center gap-10 px-6">
              {/* Title */}
              <h1
                data-aos="flip-up"
                data-aos-duration="1200"
                className="text-primary dark:text-white max-md:text-4xl text-[70px] font-bold leading-tight"
              >
                From Profile to
                <br />
                <span className="text-secondary dark:text-[#1bfffb]">Professional</span>
              </h1>

              {/* Subtitle */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
              >
                Transform your information into a clean, responsive portfolio
                website ready to impress recruiters and clients.
              </p>

              {/* Feature Box */}
              <section
                data-aos="flip-down"
                data-aos-delay="400"
                className="bg-white rounded-[32px] shadow-md shadow-gray-400/10 py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-10 flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-20 border border-gray-50 scale-90 sm:scale-95 md:scale-100 transition-transform duration-300"
              >
                {/* Free Download */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="flex flex-col items-center gap-3 md:gap-2"
                >
                  <IoIosCloudDownload className="text-[28px] fill-primary" />
                  <p className="text-lg sm:text-xl md:text-xl bg-gradient-to-r from-gray-600 to-primary bg-clip-text text-transparent">
                    Free Downloads
                  </p>
                </div>

                {/* No Coding */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="750"
                  className="flex flex-col items-center gap-3 md:gap-2"
                >
                  <BsFillFileEarmarkCodeFill className="text-[28px] fill-primary" />
                  <p className="text-lg sm:text-xl md:text-xl bg-gradient-to-r from-gray-600 to-primary bg-clip-text text-transparent">
                    No Coding
                  </p>
                </div>

                {/* All Browser */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="flex flex-col items-center gap-3 md:gap-2"
                >
                  <BsBrowserChrome className="text-[28px] fill-primary" />
                  <p className="text-lg sm:text-xl md:text-xl bg-gradient-to-r from-gray-600 to-primary bg-clip-text text-transparent">
                    All Browsers
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
