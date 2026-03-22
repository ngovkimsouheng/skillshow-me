import { api } from "./api";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}/`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users", "User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "/users/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    updatePortfolioVisibility: builder.mutation({
      query: ({ userId, is_public }) => ({
        url: `/admin/portfolios/${userId}/visibility`,
        method: "PUT",
        body: { is_public },
      }),
      invalidatesTags: ["Users"], // refresh user list
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useCreateUserMutation,
  useUpdatePortfolioVisibilityMutation,
} = adminApi;
