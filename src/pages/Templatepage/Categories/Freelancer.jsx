import React from 'react'
import Particles from './components/Particles'
import LogoLoop from './components/LogoLoop';
import { IoMdEye } from 'react-icons/io';
import vector1 from './vector1.png'
import darkvector1 from './darkVector1.png'
import vector2 from './vector2.png'
import darkvector2 from './darkVector2.png'
import cover1 from "../components/Images/cover1.jpg"
import cover2 from "../components/Images/cover2.jpg"
import cover3 from "../components/Images/cover3.jpg"
import cover4 from "../components/Images/cover4.jpg"
import cover5 from "../components/Images/cover5.jpg"
import cover6 from "../components/Images/cover6.jpg"

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import TextType from '../../Homepage/Components/TypeText';
import { NavLink } from 'react-router';
import AutoScrollSlider from '../components/AutoScrollSlider';
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
        <section className=' bg-background  dark:bg-background-dark'>
            <section className='max-md:flex pt-5   container mx-auto max-w-7xl relative max-sm:h-[100vh] sm:h-[85vh] lg:h-[100vh] max-md:flex-col max-md:gap-50'>

                <div className='w-[100%]  sm:h-[85vh]  lg:h-[100vh] max-sm:h-[100vh] max-sm:mt-20 max-sm:my-8  relative' >
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
                <img data-aos="fade-right"
                    data-aos-duration="1200" className='w-60 max-sm:w-35  left-10 block dark:hidden top-30 absolute' src={vector1} alt="Vector 1" />
                <img data-aos="flip-up"
                    data-aos-duration="1200" className='w-60 max-sm:w-35  right-10 block dark:hidden bottom-30 max-lg:bottom-10  absolute' src={vector2} alt="Vector 2" />
                <img data-aos="flip-up"
                    data-aos-duration="1200" className='w-60 max-sm:w-35 left-10 hidden dark:block top-30 absolute' src={darkvector1} alt="Dark Vector 1" />
                <img data-aos="flip-up"
                    data-aos-duration="1200" className='w-60 max-sm:w-35 right-10 hidden dark:block bottom-30 max-lg:bottom-10  absolute' src={darkvector2} alt="Dark Vector 2" />
            </section>
            <div className='mb-8'>
                <AutoScrollSlider />
            </div>
            <section id='templates' className="flex  pb-8 justify-center items-center max-lg:pb-8 flex-col md:gap-16 lg:gap-8">
                <div className="text-center font-['Poppins-Bold',_sans-serif] max-sm:text-[40px] max-md:text-[43px] text-[70px] leading-[75px] max-md:leading-[45px] font-bold">
                    <span>
                        <div className="text-primary dark:text-white">
                            Discover Our <br className="lg:hidden block" />
                            <span className="text-secondary dark:text-[#1bfffb]">
                                <TextType
                                    className="text-secondary dark:text-[#1bfffb]"
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

                <div className="grid place-items-center max-sm:mt-8 max-md:gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-6 container mx-auto lg:px-6">



                    <NavLink data-aos="flip-up"
                        className="relative  w-[370px] lg:w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <img
                            className="rounded-[16px]  w-full transition-transform duration-300 group-hover:scale-108 h-[230px]"
                            src={cover1}
                            alt="template"
                        />
                        <div className="absolute inset-0 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-4">
                                {/* <button className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    <FaEdit /> Edit
                                </button> */}
                                <button className="px-5 flex gap-2 items-center py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
                                    <IoMdEye className="text-[20px]" /> Preview
                                </button>
                            </div>
                        </div>
                    </NavLink>

                    <div data-aos="flip-up" className="relative  w-[370px] lg:w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
                        <p className='absolute text-xl text-end right-2 text-primary bg-secondary px-4 py-1 rounded-full'>Comming soon</p>
                        <img
                            className="rounded-[16px] h-[230px] w-full transition-transform duration-300 "
                            src={cover2}
                            alt="template"
                        />


                    </div>


                </div>
            </section>
        </section>
    )
}
