import React from 'react'
import Particles from './components/Particles'
import LogoLoop from './components/LogoLoop';
import { IoMdEye } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';
import template1 from "../components/Images/sampleTemplate1.png"
import template2 from "../components/Images/sampleTemplate2.png"
import template3 from "../components/Images/sampleTemplate3.png"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import TextType from '../../Homepage/Components/TypeText';
import { NavLink } from 'react-router';
export default function Freelancer() {


    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    ];

    // Alternative with image sources
    const imageLogos = [
        { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
        { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
        { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
    ];

    return (
        <section className=' bg-background dark:bg-blackground-dark'>
            <section>
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    <Particles
                        particleColors={["#ffffff"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.4}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={1}
                    />

                </div>
                <div className="w-full  flex items-center justify-center">
                    <div className="absolute inset-0 flex flex-col max-sm:gap-5 justify-center items-center text-center gap-10 px-6">
                        {/* Title */}
                        <h1
                            data-aos="flip-up"
                            data-aos-duration="1200"
                            className="text-primary dark:text-white max-md:text-4xl text-[100px] font-bold leading-tight"
                        >
                            Showcase Your
                            <br />
                            <span className="text-secondary dark:text-[#1bfffb]">Technical Skills</span>
                        </h1>

                        {/* Subtitle */}
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-[24px] text-text-description max-sm:text-[14px] mx-auto max-w-4xl dark:text-cool-sky max-lg:text-[20px] max-lg:px-4 mt-4 text-center font-['Poppins-Light',_sans-serif] text-line-height-24"
                        >
                            Transform your projects, skills, and experience into a modern developer portfolio that stands out to recruiters and clients.
                        </p>



                    </div>

                </div>
                <div className='h-[200px] relative overflow-hidden pt-8' >
                    {/* Basic horizontal loop */}
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        direction="left"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#ffffff"
                        ariaLabel="Technology partners"
                    />

                    {/* Vertical loop with deceleration on hover */}
                    {/* <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="right"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={0}
                    fadeOut
                    useCustomRender={false}
                /> */}
                </div>
            </section>
            <section className="flex pb-8 justify-center items-center max-lg:pb-8 flex-col gap-8">
                <div className="text-center font-['Poppins-Bold',_sans-serif] max-sm:text-[40px] max-md:text-[43px] text-[70px] leading-[75px] max-md:leading-[45px] font-bold">
                    <span>
                        <div className="text-primary dark:text-white">
                            Discover Our <br className="lg:hidden block" />
                            <span className="text-secondary">
                                <TextType
                                    className="text-secondary"
                                    text={["Templates", "Interfaces"]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor
                                    cursorCharacter="|"
                                    deletingSpeed={50}
                                    cursorBlinkDuration={0.5}
                                />
                            </span>
                        </div>
                    </span>
                </div>

                <div className="grid place-items-center max-md:gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-6 container mx-auto lg:px-6">
                    {/* ✅ FIRST 3 (ALWAYS VISIBLE) */}


                    <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <img
                            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
                            src={template1}
                            alt="template"
                        />
                        <div className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-4">
                                <button className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    <FaEdit /> Edit
                                </button>
                                <button className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    <IoMdEye className="text-[20px]" /> Preview
                                </button>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <img
                            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
                            src={template2}
                            alt="template"
                        />
                        <div className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-4">
                                <button className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    <FaEdit /> Edit
                                </button>
                                <button className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    <IoMdEye className="text-[20px]" /> Preview
                                </button>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <img
                            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
                            src={template3}
                            alt="template"
                        />
                        <div className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-4">

                                <button className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    <IoMdEye className="text-[20px]" /> Preview
                                </button>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <img
                            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
                            src={template1}
                            alt="template"
                        />
                        <div className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-4">
                                <button className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    <FaEdit /> Edit
                                </button>
                                <button className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    <IoMdEye className="text-[20px]" /> Preview
                                </button>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <img
                            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
                            src={template2}
                            alt="template"
                        />
                        <div className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-4">
                                <button className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    <FaEdit /> Edit
                                </button>
                                <button className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    <IoMdEye className="text-[20px]" /> Preview
                                </button>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <img
                            className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
                            src={template3}
                            alt="template"
                        />
                        <div className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-4">

                                <button className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    <IoMdEye className="text-[20px]" /> Preview
                                </button>
                            </div>
                        </div>
                    </NavLink>

                </div>
            </section>
        </section>
    )
}
