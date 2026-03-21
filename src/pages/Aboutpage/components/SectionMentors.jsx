import React from "react";
import CardMembers from "./CardMembers";
import teacher1 from "./Images/teacher1.png";
import teacher2 from "./Images/teacher2.png";
export default function SectionMentors() {
  const members = [
    {
      id: 1,
      name: "Mom Reksmey",
      role: "Mentor",
      image: teacher1,
      facebook: "https://facebook.com",
      github: "https://github.com",
      telegram: "https://t.me/username",
    },
    {
      id: 2,
      name: "Sreng Chipor",
      role: "Mentor",
      image: teacher2,
      facebook: "https://facebook.com",
      github: "https://github.com",
      telegram: "https://t.me/username",
    },
  ];
  return (
    <section className="md:flex    py-8 gap-8 md:flex-col items-center  justify-center sm:gap-8 md:gap-10">
      <div className="max-sm:pb-8">
        <span className="text-center  max-sm:text-[40px] max-md:text-[43px]  text-[70px] leading-[75px] max-md:leading-[45px] font-bold">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-primary dark:text-white"
          >
            Our
            <span className="text-secondary dark:text-[#1bfffb] ">
              {" "}
              Mentors
            </span>
          </p>
        </span>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
        >
          Guided by industry leaders who inspire excellence and innovation.
        </p>
      </div>{" "}
      <div className="flex  relative  sm:flex-wrap max-sm:flex-col   justify-center md:gap-[97px]">
        {" "}     <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="w-[100px] h-[100px] absolute -left-80 -top-10 blur-[100px] dark:bg-[#AAD9D9]/80 bg-amber-300"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="w-[100px] h-[100px] absolute -right-80 bottom-0 blur-[100px] dark:bg-[#AAD9D9]/80 bg-amber-300"
        ></div>
        {members.map((member) => (
          <CardMembers
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            facebook={member.facebook}
            github={member.github}
            telegram={member.telegram}
          />
        ))}
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="500"
        className="md:w-180   border border-b-2 dark:border-secondary-dark border-secondary w-90 max-sm:mt-8 mx-auto  max-sm:w-80 h-0.5  "
      />

    </section>
  );
}
