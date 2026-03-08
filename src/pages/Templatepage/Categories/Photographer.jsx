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
import GridMotion from './components/GridMotion';
export default function Photographer() {


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


    // note: you'll need to make sure the parent container of this component is sized properly
    const items = [
        'Item 1',
        <div key='jsx-item-1'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 2',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 4',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 5',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 7',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 8',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 10',
        <div key='jsx-item-3'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 11',
        <div key='jsx-item-2'>Custom JSX Content</div>,
        'Item 13',
        <div key='jsx-item-4'>Custom JSX Content</div>,
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Item 14',
        // Add more items as needed
    ];

    return (
        <section className=' bg-background dark:bg-primary'>
            <section>
                <GridMotion items={items}

                    gradientColor="black"
                />
            </section>
            <section className="flex pt-8 pb-8 justify-center items-center max-lg:pb-8 flex-col gap-8">
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
