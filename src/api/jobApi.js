import { api } from "./api";

export const jobApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (body) => ({
        url: "/jobs/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Job"],
    }),

    getJob: builder.query({
      query: () => ({
        url: "jobs/me",
        method: "GET",
      }),
      providesTags: ["Job"],
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/jobs/me/${id}`,
        method: "GET",
      }),
      providesTags: ["Job"],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/me/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Job"],
    }),

    updateJob: builder.mutation({
      query: ({ id, body }) => ({
        url: `/jobs/me/${id}`,
        method: "PUT", // or PATCH if your backend uses PATCH
        body,
      }),
      invalidatesTags: ["Job"],
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
