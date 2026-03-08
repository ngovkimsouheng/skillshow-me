import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center"
    >
      {/* SUN */}
      <svg
        viewBox="0 -960 960 960"
        className="
      absolute h-7 w-7 fill-secondary
      transition-all duration-300 ease-in-out
      opacity-100 scale-100 rotate-0
      dark:opacity-0 dark:scale-50 dark:rotate-90
    "
      >
        <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm268 452q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z" />
      </svg>

      {/* MOON */}
      <svg
        viewBox="0 -960 960 960"
        className="
      absolute h-7 w-7 fill-white
      transition-all duration-300 ease-in-out
      opacity-0 scale-50 -rotate-90
      dark:opacity-100 dark:scale-100 dark:rotate-0
    "
      >
        <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Z" />
      </svg>
    </button>
  );
}
