import { api } from "./api";

export const jobApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (body) => ({
        url: "/jobs/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Job", "Portfolio"], // ✅ if job changes, portfolio likely changes too
    }),

    getJob: builder.query({
      query: () => ({
        url: "jobs/me",
        method: "GET",
      }),
      providesTags: ["Job", "Portfolio"], // ✅ if jobs change, portfolio likely changes too
    }),

    getJobById: builder.query({
      query: (id) => ({
        url: `/jobs/me/${id}`,
        method: "GET",
      }),
      providesTags: ["Job", "Portfolio"], // ✅ if job changes, portfolio likely changes too
    }),

    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/me/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Job", "Portfolio"], // ✅ if job is deleted, portfolio likely changes too
    }),

    updateJob: builder.mutation({
      query: ({ id, body }) => ({
        url: `/jobs/me/${id}`,
        method: "PUT",
        body,
      }),

      invalidatesTags: ["Job", "Portfolio"], // ✅ if job changes, portfolio likely changes too
    }),
  }),

  overrideExisting: false,
});

// ✅ Updated Export
export const {
  useCreateJobMutation,
  useGetJobQuery,
  useGetJobByIdQuery, // ✅ MUST EXIST
  useDeleteJobMutation,
  useUpdateJobMutation,
} = jobApi;
