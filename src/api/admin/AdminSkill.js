import { api } from "../api";

export const adminSkillApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkillsAdmin: builder.query({
      query: () => ({
        url: "/admin/skills/",
        method: "GET",
      }),
      providesTags: ["Skills"],
    }),

    getSkillByIdAdmin: builder.query({
      query: (id) => ({
        url: `/admin/skills/${id}`,
        method: "GET",
      }),
      providesTags: ["Skill"],
    }),

    deleteSkillAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skills"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetAllSkillsAdminQuery,
  useGetSkillByIdAdminQuery,
  useDeleteSkillAdminMutation,
} = adminSkillApi;
