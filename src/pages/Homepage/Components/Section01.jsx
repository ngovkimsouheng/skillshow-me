import React from "react";
import OverwrapImage from "./OverwrapImage";
import CurvedLoop from "./CurvedLoop";
import TextType from "./TypeText";
export default function Section01() {
  return (
    <div className="flex w-full overflow-x-hidden  pt-10 flex-col max-sm:gap-5 pb-10">
      <div className="text-center font-['Poppins-Bold',_sans-serif] max-sm:text-[40px] max-md:text-[43px]  text-[70px] leading-[75px] max-md:leading-[45px] font-bold">
        <span>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-primary dark:text-white"
          >
            For Creatives, By{" "}
            <span className="text-secondary dark:text-[#1bfffb] ">
              {" "}
              Creative
              {/* <TextType
                className="text-secondary"
                text={["Creator", "Designer", "Makers"]}
                typingSpeed={85}
                pauseDuration={1500}
                showCursor
                cursorCharacter="|"
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120} 
                cursorBlinkDuration={0.5}
              /> */}
            </span>
          </p>
        </span>
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
      >
        Portfoliobox is a website builder made for creatives, offering
        specialized features and great pricing to help them build standout
        portfolios.
      </p>
      <OverwrapImage></OverwrapImage>
      <CurvedLoop
        data-aos="fade-up"
        data-aos-delay="500"
        marqueeText="Build your Portfolio with our template ✦"
        speed={2}
        curveAmount={270}
        direction="right"
        interactive
        className="custom-text-style"
      />
    </div>
  );
}
