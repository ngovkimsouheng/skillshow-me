import React from "react";
import img1 from "./Images/sampleTemplate2.png";
import img2 from "./Images/img2.png"
import img4 from "./Images/img4.png"
import img5 from "./Images/img5.png"
import img6 from "./Images/img6.png"
import img7 from "./Images/7.png"
import img8 from "./Images/8.png"
import img9 from "./Images/9.png"
import img10 from "./Images/10.png"
import img11 from "./Images/11.png"
import img12 from "./Images/12.png"
import img13 from "./Images/13.png"

import { div } from "three/src/nodes/math/OperatorNode.js";
const images = [
  img1,
  img2,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img1,
  img2,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

export default function AutoScrollSlider() {
  return (
    <div className="scroll-wrapper my-4 max-md:pb-4 overflow-hidden w-full ">
      <div className="scroll-container">
        {/* First Set */}
        {images.map((img, index) => (
          <div className="p-2 h-[250px]  w-[390px] bg-white rounded-[24px]">
            <img
              key={`first-${index}`}
              src={img}
              alt="slider"
              className=" rounded-[20px] h-[250px]  w-[390px] h-full overflow-hidden object-cover rounded-xl"
            />
          </div>
        ))}

        {/* Duplicate Set (Important!) */}
        {images.map((img, index) => (
          <div className="p-2 h-[250px] w-[390px] bg-white rounded-[24px]">    <img
            key={`second-${index}`}
            src={img}
            alt="slider"
            className="  rounded-[20px] h-full overflow-hidden object-cover rounded-xl"
          /></div>
        ))}
      </div>
    </div>
  );
}
