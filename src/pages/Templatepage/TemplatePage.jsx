import React from "react";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AutoScrollSlider from "./components/AutoScrollSlider";
import Slider from "./components/Slider";
import vector1 from "./Categories/vector1.png";
import vector2 from "./Categories/vector2.png";
import darkVector1 from "./Categories/darkVector1.png";
import darkVector2 from "./Categories/darkVector2.png";
import Particles from "./Categories/components/Particles";
export default function TemplatePage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div
      id="#template"
      className=" w-full overflow-hidden max-lg:pt-20  pb-10  dark:bg-background-dark bg-background flex flex-col lg:gap-15 "
    >
      <section>
        <section className='max-md:flex pt-5   container mx-auto max-w-7xl relative max-sm:h-[100vh] sm:h-[85vh] lg:h-[100vh] max-md:flex-col max-md:gap-50'>

          <div className='w-[100%] overflow-visible  z-10 sm:h-[85vh]  lg:h-[100vh] max-sm:h-[100vh] max-sm:mt-20 max-sm:my-8  relative' >
            <Particles
              particleCount={500}
              particleSpread={10}
              speed={0.4}
              particleColors={["#ffffff"]}
              moveParticlesOnHover
              particleHoverFactor={1}
              alphaParticles={false}
              particleBaseSize={60}
              sizeRandomness={3}
              cameraDistance={31}
              disableRotation={false}
            />
            <div className="w-full   flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col max-sm:gap-5 justify-center items-center text-center  px-6">
                {/* Title */}
                <h1
                  data-aos="flip-up"
                  data-aos-duration="1200"
                  className="text-primary dark:text-white sm:text-6xl  lg:text-[70px] font-bold leading-tight"
                >
                  Showcase Your
                  <br />
                  <span className="text-secondary dark:text-[#1bfffb]">Freelance Expertise</span>
                </h1>

                {/* Subtitle */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
                >
                  Transform your projects, skills, and experience into a modern developer portfolio that stands out to recruiters and clients.
                </p>

                <a
                  href='#templates'
                  className="group cursor-pointer md:mt-10 cursor-pointer dark:bg-cool-sky  shadow-md w-fit relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-medium  transition duration-200 hover:scale-110"
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
                </a>


              </div>

            </div>

          </div>
          <img
            className='w-60 max-sm:w-35  left-10 block dark:hidden top-30 absolute' src={vector1} alt="Vector 1" />
          <img
            className='w-60 max-sm:w-35  right-10 block dark:hidden bottom-30 max-lg:bottom-10  absolute' src={vector2} alt="Vector 2" />
          <img
            className='w-60 max-sm:w-35 left-10 hidden dark:block top-30 absolute' src={darkVector1} alt="Dark Vector 1" />
          <img
            className='w-60 max-sm:w-35 right-10 hidden dark:block bottom-30 max-lg:bottom-10  absolute' src={darkVector2} alt="Dark Vector 2" />
        </section>
        <Section01 />
      </section>
      <AutoScrollSlider />
      <Section02 />
      <Section03 />
    </div>
  );
}
