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
      query: (is_public) => ({
        url: "porfolios/me/visibility",
        method: "PUT",
        // body: { is_public: true },
        body: { is_public },
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
