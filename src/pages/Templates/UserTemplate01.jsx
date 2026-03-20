import React from "react";
import GetEducation from "../../Project/Education/GetEducation";
import GetJob from "../../Project/Job/GetJob";
import GetSkill from "../../Project/skill/GetSkill";
import GetSocailAccount from "../../Project/SocailAccount/GetSocailAccount";
import ContactForm from "../../../post/ContactForm";
import GetUserProfile from "../../Project/HeroSection-UserProfile/GetUserProfile";
import GetContact from "../../Project/Contact/GetContact";
import GetProject from "../../Project/ProjectUser/GetProject";
export default function UserTemplate01() {
  return (
    <section>
      {" "}
      <div className="lg:grid max-lg:flex max-lg:flex-col  pb-8 container px-4 mx-auto lg:grid-cols-[30%_65%] lg:gap-20 justify-center">
        <div>
          {" "}
          <GetUserProfile />
        </div>
        <div className="flex flex-col lg:gap-8">
          <GetEducation />
          <GetSkill />
          <GetJob />
          <GetSocailAccount />
          <GetContact />
          <GetProject />
        </div>
      </div>
    </section>
  );
}
