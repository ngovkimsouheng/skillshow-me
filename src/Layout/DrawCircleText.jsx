import React from "react";
import { motion } from "framer-motion";

export const DrawCircleText = () => {
  return (
    <div className="grid   place-content-center bg-[#1e1e1e] px-4 py-10 text-yellow-50">
      <h1 className="max-w-2xl  text-center font-medium text-5xl leading-snug">
        Build your{"  "}
        <span className="relative text-secondary">
          Portfolio
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute w-[210px] -left-2.5 -right-0 -top-0 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </span>{" "}
        <br /> with our template
      </h1>
    </div>
  );
};
