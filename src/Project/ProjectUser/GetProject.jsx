import React, { useState } from "react";
import { useGetProjectsQuery } from "../../api/projectApi";
import EditProject from "../../Update/EditProject";

export default function GetProject() {
  const { data, isLoading, isError, error } = useGetProjectsQuery();
  const [editingId, setEditingId] = useState(null);

  if (isLoading) return <p className="p-4">Loading projects...</p>;
  if (isError)
    return (
      <p className="p-4 text-red-500">
        {error?.data?.message || "Failed to fetch projects"}
      </p>
    );

  const projects = data?.data || [];

  return (
    <div className="flex flex-col gap-4 container mx-auto px-4">
      <h1 className="text-4xl font-bold uppercase text-primary sm:text-5xl">
        Projects
      </h1>
      <p className="mt-2 text-gray-600">
        A showcase of my development projects and work.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        {projects.length === 0 ? (
          <p className="text-gray-500">No projects found.</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="relative border p-4 rounded-lg shadow-sm bg-white w-full sm:w-[48%] lg:w-[31%]"
            >
              {project.project_url && (
                <img
                  src={project.project_url}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
              )}
              <p className="font-semibold text-blue-800 text-xl uppercase">
                {project.name}
              </p>
              <p className="text-gray-700 text-sm">{project.description}</p>
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  View GitHub
                </a>
              )}
              <p className="text-xs text-gray-400 mt-2">
                Published: {project.is_published ? "Yes ✅" : "No ❌"}
              </p>

              {/* Edit Button */}
              <button
                onClick={() => setEditingId(project.id)}
                className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      {editingId && (
        <EditProject id={editingId} onClose={() => setEditingId(null)} />
      )}
    </div>
  );
}
