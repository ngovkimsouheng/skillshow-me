import React from "react";
import template1 from "./Images/sampleTemplate1.png";
import template2 from "./Images/sampleTemplate2.png";
import template3 from "./Images/sampleTemplate3.png";
import arrow from "./Images/arrow.png";
import arrowDark from "./Images/arrow-dark.png";
import { NavLink } from "react-router";
export default function Section02() {
  return (
    <section className="flex px-2 relative mx-auto flex-wrap max-lg:gap-4 container max-lg:flex-col justify-center items-center">
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-[100px] animate-pulse dark:w-[80px] dark:bg-[#AAD9D9]/80 dark:h-[180px] md:block max-md:hidden h-[250px]  dark:blur-[80px] absolute  left-0 top-0 blur-[130px] bg-amber-300"
      ></div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-[100px] animate-pulse dark:w-[80px] dark:bg-[#AAD9D9]/80 h-[250px] dark:h-[180px] absolute right-0  bottom-0 dark:blur-[80px] blur-[130px] bg-amber-300"
      ></div>
      <div className=" flex-col mx-auto max-sm:items-center max-sm:justify-center flex gap-4 ">
        <h2
          data-aos="fade-right"
          data-aos-delay="350"
          className="text-primary  max-sm:text-center dark:text-white "
        >
          Pick a Template That Matches Your{" "}
          <span className="underline text-secondary">Skill</span>
        </h2>
        {/* developer */}
        <div className="flex  max-md:justify-center max-md:items-center max-md:flex-col gap-4">
          <NavLink
            to="/developer-category"
            data-aos="fade-right"
            data-aos-delay="350"
            className="w-[300px] hover:shadow-md ring ring-cool-sky shadow-2xs p-4 bg-white rounded-[24px]"
          >
            <img className="rounded-[8px]" src={template1} alt="" />
            <div className="flex flex-col pt-3.5 gap-3">
              {" "}
              <div className="flex flex-col gap-0.5">
                {" "}
                <h4 className="text-primary">Developer</h4>
                <p className="font-medium text-text-description">
                  Build and showcase your coding projects.
                </p>
              </div>
              <p className="font-light text-text-description text-sm">
                Present your skills, tech stack, and development experience.
              </p>
            </div>
          </NavLink>{" "}
          {/* Photo grapher */}
          <NavLink
            to="/photographer-category"
            data-aos="fade-right"
            data-aos-delay="550"
            className="w-[300px] hover:shadow-md ring ring-cool-sky shadow-2xs p-4 bg-white rounded-[24px]"
          >
            <img className="rounded-[8px]" src={template2} alt="" />
            <div className="flex flex-col pt-3.5 gap-3">
              {" "}
              <div className="flex flex-col gap-0.5">
                {" "}
                <h4 className="text-primary">Photographer</h4>
                <p className="font-medium text-text-description">
                  Show your best photography moments.
                </p>
              </div>
              <p className="font-light text-text-description text-sm">
                Create a stunning gallery to present your visual stories.
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className=" relative">
        <div className="flex max-md:flex-col gap-4 max-lg:pb-8 lg:pb-13">
          <NavLink
            data-aos="fade-left"
            data-aos-delay="350"
            className="w-[300px] hover:shadow-md ring ring-cool-sky shadow-2xs p-4 bg-white rounded-[24px]"
          >
            <img className="rounded-[8px]" src={template3} alt="" />
            <div className="flex flex-col pt-3.5 gap-3">
              {" "}
              <div className="flex flex-col gap-0.5">
                {" "}
                <h4 className="text-primary">Freelancer</h4>
                <p className="font-medium text-text-description">
                  Promote your services and experience.
                </p>
              </div>
              <p className="font-light text-text-description text-sm">
                Highlight your work, clients, and professional achievements.
              </p>
            </div>
          </NavLink>{" "}
          <NavLink
            data-aos="fade-left"
            data-aos-delay="450"
            className="w-[300px] hover:shadow-md  ring ring-cool-sky shadow-2xs p-4 bg-white rounded-[24px]"
          >
            <img className="rounded-[8px]" src={template1} alt="" />
            <div className="flex flex-col pt-3.5 gap-3">
              {" "}
              <div className="flex flex-col gap-0.5">
                {" "}
                <h4 className="text-primary">Designer</h4>
                <p className="font-medium text-text-description">
                  Display your creative design work.
                </p>
              </div>
              <p className="font-light text-text-description text-sm">
                Showcase UI/UX projects, branding, and visual concepts.
              </p>
            </div>
          </NavLink>
        </div>
        <img
          data-aos="fade-down"
          data-aos-delay="300"
          className="absolute max-lg:hidden block dark:hidden w-[97px] -bottom-2 "
          src={arrow}
          alt="arrow"
        />{" "}
        <img
          data-aos="fade-down"
          data-aos-delay="30"
          className="absolute max-lg:hidden max-lg:hidden hidden dark:block w-[97px] -bottom-2 "
          src={arrowDark}
          alt="arrow"
        />
      </div>
    </section>
  );
}
