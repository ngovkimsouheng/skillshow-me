import { api } from "./api";

export const portfolioApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /* ================= GET MY PORTFOLIO ================= */
    getMyPortfolio: builder.query({
      query: () => ({
        url: "porfolios/me",
        method: "GET",
      }),
      providesTags: ["Portfolio"],
    }),
    getPortfolioByUsername: builder.query({
      query: (username) => ({
        url: `porfolios/${username}`,
        method: "GET",
      }),
      providesTags: ["Portfolio"],
    }),
    /* ================= UPDATE MY PORTFOLIO ================= */
    updateMyPortfolio: builder.mutation({
      query: () => ({
        url: "porfolios/me/visibility",
        method: "PUT",
        body: { is_public: true },
      }),
      invalidatesTags: ["Portfolio"],
    }),
  }),
});

export const {
  useGetMyPortfolioQuery,
  useGetPortfolioByUsernameQuery,
  useUpdateMyPortfolioMutation,
} = portfolioApi;
