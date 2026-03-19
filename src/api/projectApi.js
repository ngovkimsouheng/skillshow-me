import { api } from "./api";

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (body) => ({
        url: "/projects/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Project", "Portfolio"], //  if project changes, portfolio likely changes too
    }),

    getProjects: builder.query({
      query: () => "/projects/me",
      method: "GET",
      providesTags: ["Project"],
    }),

    getProjectById: builder.query({
      query: (id) => `/projects/me/${id}`,
      method: "GET",
      providesTags: ["Project", "Portfolio"],
    }),

    updateProject: builder.mutation({
      query: ({ id, body }) => ({
        url: `/projects/me/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [], // Don't invalidate to prevent backend duplication bug
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/me/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project", "Portfolio"], //  refresh both projects and portfolio
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
