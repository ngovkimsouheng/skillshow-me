import { api } from "../api";

export const adminSocialApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllSocialAccountsAdmin: builder.query({
      query: () => ({
        url: "/admin/social-account/",
        method: "GET",
      }),
      providesTags: ["SocialAccounts"],
    }),

    useGetSocialAccountByIdQuery: builder.query({
      query: (id) => ({
        url: `/admin/social-account/${id}`,
        method: "GET",
      }),
      providesTags: ["SocialAccount"],
    }),

    deleteSocialAccountAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/social-account/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SocialAccounts"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetAllSocialAccountsAdminQuery,
  useGetSocialAccountByIdAdminQuery,
  useDeleteSocialAccountAdminMutation,
} = adminSocialApi;
