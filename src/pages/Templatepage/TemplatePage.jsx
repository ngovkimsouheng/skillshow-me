import React from "react";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AutoScrollSlider from "./components/AutoScrollSlider";
import Slider from "./components/Slider";
export default function TemplatePage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div
      id="#template"
      className="lg:pt-30 w-full overflow-hidden max-lg:pt-20 lg:pb-10   dark:bg-background-dark bg-background flex flex-col lg:gap-15 "
    >
      <Section01 />
      <AutoScrollSlider />
      <Section02 />
      <Section03 />
    </div>
  );
}
