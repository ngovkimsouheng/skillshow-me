import React from "react";
import RegisterForm from "../../auth/RegisterForm";
import Login from "../../auth/Login";
import Section01 from "./components/Section01";
import CardMembers from "./components/CardMembers";
import SectionMentors from "./components/SectionMentors";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Particles from "../Templatepage/Categories/components/Particles";
import Hero from "./components/Hero";
import SectionMembers from "./components/SectionMembers";
export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className="pt-17 flex flex-col relative  w-full overflow-x-hidden x dark:dark:bg-[#030423]">
      {/* <div className='w-[100%] absolute  sm:h-[85vh]  lg:h-[100vh] max-sm:h-[100vh] max-sm:mt-20 max-sm:my-8  relative' >
        
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
        />      <Particles
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
        />      <Particles
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
      </div> */}
      <Hero />
      {/* <HeroSection /> */}
      <Section01 />
      <SectionMentors />
      <SectionMembers />

    </div>
  );
}
