import React from "react";
import { useGetEducationQuery } from "../../api/educationApi";
import school from "../Job/icon/High School-amico.svg";
import { Navigate, useNavigate } from "react-router";
export default function GetEducation() {
  const { data, isLoading, isError, error } = useGetEducationQuery();
  let navigate = useNavigate();
  if (isLoading) {
    return <p className="p-4">Loading education...</p>;
  }

  if (isError) {
    return (
      <p className="p-4 text-red-500">
        Error: {error?.data?.message || "Failed to fetch data"}
      </p>
    );
  }

  return (
    <section className="lg:pt-33 pt-4 sm:pt-8">
      {/* Hero Text */}
      <section className=" flex pb-8 px-4 items-center mx-auto justify-between container max-w-7xl justify-between">
        {" "}
        <div className="flex flex-col gap-4  ">
          <h1 className="text-4xl uppercase  font-bold text-primary sm:text-5xl">
            education
            {/* My Education <span className="text-secondary"> journey</span> */}
          </h1>
          {/* <p className="mt-4 text-lg text-gray-600">
            Here's a quick look at my academic background :
          </p> */}
          {data?.data?.length === 0 ? (
            <p className="text-center text-gray-500">No education found.</p>
          ) : (
            data?.data?.slice(0, 1).map((edu) => (
              <div key={edu.id} className=" flex flex-col gap-4  ">
                <a
                  href={edu.institute_url}
                  className="font-semibold text-primary uppercase text-3xl text-primaryhover:underline"
                >
                  {" "}
                  <span className="  font-black underline">
                    {edu.institute_name}
                  </span>
                </a>
                <p className="text-xl text-gray-600">
                  <span className="tracking-widest">{edu.degree_name} .</span>
                </p>
                <p className="text-[16px] w-fit  text-gray-400">
                  {edu.started_at} - {edu.end_at || "Present"}
                </p>
                <button onClick={() => navigate(`/education/edit/${edu.id}`)}>
                  Edit
                </button>
              </div>
            ))
          )}
        </div>
        {/* <img className="w-[350px]" src={school} alt="" /> */}
      </section>
      {/* Education Card */}
      {/* <div className="max-w-xl pt-6 mx-auto">
        {data?.data?.length === 0 ? (
          <p className="text-center text-gray-500">No education found.</p>
        ) : (
          data?.data?.slice(0, 1).map((edu) => (
            <div
              key={edu.id}
              className="border border-cool-sky flex flex-col gap-4 rounded-2xl p-6 shadow-xs bg-white "
            >
              <a
                href={edu.institute_url}
                className="font-semibold uppercase text-xl text-primaryhover:underline"
              >
                {edu.institute_name}
              </a>
              <p className="text-sm text-gray-600">Major: {edu.degree_name}</p>
              <p className="text-xs text-gray-400">
                {edu.started_at} - {edu.end_at || "Present"}
              </p>
            </div>
          ))
        )}
      </div> */}
    </section>
  );
}
