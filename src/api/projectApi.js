import { api } from "./api";

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (body) => ({
        url: "/projects/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Project"],
    }),

    getProjects: builder.query({
      query: () => "/projects/me",
      providesTags: ["Project"],
    }),

    getProjectById: builder.query({
      query: (id) => `/projects/me/${id}`,
      providesTags: ["Project"],
    }),

    updateProject: builder.mutation({
      query: ({ id, body }) => ({
        url: `/projects/me/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/me/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"], // ✅ automatically refresh getProjects
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateProjectMutation,
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
