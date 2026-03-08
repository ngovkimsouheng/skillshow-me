import React from "react";
import Template1 from "./images/sampleTemplate1.png";
import Template2 from "./images/sampleTemplate2.png";
import Template3 from "./images/sampleTemplate3.png";
import { FaEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { NavLink, useNavigate } from "react-router";
import { Navigate } from "react-router";
import RotatingText from "./RotatingText";

export default function () {
  let navigate = useNavigate();
  return (
    <div className="flex max-sm:gap-5 max-sm:px-2 justify-center items-center  md:pt-10 flex-col gap-8 pb-10">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-center font-['Poppins-Bold',_sans-serif] max-sm:text-[40px] max-md:text-[43px]  text-[70px] leading-[75px] max-md:leading-[45px] font-bold"
      >
        <span>
          <p className="text-primary flex  sm:gap-4 dark:text-white">
            Popular{" "}
            <RotatingText
              texts={["Template", "Interface"]}
              mainClassName="px-2 text-secondary dark:text-[#1bfffb]  sm:px-2 md:px-3  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden  "
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </p>
        </span>
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
      >
        Design a personal website that represents who you are. Highlight your
        experience, projects, and talents with a clean and customizable
        template.
      </p>
      <div className="flex  relative px-4 max-sm:mx-2 items-center flex-wrap justify-center gap-8">
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-[100px] h-[250px] absolute left-10 -top-10 blur-[100px] dark:bg-[#AAD9D9]/80 bg-amber-300"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-[100px] h-[250px] absolute right-10 -bottom-10 blur-[100px] dark:bg-[#AAD9D9]/80 bg-amber-300"
        ></div>

        {/* tempalte 1 */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          onClick={() => navigate("/portfolio4")}
          className="relative  cursor-pointer w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden"
        >
          {/* ✅ Image */}
          <img
            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
            src={Template1}
            alt="template"
          />

          {/* 🔥 Full Card Blur Overlay */}
          <div
            className="
          absolute inset-0
          backdrop-blur-[3px]
      
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
          flex items-center justify-center
    "
          >
            {/* 🔥 Buttons */}
            <div className="flex gap-4">
              {/* <button
                onClick={() => navigate("/dashboard/edit-template/:templateId")}
                className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaEdit /> Edit
              </button> */}

              <button
                onClick={() => navigate("/template1")}
                className="px-5 cursor-pointer flex gap-2 items-center py-2 bg-primary/90 text-white rounded-lg hover:bg-primary transition"
              >
                <IoMdEye className="text-[20px]" /> Preview
              </button>
            </div>
          </div>
        </div>{" "}
        {/* tempalte2 */}
        <NavLink
          to="/portfolio5"
          data-aos="fade-up"
          data-aos-delay="400"
          className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden"
        >
          {/* ✅ Image */}
          <img
            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
            src={Template2}
            alt="template"
          />

          {/* 🔥 Full Card Blur Overlay */}
          <div
            className="
          absolute inset-0
          backdrop-blur-[3px]

          opacity-0
          group-hover:opacity-100
          transition-all duration-300
          flex items-center justify-center
    "
          >
            {/* 🔥 Buttons */}
            <div className="flex gap-4">
              {/* <button
                onClick={() => console.log("Edit")}
                className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaEdit /> Edit
              </button> */}

              <button
                onClick={() => console.log("Preview")}
                className="px-5 flex gap-2 items-center py-2 bg-primary/90 text-white rounded-lg hover:bg-primary transition"
              >
                <IoMdEye className="text-[20px]" /> Preview
              </button>
            </div>
          </div>
        </NavLink>{" "}
        <NavLink
          to="/portfolio8"
          data-aos="fade-up"
          data-aos-delay="500"
          className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden"
        >
          {/* ✅ Image */}
          <img
            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
            src={Template3}
            alt="template"
          />

          {/* 🔥 Full Card Blur Overlay */}
          <div
            className="
          absolute inset-0
          backdrop-blur-[3px]
          opacity-0
          group-hover:opacity-100
          transition-all duration-300
          flex items-center justify-center
    "
          >
            {/* 🔥 Buttons */}
            <div className="flex gap-4">
              {/* <button
                onClick={() => console.log("Edit")}
                className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <FaEdit /> Edit
              </button> */}

              <button
                onClick={() => console.log("/template-01")}
                className="px-5 flex gap-2 items-center py-2 bg-primary/90 text-white rounded-lg hover:bg-primary transition"
              >
                <IoMdEye className="text-[20px]" /> Preview
              </button>
            </div>
          </div>
        </NavLink>
      </div>
      <NavLink
        data-aos="fade-up"
        data-aos-delay="300"
        className="cursor-pointer"
        to="/template"
      >
        <button
          onClick={() => navigate("/template")}
          className="group cursor-pointer dark:bg-cool-sky  shadow-md w-fit relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-medium  transition duration-200 hover:scale-110"
        >
          <span className="flex dark:text-primary text-secondary dark:text-[#1bfffb] items-center">
            More Template{" "}
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
      </NavLink>
    </div>
  );
}
