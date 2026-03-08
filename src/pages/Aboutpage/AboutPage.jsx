import React from "react";
import RegisterForm from "../../auth/RegisterForm";
import Login from "../../auth/Login";
import Section01 from "./components/Section01";
import CardMembers from "./components/CardMembers";
import SectionMentors from "./components/SectionMentors";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import SectionMembers from "./components/SectionMembers";
export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className="pt-17 flex flex-col  w-full overflow-x-hidden x dark:dark:bg-[#030423]">
      <Hero />
      {/* <HeroSection /> */}
      <Section01 />
      <SectionMentors />
      <SectionMembers />
    </div>
  );
}
