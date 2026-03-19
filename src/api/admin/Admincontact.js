import { api } from "../api";

export const adminContactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllContactsAdmin: builder.query({
      query: () => ({
        url: "/admin/contact-me/",
        method: "GET",
      }),
      providesTags: ["Contacts"],
    }),
    getContactByIdAdmin: builder.query({
      query: (id) => ({
        url: "https://skillshow-api.srengchipor.dev/admin/contact-me/" + id,
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    deleteContactAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/contact-me/${id}`,
        method: "DELETE",
        responseHandler: "text", // <-- prevents JSON parse error
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllContactsAdminQuery,
  useGetContactByIdAdminQuery,
  useDeleteContactAdminMutation,
} = adminContactApi;
