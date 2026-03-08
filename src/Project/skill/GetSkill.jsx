import React from "react";
import { useGetSkillQuery } from "../../api/skillApi";
import DeleteSkill from "./DeleteSkill";
import { useNavigate } from "react-router";
export default function GetSkill() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetSkillQuery();

  if (isLoading) {
    return <p className="p-4">Loading skills...</p>;
  }

  if (isError) {
    return (
      <p className="p-4 text-red-500">
        Error: {error?.data?.message || "Failed to fetch data"}
      </p>
    );
  }

  return (
    <section className=" container pb-8  mx-auto px-4 flex flex-col gap-4">
      <div className="text-start max-w-7xl">
        <h1 className="text-4xl uppercase font-bold text-primary sm:text-5xl">
          Skills
        </h1>
        <p className="mt-4   text-lg text-gray-600">
          Technologies and tools I use to build modern web applications and
          digital experiences.
        </p>
      </div>
      <div className="flex  container   gap-4 flex-wrap">
        {data?.data?.slice(0, 5).map((skill) => (
          <div
            key={skill.id}
            className="border border-cool-sky bg-white  flex-col w-32 h-32 flex items-center justify-center rounded-[24px]  text-center shadow-sm hover:shadow-md transition"
          >
            <img
              src={skill.logo_url}
              alt={skill.name}
              className="w-12 h-12 mx-auto object-cover rounded-lg"
            />
            <h5 className="mt-2 text- font-medium">{skill.name}</h5>
            {/* <div key={skill.id}>
              <DeleteSkill skillId={skill.id} />
            </div> */}
            {/* <p className="text-sm text-gray-500">
            Proficiency: {skill.proficiency}
          </p> */}
            <button onClick={() => navigate(`/skills/edit/${skill.id}`)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
