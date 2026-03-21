import React from "react";
import Toggle from "./images/toggle.png";
import AllinOne from "./images/all-in-one.png";
import Clock from "./images/clock.png";
import Foryou from "./images/foryou.png";
import UI from "./images/UI.png";
import Free from "./images/free.png";
import Offer from "./images/offer.png";
import Phone from "./images/phone.png";
import TemplateSticker from "./images/templateSticker.png";
import Template from "./images/template.png";
import Arrow01 from "./images/arrow01.png";
import Arrow02 from "./images/arrow02.png";
import BlurText from "./BlurText";

export default function Herosection() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div>
      {" "}
      <div className=" h-[105vh] lg:pt-10  max-sm:pt-[140px] max-md:h-[200vh]   relative bg-gradient-to-b dark:bg-grdient dark:from-[#061729] dark:to-gray-800/30  from-[#f6f1cb] to-white w-full flex flex-col justify-center items-center">
        <div className="text-center font-['Poppins-Bold',_sans-serif] max-sm:text-[40px] max-md:text-[45px] text-[70px] leading-[75px] max-md:leading-[45px] font-bold">
          <span>
            <div
              data-aos="fade-down"
              className="text-primary flex flex-col justify-center items-center text-center dark:text-white"
            >
              <BlurText
                text="Showcase What"
                delay={400}
                animateBy="words"
                direction="top"
                className="text-center"
                onAnimationComplete={handleAnimationComplete}
              />
            </div>
            <div
              data-aos="fade-up"
              className="text-primary flex gap-4  dark:text-white"
            >
              <BlurText
                text="Make You"
                delay={400}
                animateBy="words"
                direction="left"
                className="text-center"
                onAnimationComplete={handleAnimationComplete}
              />{" "}
              <BlurText
                text="Unique"
                delay={400}
                animateBy="words"
                direction="right"
                className="text-secondary dark:text-[#1bfffb]"
                onAnimationComplete={handleAnimationComplete}
              />
            </div>
          </span>
        </div>
        <p
          data-aos="fade-up"
          className="text-[24px] dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
        >
          Create a personalized portfolio website that highlights your talents
        </p>
        <section
          data-aos="fade-up"
          data-aos-duration="1400"
          className="container max-sm:place-content-center place-items-center max-sm:place-items-center max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:flex max-sm:items-center relative md:px-4 sm:items-center sm:place-content-center sm:place-items-center md:grid md:grid-cols-3 max-lg:gap-6 max-w-6xl mx-auto mt-8"
        >
          {/* <!-- div1 --> */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="flex flex-col items-center justify-center "
          >
            {/* <!-- 1 --> */}
            <div className="flex gap-6 max-sm:justify-center">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-color-white-solid mt-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img className="w-[111.5px] h-[69.93px]" src={Clock} />
                <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  Fast
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-color-white-solid mb-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img className="w-[111.5px] h-[69.93px]" src={Toggle} />
                <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  Modern
                </p>
              </div>
            </div>

            <div className="flex gap-6 ml-6">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="bg-color-white-solid mt-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img className="w-[111.5px] h-[69.93px]" src={Free} />
                <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  Free
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-color-white-solid mb-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img className="w-[111.5px] px-4 h-[69.93px]" src={Foryou} />
                <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  For you
                </p>
              </div>
            </div>
          </div>

          {/* <!-- phone --> */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="relative max-md:my-4"
          >
            <div className="h-20 w-20 animate-pulse absolute sm:hidden max-sm:-right-8 bg-secondary blur-2xl"></div>
            <div className="h-20 w-20 animate-pulse absolute sm:hidden bottom-0 bg-secondary blur-2xl"></div>

            <img className="w-[300px]" src={Phone} />

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-color-white-solid lg:ml-5 max-sm:ml-5 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-4 absolute left-[18%] top-[25%]"
            >
              <img className="w-[120px]" src={TemplateSticker} />
              <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                Modern
              </p>
            </div>
          </div>

          {/* <!-- div2 --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex flex-col"
          >
            <div className="flex gap-6 max-sm:justify-center ">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-color-white-solid mt-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img className="w-[111.5px] pt-1 px-4 h-[69.93px]" src={UI} />
                <p className="px-4 max-lg:text-[16px] pt-2 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  Clean UI
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-color-white-solid mb-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img className="w-[111.5px] h-[69.93px]" src={Offer} />
                <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  Offer
                </p>
              </div>
            </div>

            <div className="flex gap-6 ml-6">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="bg-color-white-solid mt-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img
                  className="w-[111.5px] px-4 pt-2 h-[69.93px]"
                  src={AllinOne}
                />
                <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  All in one
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="bg-color-white-solid mb-6 bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-[32px] flex-col gap-4 w-fit flex items-center justify-center border-solid border-[#e6e9ef] border p-1"
              >
                <img
                  className="w-[111.5px] px-4 pt-2 h-[69.93px]"
                  src={Template}
                />
                <p className="pb-4 text-[18px] font-['Poppins-Regular',_sans-serif]">
                  Template
                </p>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <img
            data-aos="fade-right"
            className="w-[140px] max-sm:w-[120px] max-sm:-left-0 max-sm:-top-8 absolute -left-13 -top-13"
            src={Arrow01}
          />

          <img
            data-aos="fadee-rgith"
            className="w-[140px] absolute -right-8 -bottom-12"
            src={Arrow02}
          />
        </section>
      </div>
    </div>
  );
}
