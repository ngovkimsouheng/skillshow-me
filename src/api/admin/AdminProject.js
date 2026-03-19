import { api } from "../api";

export const adminProjectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjectsAdmin: builder.query({
      query: () => ({
        url: "/admin/projects/",
        method: "GET",
      }),
      providesTags: ["Projects"],
    }),

    getProjectByIdAdmin: builder.query({
      query: (id) => ({
        url: `/admin/projects/${id}`,
        method: "GET",
      }),
      providesTags: ["Project"],
    }),

    deleteProjectAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetAllProjectsAdminQuery,
  useGetProjectByIdAdminQuery,
  useDeleteProjectAdminMutation,
} = adminProjectApi;
