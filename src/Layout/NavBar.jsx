import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { boolean } from "zod";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Profile from "../auth/Profile";
import UserDetail from "../auth/UserDetail";
import { FaUserCircle } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";

export const NavBar = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  user,
  isLoading,
  setShowProfile,
  navigate
}) => {
  return (
    <div className=" py-2  z-100">
      <SlideTabs
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        user={user}
        isLoading={isLoading}
        setShowProfile={setShowProfile}
        navigate={navigate}
      />
    </div>
  );
};

const SlideTabs = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  user,
  isLoading,
  setShowProfile,
  navigate
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [showMobileProfile, setShowMobileProfile] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="hidden md:flex relative mx-auto w-fit rounded-full border-2 border-black bg-white p-1"
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

      {/* Mobile Navigation - Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg mt-0 z-40"
        >
          <ul className="flex flex-col px-4 py-4 gap-2">
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${isActive
                    ? "bg-black text-white font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${isActive
                    ? "bg-black text-white font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/template"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${isActive
                    ? "bg-black text-white font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                Template
              </NavLink>
            </li>

            {/* Theme Toggle for Mobile */}
            <li className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  Dark Mode
                </span>
                <ThemeToggleButton />
              </div>
            </li>

            {/* Profile Section for Mobile */}
            {isLoading ? (
              <li className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              </li>
            ) : user ? (
              <li className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <button
                  onClick={() => setShowMobileProfile(!showMobileProfile)}
                  className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Profile user={user} />
                </button>

                {/* Mobile Profile Dropdown */}
                {showMobileProfile && (
                  <div className="mt-2 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => {
                        setShowProfile(true);
                        setShowMobileProfile(false);
                      }}
                      className="w-full flex items-center gap-2 text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <FaUserCircle className="text-[20px] fill-primary" />
                      Profile Detail
                    </button>

                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setMobileMenuOpen(false);
                        setShowMobileProfile(false);
                      }}
                      className="w-full flex items-center gap-2 text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiTemplate className="text-[22px] fill-primary" />
                      Dashboard
                    </button>

                    <button
                      onClick={() => {
                        window.location.reload();
                        localStorage.removeItem("token");
                        navigate("/");
                      }}
                      className="w-full flex items-center gap-2 text-left px-4 py-3 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <IoLogOut className="text-[22px]" /> Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                <NavLink
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block px-4 py-2 text-center text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Sign In
                </NavLink>
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </>
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
