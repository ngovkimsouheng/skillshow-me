import React from "react";
import Img1 from "./images/gridImg01.png";
import Img2 from "./images/gridImg02.png";
import Img3 from "./images/gridImg03.png";
import Img4 from "./images/gridImg04.png";
import Img5 from "./images/gridImg05.png";
import Img6 from "./images/gridImg06.png";

export default function Section03() {
  return (
    <section className="">
      <div className="flex container mx-auto justify-center items-center  flex-col gap-8 pb-10">
        <div className="text-center font-['Poppins-Bold',_sans-serif] max-sm:text-[40px] max-md:text-[43px]  text-[70px] leading-[75px] max-md:leading-[45px] font-bold">
          <span>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-primary dark:text-white"
            >
              Your Story ,Your
              <span className="text-secondary dark:text-[#1bfffb]  "> Portfolio</span>
            </p>
          </span>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
        >
          Design a personal website that represents who you are. Highlight your
          experience, projects, and talents with a clean and customizable
          template.
        </p>
        {/* <!-- GRID --> */}
        <div
          className="grid px-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 [grid-auto-rows:160px] sm:[grid-auto-rows:208px] md:[grid-auto-rows:350px] lg:[grid-auto-rows:284px]"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          {/* <!-- Image 1 --> */}
          <div
            className="overflow-hidden ring ring-cool-sky/20 rounded-xl"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src={Img1}
              className="w-full  h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          {/* 
        <!-- Image 2 --> */}
          <div
            className="overflow-hidden ring ring-cool-sky/20 rounded-xl"
            data-aos="fade-right"
            data-aos-delay="350"
          >
            <img
              src={Img2}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* <!-- Image 3 (tall) --> */}
          <div
            className="overflow-hidden ring ring-cool-sky/20 rounded-xl md:col-span-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={Img3}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
          {/* 
        <!-- Image 4 --> */}
          <div
            className="overflow-hidden ring ring-cool-sky/20 md:col-span-2 rounded-xl"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <img
              src={Img4}
              className="w-full  h-full object-cover hover:scale-105 transition  duration-500"
            />
          </div>

          {/* <!-- Image 5 (wide) --> */}
          <div
            className="overflow-hidden ring ring-cool-sky/20 rounded-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src={Img5}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* <!-- Image 6 --> */}
          <div
            className="overflow-hidden ring ring-cool-sky/20 rounded-xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              src={Img6}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
