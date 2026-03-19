import React from "react";
import { NavLink } from "react-router";
import storySetImg from "../components/Images/image.gif";
import storySetImgDark from "../components/Images/imageDark.gif";
export default function Section01() {
  return (
    <section
      id="tempalte"
      className="container  relative mx-auto px-4 flex lg:flex-row max-lg:flex-col items-center justify-center"
    >      <div
      data-aos="zoom-in"
      data-aos-delay="400"
      className="w-[100px] animate-pulse dark:w-[80px] dark:bg-[#AAD9D9]/80 dark:h-[180px] md:block max-md:hidden h-[250px]  dark:blur-[80px] absolute  z-9 left-140 top-30 blur-[130px] bg-amber-300"
    ></div>
      {" "}
      <div className="flex max-sm:items-center  max-lg:text-center flex-col gap-8">
        <h1
          data-aos="fade-right"
          data-aos-delay="250"
          className="text-primary  dark:text-white max-md:text-4xl text-[70px] font-bold leading-tight"
        >
          Why
          <br />
          <span className="text-secondary dark:text-secondary-dark">SkillShow </span>?
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="50"
          className="text-[24px] max-lg:w-2xl max-lg:text-center max-sm:w-[300px] text-text-description max-sm:text-[14px] max-w-3xl dark:text-cool-sky max-lg:text-[20px]   font-['Poppins-Light',_sans-serif] text-line-height-24"
        >
          SkillShow helps individuals showcase their skills and achievements
          professionally so they can stand out and grow.
        </p>
        <a href="#members">
          <button
            data-aos="fade-right"
            data-aos-delay="450"
            className="group mb-8 max-sm:mb-4 dark:bg-cool-sky  shadow-md w-fit relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-medium  transition duration-200 hover:scale-110"
          >
            <span className="flex  dark:text-primary text-secondary items-center">
              VIEW OUR TEAM{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </a>
      </div>
      <div data-aos="fade-left" data-aos-delay="350">
        <img
          className="w-[550px] block dark:hidden max-sm:mb-4 rounded-[28px]"
          src={storySetImg}
          alt="storySetImg "
        />
        <img
          className="w-[550px] hidden dark:block max-sm:mb-4 rounded-[28px]"
          src={storySetImgDark}
          alt="storySetImg "
        />
      </div>
    </section>
  );
}
