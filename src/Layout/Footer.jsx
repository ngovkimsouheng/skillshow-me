import React from "react";
import Logo from "../../src/assets/Icon/logo.PNG";
import DarkModeLogo from "../../src/assets/Icon/dark-mode-logo.PNG";
import IstadLogo from "../../src/assets/Icon/IstadLogo.png";
import IstadLogoDark from "../../src/assets/Icon/IstadLogoDark.png";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { NavLink } from "react-router";
import { DrawCircleText } from "./DrawCircleText";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950">
      <DrawCircleText />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-sm sm:text-base">
        <div className="flex justify-center md:justify-start">
          <NavLink className="">
            <img
              src={Logo}
              alt="Logo 1"
              className="w-60 h-40  block dark:hidden object-contain"
            />{" "}
            <img
              src={DarkModeLogo}
              alt="Logo 1"
              className="w-60 dark:block hidden h-40 object-contain"
            />
          </NavLink>
        </div>

        <div className="flex flex-col max-lg:mt-3 items-center md:items-start gap-5">
          <h4 className="text-primary  dark:text-cool-sky font-semibold text-lg">
            Social media
          </h4>
          <div className="flex gap-4 text-primary">
            {/* <!-- Facebook --> */}

            <NavLink className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all duration-300 ease-in-out active:translate-y-[2px] active:shadow-none">
              <FaFacebookF className="text-[28px]" />
            </NavLink>

            {/* <!-- TikTok --> */}
            <NavLink className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all duration-300 ease-in-out active:translate-y-[2px] active:shadow-none">
              <FaTiktok className="text-[28px]" />
            </NavLink>

            {/* <!-- YouTube --> */}
            <NavLink className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all duration-300 ease-in-out active:translate-y-[2px] active:shadow-none">
              <FaFacebookMessenger className="text-[28px]" />
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center md:items-start">
          <h4 className="text-primary dark:text-cool-sky font-semibold text-lg">
            Links
          </h4>
          <NavLink className="text-[18px] text-accent dark:text-white transition">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-[18px] text-accent dark:text-white transition"
          >
            About
          </NavLink>{" "}
          <NavLink
            to="/template"
            className="text-[18px] text-accent dark:text-white transition"
          >
            Template
          </NavLink>
        </div>

        <div className="flex flex-col gap-5 items-center md:items-start">
          <h4 className="text-primary dark:text-cool-sky font-semibold text-lg max-sm:text-center">
            Sponsored and organized by
          </h4>
          {/* <!-- <p className="dark:text-accent">
            Institute of Science and Technology Advanced Development (ISTAD)
          </p> --> */}
          <NavLink>
            {/* <!-- Light mode logo --> */}
            <img
              src={IstadLogo}
              alt="Logo"
              className="w-50 object-contain dark:hidden"
            />

            {/* <!-- Dark mode logo --> */}
            <img
              src={IstadLogoDark}
              alt="Logo White"
              className="w-50 object-contain hidden dark:block"
            />
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
