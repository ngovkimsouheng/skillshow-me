// // ThemeContext.js
// import React, { createContext, useState, useEffect, useContext } from "react";

// const ThemeContext = createContext(null);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light"); // Default to light mode

//   useEffect(() => {
//     // Load saved theme from localStorage on initial load
//     const savedTheme = localStorage.getItem("appTheme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     // Update the data-theme attribute on the document element
//     document.documentElement.setAttribute("data-theme", theme);
//     // Persist the theme in localStorage
//     localStorage.setItem("appTheme", theme);
//   }, [theme]); // Run whenever the theme state changes

//   const toggleTheme = () => {
//     setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(
    () => localStorage.getItem("appTheme") || "light"
  );

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("appTheme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook
export const useTheme = () => useContext(ThemeContext);