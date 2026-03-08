import React from "react";
import img1 from "./Images/sampleTemplate2.png";
import img2 from "./Images/img2.png"

import img4 from "./Images/img4.png"
import img5 from "./Images/img5.png"
import img6 from "./Images/img6.png"
import { div } from "three/src/nodes/math/OperatorNode.js";
const images = [
  img1,
  img2,
  img4,
  img5,
  img6,
  img2,
  img4,
  img5,
  img6,
  img1,
  img2,
  img4,
  img5,
  img6,
  img2,
  img4,
  img5,
  img6,
];

export default function AutoScrollSlider() {
  return (
    <div className="scroll-wrapper my-4 max-md:pb-4 overflow-hidden w-full ">
      <div className="scroll-container">
        {/* First Set */}
        {images.map((img, index) => (
          <div className="p-2  w-[390px] bg-white rounded-[24px]">
            <img
              key={`first-${index}`}
              src={img}
              alt="slider"
              className=" rounded-[20px] h-full overflow-hidden object-cover rounded-xl"
            />
          </div>
        ))}

        {/* Duplicate Set (Important!) */}
        {images.map((img, index) => (
          <div className="p-2 w-[390px] bg-white rounded-[24px]">    <img
            key={`second-${index}`}
            src={img}
            alt="slider"
            className=" rounded-[20px] h-full object-contain rounded-xl"
          /></div>
        ))}
      </div>
    </div>
  );
}
