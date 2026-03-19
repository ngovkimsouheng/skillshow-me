import { api } from "../api";

export const adminJobApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobsAdmin: builder.query({
      query: () => ({
        url: "/admin/jobs/",
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),

    getJobByIdAdmin: builder.query({
      query: (id) => ({
        url: `/admin/jobs/${id}`,
        method: "GET",
      }),
      providesTags: ["Job"],
    }),

    deleteJobAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/jobs/${id}`, // keep trailing slash
        method: "DELETE",
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),

  overrideExisting: true, // ⭐ important
});

export const { useGetAllJobsAdminQuery, useGetJobByIdAdminQuery, useDeleteJobAdminMutation } =
  adminJobApi;
