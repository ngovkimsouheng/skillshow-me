import React from "react";
import { NavBar } from "./NavBar";
import Logo from "../../src/assets/Icon/logo.PNG";
import DarkModeLogo from "../../src/assets/Icon/dark-mode-logo.PNG";
import { FaMoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import ThemeToggleButton from "../components/ThemeToggleButton";
import Footer from "./Footer";
import { useGetMeQuery } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import Profile from "../auth/Profile";
import UserDetail from "../auth/UserDetail";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
export default function Layout() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMeQuery();

  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = data?.data; // API returns data.data
  return (
    <section>
      <nav className="bg-white/5 dark:bg-gray-600/5 dark:backdrop:lg  w-full fixed top-0  z-99 backdrop-blur-lg   shadow-xs">
        <div
          className=" 
      flex xl:mx-auto xl:w-7xl lg:justify-between max-lg:justify-around max-md:gap-1.5  max-md:px-1 md:px-4 items-center"
        >
          <NavLink to="/">
            <img

              className=" md:h-[65px] dark:hidden max-md:h-[40px]  max-sm:h-[35px]"
              src={Logo}
              alt=""
            />{" "}
            <img

              className=" md:h-[65px] hidden dark:block max-md:h-[40px]  max-sm:h-[35px]"
              src={DarkModeLogo}
              alt=""
            />
          </NavLink>
          <NavBar
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            user={user}
            isLoading={isLoading}
            setShowProfile={setShowProfile}
            navigate={navigate}
          />

          {/* Hamburger Menu Button - Only visible on max-md */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden py-3  flex items-center justify-center text-2xl text-black dark:text-white z-50"
          >
            {mobileMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>

          <div className="flex md:gap-4 max-md:gap-0.5 justify-center max-md:hidden items-center">
            {" "}
            <ThemeToggleButton />
            {/* {isLoading ? (
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            ) : user ? (
              // ✅ If logged in → Render Profile Component
              <NavLink>
                <Profile />
              </NavLink>
            ) : (
              // ❌ If not logged in → Show Sign In
              <NavLink
                to="/login"
                className="md:px-4 dark:text-primary text-secondary md:py-2 dark:bg-white max-md:w-[80px] max-sm:w-fit max-md:px-2 max-md:py-1.5 text-white bg-primary rounded-full"
              >
                Sign In
              </NavLink>
            )}{" "} */}
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            ) : user ? (
              <>
                {/* Dropdown Wrapper */}
                <div className="relative group">
                  {/* ✅ Profile Button (Hover Trigger) */}
                  <div className="cursor-pointer">
                    <Profile user={user} />
                  </div>

                  {/* Dropdown Menu (Appears On Hover) */}
                  <div className="absolute right-0 mt-2 w-48 bg-white  shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {/*  User Detail */}

                    <button
                      onClick={() => setShowProfile(true)}
                      className="w-full flex items-center gap-2 text-left px-4 py-3 hover:bg-gray-100 rounded-t-xl"
                    >
                      <FaUserCircle className="text-[20px] fill-primary" />
                      Profile Detail
                    </button>

                    {/* 📊 Dashboard */}
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="w-full  flex items-center gap-2 text-left px-4 py-3 hover:bg-gray-100 dark:hover:gray-300/20"
                    >
                      <HiTemplate className="text-[22px] fill-primary" />{" "}
                      Dashboard
                    </button>

                    {/* 🚪 Logout */}
                    <button
                      onClick={() => {
                        window.location.reload();
                        localStorage.removeItem("token");
                        navigate("/");
                      }}
                      className="w-full flex items-center gap-2 text-left px-4 py-3 text-red-500 hover:bg-gray-100 dark:hover:gray-300/20 rounded-b-xl"
                    >
                      <IoLogOut className="text-[22px]" /> Logout
                    </button>
                  </div>
                  {showProfile && (
                    <UserDetail
                      user={user}
                      onClose={() => setShowProfile(false)}
                    />
                  )}
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className="md:px-4 dark:text-primary text-secondary md:py-2 dark:bg-white max-md:w-[80px] max-sm:w-fit max-md:px-2 max-md:py-1.5 text-white bg-primary rounded-full"
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </section>
  );
}
