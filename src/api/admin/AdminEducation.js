import { api } from "../api";

export const adminEducationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEducationsAdmin: builder.query({
      query: () => ({
        url: "/admin/educations/",
        method: "GET",
      }),
      providesTags: ["Educations"],
    }),
    deleteEducationAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/educations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Educations"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllEducationsAdminQuery,
  useDeleteEducationAdminMutation,
} = adminEducationApi;
