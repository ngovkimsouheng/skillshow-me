import { api } from "./api";

export const educationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /* ================= CREATE EDUCATION ================= */
    createEducation: builder.mutation({
      query: (body) => ({
        url: "educations/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Education", "Portfolio"], // optional but good practice
    }),
    getEducationById: builder.query({
      query: (id) => ({
        url: `educations/me/${id}`,
        method: "GET",
      }),
      providesTags: ["Education", "Portfolio"],
    }),

    updateEducation: builder.mutation({
      query: ({ id, body }) => ({
        url: `educations/me/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Education", "Portfolio"],
    }),
    /* ================= GET EDUCATION ================= */
    getEducation: builder.query({
      query: () => ({
        url: "educations/me",
        method: "GET",
      }),
      providesTags: ["Education", "Portfolio"],
    }),
    deleteEducation: builder.mutation({
      query: (id) => ({
        url: `/educations/me/${id}`,
        method: "DELETE",
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ["Education", "Portfolio"], // optional
    }),
  }),

  overrideExisting: false,
});

export const {
  useCreateEducationMutation,
  useGetEducationQuery,
  useGetEducationByIdQuery,
  useUpdateEducationMutation,
  useDeleteEducationMutation,
} = educationApi;
