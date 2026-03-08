import React from "react";
import circle from "./Images/circle.png";
import circleDark from "./Images/circle-dark.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

export default function CardMembers({
  image,
  name,
  role,
  facebook,
  github,
  telegram,
}) {
  return (
    <section className="flex justify-center items-center flex-col gap-2.5">
      <div className="relative rounded-full">
        <img
          data-aos="flip-left"
          data-aos-delay="250"
          className="overflow-hidden w-[230px] rounded-full"
          src={image}
          alt={name}
        />
        <img
          data-aos="flip-right"
          data-aos-delay="450"
          className="w-[230px] block dark:hidden  top-0 absolute"
          src={circle}
          alt="circle"
        />
        <img
          data-aos="flip-right"
          data-aos-delay="450"
          className="w-[230px] hidden dark:block  top-0 absolute"
          src={circleDark}
          alt="circle"
        />
      </div>

      <h4 className="text-lg text-primary dark:text-white font-semibold">{name}</h4>

      <p className="bg-amber-200/20 dark:bg-cool-sky/20 text-primary dark:text-white rounded-full px-4 py-1">{role}</p>

      <div className="flex gap-3 mt-2 text-2xl">
        {facebook && (
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-1 hover:scale-110 transition"
          >
            <FaFacebook className="text-[28px] text-primary" />
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-1 hover:scale-110 transition"
          >
            <IoLogoGithub className="text-[28px] text-primary" />
          </a>
        )}

        {telegram && (
          <a
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-1 hover:scale-110 transition"
          >
            <FaTelegram className="text-[28px] text-primary" />
          </a>
        )}
      </div>
    </section>
  );
}
