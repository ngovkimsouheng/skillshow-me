import { api } from "./api";

export const skillApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /* ================= CREATE ================= */
    createSkill: builder.mutation({
      query: (body) => ({
        url: "/skills/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Skill"],
    }),

    /* ================= GET ================= */
    getSkill: builder.query({
      query: () => ({
        url: "/skills/me",
        method: "GET",
      }),
      providesTags: ["Skill"],
    }),

    /* ================= GET BY ID 🔥 NEW ================= */
    getSkillById: builder.query({
      query: (id) => ({
        url: `/skills/me/${id}`,
        method: "GET",
      }),
      providesTags: ["Skill"],
    }),

    /* ================= DELETE ================= */
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/me/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Skill"],
    }),

    /* ================= UPDATE ================= */
    updateSkill: builder.mutation({
      query: ({ id, body }) => ({
        url: `/skills/me/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Skill"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateSkillMutation,
  useGetSkillQuery,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
  useGetSkillByIdQuery, // ✅ ADD THIS
} = skillApi;
