import React from "react";
import vector1 from "../../Homepage/Components/images/dashVector01.png";
import vector2 from "../../Homepage/Components/images/dashVector02.png";
import vector1Dark from "../../Homepage/Components//images/dashVector01-dark.png";
import vector2Dark from "../../Homepage/Components//images/dashVector02-dark.png";
import BlurText from "../../Homepage/Components/BlurText";
export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div>
      <section className="w-full md:pt-6 max-sm:pt-10 lg:h-[90vh]  overflow-hidden">
        <div className="w-full flex items-center justify-center relative">
          <div className="w-full relative h-full max-w-screen relative rounded-tl-3xl rounded-tr-3xl">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-[100px] animate-pulse dark:w-[80px] dark:bg-[#AAD9D9]/80 dark:h-[180px] md:block max-md:hidden h-[250px] dark:top-25 dark:blur-[80px] absolute  left-40 top-20 blur-[130px] bg-amber-300"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="w-[100px] animate-pulse dark:w-[80px] dark:bg-[#AAD9D9]/80 h-[250px] dark:h-[180px] absolute  right-40 dark:bottom-25 bottom-20 dark:blur-[80px] blur-[130px] bg-amber-300"
            ></div>
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
              className="w-[250px]  max-sm:w-[200px] max-sm:opacity-50 hidden dark:block"
              src={vector1Dark}
              alt="vector"
            />

            {/* Right Background Vector */}
            <img
              data-aos="fade-left"
              data-aos-duration="1400"
              className="absolute  max-sm:w-[200px] max-sm:opacity-50 block dark:hidden top-0 right-0 w-[250px]"
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

            <div className="absolute inset-0 flex flex-col max-sm:gap-5 justify-center items-center text-center gap-10 px-6">
              {" "}
              <div
                data-aos="zoom-in"
                data-aos-delay="500"
                className="md:w-120 w-90 h-0.5 bg-secondary mt-10 mb-6"
              />
              <h1 className="text-primary   dark:text-white leading-snug  text-2xl md:text-5xl">
                <div
                  data-aos="fade-down"
                  data-aos-delay="400"
                  className="flex w-7xl mx-auto container justify-center  "
                >
                  "
                  <BlurText
                    text=" Your porfolio is your"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-center"
                    onAnimationComplete={handleAnimationComplete}
                  />
                  <div className="text-secondary dark:text-[#1bfffb] max-md:pl-2 md:pl-3.5">
                    <BlurText
                      text="Story ."
                      delay={800}
                      animateBy="words"
                      direction=""
                      className="text-center"
                      onAnimationComplete={handleAnimationComplete}
                    />
                  </div>{" "}
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className=" flex items-center flex-col w-7xl justify-center text-center container mx-auto"
                >
                  <BlurText
                    text=" we provide the canvas to "
                    delay={200}
                    direction="bottom"
                    className="text-center"
                    onAnimationComplete={handleAnimationComplete}
                  />{" "}
                  <div className="flex ">
                    <BlurText
                      text=" tell it beautifully. "
                      delay={200}
                      direction="bottom"
                      className="text-center"
                      onAnimationComplete={handleAnimationComplete}
                    />
                    "
                  </div>
                </div>
              </h1>
              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="w-55 h-0.5 bg-secondary mt-10 mb-6"
              />
              <p
                data-aos="fade-up"
                className="text-text-description dark:text-white text-2xl  "
              >
                — The Skillshow Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
