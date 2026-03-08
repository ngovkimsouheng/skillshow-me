import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { boolean } from "zod";

export const NavBar = () => {
  return (
    <div className=" py-2 sticky top-0 z-100">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {/* <Tab setPosition={setPosition}>Home</Tab> */}
      <div className="max-md:hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold" : "text-primary"
          }
        >
          <Tab setPosition={setPosition} className="">
            Home
          </Tab>
        </NavLink>
      </div>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "font-semibold" : "text-primary"
        }
      >
        <Tab setPosition={setPosition}>About</Tab>
      </NavLink>
      <NavLink
        to="/template"
        className={({ isActive }) =>
          isActive ? "font-semibold " : "text-primary"
        }
      >
        <Tab setPosition={setPosition}>Tempalte</Tab>
      </NavLink>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute  z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
