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
  }),
});

export const { useGetMyPortfolioQuery } = portfolioApi;
