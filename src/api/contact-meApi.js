// import { api } from "./api";

// export const contactMeApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     createContact: builder.mutation({
//       query: ({ user_id, body }) => ({
//         url: `/contact-me/${user_id}`,
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// export const { useCreateContactMutation } = contactMeApi;

import { api } from "./api";

export const contactMeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /* ================= CREATE ================= */
    createContact: builder.mutation({
      query: ({ user_id, body }) => ({
        url: `/contact-me/${user_id}`,
        method: "POST",
        body,
      }),
    }),

    getMyContacts: builder.query({
      query: () => ({
        url: "/contact-me/me",
        method: "GET",
      }),
    }),
    /* ================= GET BY ID (for edit) ================= */
    getContactById: builder.query({
      query: (id) => ({
        url: `/contact-me/me/${id}`,
        method: "GET",
      }),
    }),

    /* ================= UPDATE ================= */
    updateContact: builder.mutation({
      query: ({ id, body }) => ({
        url: `/contact-me/me/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact-me/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"], // optional for auto refresh
    }),
  }),
});

export const {
  useCreateContactMutation,
  useGetContactByIdQuery,
  useGetMyContactsQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactMeApi;
