// import React from "react";
// import template1 from "./Images/sampleTemplate1.png";
// import template2 from "./Images/sampleTemplate2.png";
// import template3 from "./Images/sampleTemplate3.png";
// import { FaEdit } from "react-icons/fa";
// import { IoMdEye } from "react-icons/io";
// import { NavLink } from "react-router";
// import TextType from "../../Homepage/Components/TypeText";
// export default function Section03() {
//   return (
//     <section className="flex justify-center items-center max-lg:pb-8 flex-col gap-8">
//       <div className="text-center font-['Poppins-Bold',_sans-serif] max-sm:text-[40px] max-md:text-[43px]  text-[70px] leading-[75px] max-md:leading-[45px] font-bold">
//         <span>
//           <div className="text-primary dark:text-white">
//             Discover Our <br className="sm:hidden block" />
//             <span className="text-secondary  ">
//               {" "}
//               {/* Templates */}
//               <TextType
//                 className="text-secondary"
//                 text={["Templates", "Interfaces"]}
//                 typingSpeed={75}
//                 pauseDuration={1500}
//                 showCursor
//                 cursorCharacter="|"
//                 deletingSpeed={50}
//                 // variableSpeedEnabled={false}
//                 // variableSpeedMin={60}
//                 // variableSpeedMax={120}
//                 cursorBlinkDuration={0.5}
//               />
//             </span>
//           </div>
//         </span>
//       </div>
//       <div className="grid place-items-center max-md:gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    md:gap-6 container mx-auto lg:px-6">
//         {" "}
//         <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
//           {/* ✅ Image */}
//           <img
//             className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
//             src={template1}
//             alt="template"
//           />

//           {/* 🔥 Full Card Blur Overlay */}
//           <div
//             className="
//           absolute inset-0
//           backdrop-blur-[3px]
//           opacity-0
//           group-hover:opacity-100
//           transition-all duration-300
//           flex items-center justify-center
//     "
//           >
//             {/* 🔥 Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => console.log("Edit")}
//                 className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 <FaEdit /> Edit
//               </button>

//               <button
//                 onClick={() => console.log("Preview")}
//                 className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 <IoMdEye className="text-[20px]" /> Preview
//               </button>
//             </div>
//           </div>
//         </NavLink>
//         <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
//           {/* ✅ Image */}
//           <img
//             className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
//             src={template2}
//             alt="template"
//           />

//           {/* 🔥 Full Card Blur Overlay */}
//           <div
//             className="
//           absolute inset-0
//           backdrop-blur-[3px]
//           opacity-0
//           group-hover:opacity-100
//           transition-all duration-300
//           flex items-center justify-center
//     "
//           >
//             {/* 🔥 Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => console.log("Edit")}
//                 className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 <FaEdit /> Edit
//               </button>

//               <button
//                 onClick={() => console.log("Preview")}
//                 className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 <IoMdEye className="text-[20px]" /> Preview
//               </button>
//             </div>
//           </div>
//         </NavLink>
//         <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
//           {/* ✅ Image */}
//           <img
//             className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
//             src={template3}
//             alt="template"
//           />

//           {/* 🔥 Full Card Blur Overlay */}
//           <div
//             className="
//           absolute inset-0
//           backdrop-blur-[3px]
//           opacity-0
//           group-hover:opacity-100
//           transition-all duration-300
//           flex items-center justify-center
//     "
//           >
//             {/* 🔥 Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => console.log("Edit")}
//                 className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 <FaEdit /> Edit
//               </button>

//               <button
//                 onClick={() => console.log("Preview")}
//                 className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 <IoMdEye className="text-[20px]" /> Preview
//               </button>
//             </div>
//           </div>
//         </NavLink>{" "}
//         <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
//           {/* ✅ Image */}
//           <img
//             className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
//             src={template2}
//             alt="template"
//           />

//           {/* 🔥 Full Card Blur Overlay */}
//           <div
//             className="
//           absolute inset-0
//           backdrop-blur-[3px]
//           opacity-0
//           group-hover:opacity-100
//           transition-all duration-300
//           flex items-center justify-center
//     "
//           >
//             {/* 🔥 Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => console.log("Edit")}
//                 className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 <FaEdit /> Edit
//               </button>

//               <button
//                 onClick={() => console.log("Preview")}
//                 className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 <IoMdEye className="text-[20px]" /> Preview
//               </button>
//             </div>
//           </div>
//         </NavLink>{" "}
//         <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
//           {/* ✅ Image */}
//           <img
//             className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
//             src={template3}
//             alt="template"
//           />

//           {/* 🔥 Full Card Blur Overlay */}
//           <div
//             className="
//           absolute inset-0
//           backdrop-blur-[3px]
//           opacity-0
//           group-hover:opacity-100
//           transition-all duration-300
//           flex items-center justify-center
//     "
//           >
//             {/* 🔥 Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => console.log("Edit")}
//                 className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 <FaEdit /> Edit
//               </button>

//               <button
//                 onClick={() => console.log("Preview")}
//                 className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 <IoMdEye className="text-[20px]" /> Preview
//               </button>
//             </div>
//           </div>
//         </NavLink>{" "}
//         <NavLink className="relative w-[390px] p-2 max-sm:w-[350px] rounded-[24px] bg-white shadow-md group overflow-hidden">
//           {/* ✅ Image */}
//           <img
//             className="rounded-[16px] w-full transition-transform duration-300 group-hover:scale-108"
//             src={template1}
//             alt="template"
//           />

//           {/* 🔥 Full Card Blur Overlay */}
//           <div
//             className="
//           absolute inset-0
//           backdrop-blur-[3px]
//           opacity-0
//           group-hover:opacity-100
//           transition-all duration-300
//           flex items-center justify-center
//     "
//           >
//             {/* 🔥 Buttons */}
//             <div className="flex gap-4">
//               <button
//                 onClick={() => console.log("Edit")}
//                 className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 <FaEdit /> Edit
//               </button>

//               <button
//                 onClick={() => console.log("Preview")}
//                 className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 <IoMdEye className="text-[20px]" /> Preview
//               </button>
//             </div>
//           </div>
//         </NavLink>
//       </div>
//       <NavLink>
//         <button className="group dark:bg-cool-sky  shadow-md w-fit relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-medium  transition duration-200 hover:scale-110">
//           <span className="flex dark:text-primary text-secondary items-center">
//             See More{" "}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-2"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="3"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </span>
//           <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
//             <div className="relative h-full w-8 bg-white/20"></div>
//           </div>
//         </button>
//       </NavLink>
//     </section>
//   );
// }
import React, { useState } from "react";
import template1 from "./Images/sampleTemplate1.png";
import template2 from "./Images/sampleTemplate2.png";
import template3 from "./Images/sampleTemplate3.png";
import { FaEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router";
import TextType from "../../Homepage/Components/TypeText";

export default function Section03() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="template" className="flex justify-center items-center max-lg:pb-8 flex-col gap-8">
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
              <button className="px-5 flex gap-2 items-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <FaEdit /> Edit
              </button>
              <button className="px-5 flex gap-2 items-center py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                <IoMdEye className="text-[20px]" /> Preview
              </button>
            </div>
          </div>
        </NavLink>

        {/* ✅ EXTRA TEMPLATES (SHOW ONLY IF showAll = true) */}

        {showAll && (
          <>
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
            </NavLink>{" "}
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
            </NavLink>{" "}
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
          </>
        )}
      </div>

      {/* ✅ TOGGLE BUTTON */}

      <button
        onClick={() => setShowAll(!showAll)}
        className="group dark:bg-cool-sky shadow-md w-fit relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-6 font-medium transition duration-200 hover:scale-110"
      >
        <span className="flex dark:text-primary text-secondary items-center">
          {showAll ? "See Less" : "See More"}
        </span>
      </button>
    </section>
  );
}
