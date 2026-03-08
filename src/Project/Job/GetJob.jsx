import React, { useState } from "react";
import { useGetJobQuery } from "../../api/jobApi";
import DeleteJob from "./DeleteJob";
import EditJob from "../../Update/EditJob";
import school from "../Job/icon/High School-amico.svg";

export default function GetJob() {
  const { data, isLoading, isError, error } = useGetJobQuery();

  /* ✅ Edit State */
  const [selectedJob, setSelectedJob] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  if (isLoading) {
    return <p className="p-4">Loading jobcation...</p>;
  }

  if (isError) {
    return (
      <p className="p-4 text-red-500">
        Error: {error?.data?.message || "Failed to fetch data"}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4 container mx-auto px-4">
      {/* Hero Section */}
      <div className="text-start max-w-7xl">
        <h1 className="text-4xl font-bold uppercase text-primary sm:text-5xl">
          Experience
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          A quick overview of my work experience and professional journey.
        </p>
      </div>

      {/* Job Cards */}
      <div className="max-w-7xl">
        {data?.data?.length === 0 ? (
          <p className="text-center text-gray-500">No job experience found.</p>
        ) : (
          data?.data?.map((job) => (
            <div
              key={job.id}
              className="border my-4 border-cool-sky flex flex-col gap-2.5 rounded-2xl p-6 shadow-xs bg-white"
            >
              {/* Company */}
              <p className="font-semibold text-blue-800 text-xl uppercase">
                {job.company_name}
              </p>

              {/* Role */}
              <p className="text-text-description text-[16px]">{job.role}</p>

              {/* Dates */}
              <p className="text-[14px] text-gray-400">
                {job.started_at} -
                {job.ended_at === "0001-01-01" || !job.ended_at
                  ? " Present"
                  : ` ${job.ended_at}`}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-3">
                {/* Delete */}
                <DeleteJob jobId={job.id} />

                {/* Edit */}
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setShowEdit(true);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ✅ Edit Modal */}
      {showEdit && selectedJob && (
        <EditJob
          job={selectedJob}
          onClose={() => {
            setShowEdit(false);
            setSelectedJob(null);
          }}
        />
      )}
    </div>
  );
}
