import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (register) => ({
        url: "auth/register",
        method: "POST",
        body: register,
      }),
    }),

    login: builder.mutation({
      query: (loginBody) => ({
        url: "auth/login",
        method: "POST",
        body: loginBody,
      }),
    }),
    uploadFile: builder.mutation({
      query: (formData) => ({
        url: "files/upload",
        method: "POST",
        body: formData,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "users/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User", "Portfolio"], // auto refresh
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useUploadFileMutation,
  useUpdateUserMutation,
} = authApi;
