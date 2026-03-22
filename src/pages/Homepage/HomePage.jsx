import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Herosection from "./Components/Herosection";
import Section0 from "./Components/Section0";
import Section01 from "./Components/Section01";
import Section02 from "./Components/Section02";
import Section03 from "./Components/Section03";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);



  return (
    <div className="dark:bg-background-dark overflow-hidden bg-background w-full">
      {/* SEO & Social Meta */}


      <div>

        <Herosection />
        <Section0 />
        <Section01 />
        <Section02 />
        <Section03 />
      </div>
    </div>
  );
}