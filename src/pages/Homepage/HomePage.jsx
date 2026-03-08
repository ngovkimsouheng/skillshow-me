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

  const title = "SkillShow - Create Your Personal Portfolio in Minutes";
  const description =
    "SkillShow lets you build a modern, professional personal portfolio in just a few minutes. Showcase your skills, projects, and achievements effortlessly and impress recruiters or clients.";
  const url = "https://www.skillshow.com"; // your live URL
  const image = "https://www.skillshow.com/logo.png"; // absolute URL to your thumbnail

  return (
    <div className="dark:bg-[#030423] overflow-hidden bg-background w-full">
      {/* SEO & Social Meta */}
      <Helmet>
        {/* Basic Meta */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph / Facebook / Telegram */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content="SkillShow modern portfolio thumbnail" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

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