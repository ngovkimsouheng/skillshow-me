import React from "react";
import CardMembers from "./CardMembers";
import teacher1 from "./Images/teacher1.png";
import teacher2 from "./Images/teacher2.png";
export default function SectionMembers() {
  const members = [
    {
      id: 1,
      name: "Sok Dara",
      role: "Frontend Developer",
      image: teacher1,
      facebook: "https://facebook.com",
      github: "https://github.com",
      telegram: "https://t.me/username",
    },
    {
      id: 2,
      name: "Chanthy",
      role: "UI/UX Designer",
      image: teacher2,
      facebook: "https://facebook.com",
      github: "",
      telegram: "",
    },
    {
      id: 3,
      name: "Chanthy",
      role: "UI/UX Designer",
      image: teacher2,
      facebook: "https://facebook.com",
      github: "",
      telegram: "",
    },
    {
      id: 4,
      name: "Sok Dara",
      role: "Frontend Developer",
      image: teacher1,
      facebook: "https://facebook.com",
      github: "https://github.com",
      telegram: "https://t.me/username",
    },
    {
      id: 5,
      name: "Sok Dara",
      role: "Frontend Developer",
      image: teacher1,
      facebook: "https://facebook.com",
      github: "https://github.com",
      telegram: "https://t.me/username",
    },
    {
      id: 6,
      name: "Sok Dara",
      role: "Frontend Developer",
      image: teacher1,
      facebook: "https://facebook.com",
      github: "https://github.com",
      telegram: "https://t.me/username",
    },
    {
      id: 7,
      name: "Sok Dara",
      role: "Frontend Developer",
      image: teacher1,
      facebook: "https://facebook.com",
      github: "https://github.com",
      telegram: "https://t.me/username",
    },
  ];
  return (
    <section className="md:flex pb-8 md:flex-col sm:gap-8 md:gap-10">
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
              Members
            </span>
          </p>
        </span>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
        >
          The passionate people driving Skillshow forward
        </p>
      </div>{" "}
      <div className="flex flex-wrap  justify-center gap-y-[35px] gap-x-[97px]">
        {" "}
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
    </section>
  );
}
