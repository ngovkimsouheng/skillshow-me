// import { api } from "./api";

// export const socialAccountApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     createSocialAccount: builder.mutation({
//       query: (body) => ({
//         url: "/social-account/",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["SocialAccount"],
//     }),

//     getSocialAccounts: builder.query({
//       query: () => "/social-account/me",
//       providesTags: ["SocialAccount"],
//     }),
//   }),
// });

// export const { useCreateSocialAccountMutation, useGetSocialAccountsQuery } =
//   socialAccountApi;
import { api } from "./api";

export const socialAccountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /* ================= CREATE ================= */
    createSocialAccount: builder.mutation({
      query: (body) => ({
        url: "/social-account/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["SocialAccount"],
    }),

    /* ================= GET ALL (ME) ================= */
    getSocialAccounts: builder.query({
      query: () => "/social-account/me",
      providesTags: ["SocialAccount"],
    }),

    /* ================= GET BY ID ================= */
    getSocialAccountById: builder.query({
      query: (id) => `/social-account/me/${id}`,
      providesTags: ["SocialAccount"],
    }),

    /* ================= UPDATE ================= */
    updateSocialAccount: builder.mutation({
      query: ({ id, body }) => ({
        url: `/social-account/me/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["SocialAccount"],
    }),
    deleteSocialAccount: builder.mutation({
      query: (id) => ({
        url: `/social-account/me/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SocialAccount"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useCreateSocialAccountMutation,
  useGetSocialAccountsQuery,
  useGetSocialAccountByIdQuery,
  useUpdateSocialAccountMutation,
  useDeleteSocialAccountMutation,
} = socialAccountApi;
