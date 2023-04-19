import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getDashboardCardData: builder.query({
			query: () => {
				return {
					url: "/dashboard/cards",
					method: "GET",
				};
			},
			providesTags: ["Dashboard"],
		}),

		getDashboardBarData: builder.query({
			query: (year) => {
				return {
					url: `/dashboard/barChart/${year}`,
					method: "GET",
				};
			},
			providesTags: ["Dashboard"],
		}),

		getDashboardChartData: builder.query({
			query: () => {
				return {
					url: "/dashboard/chart",
					method: "GET",
				};
			},
			providesTags: ["Dashboard"],
		}),
	}),
});

export const {
	useGetDashboardCardDataQuery,
	useGetDashboardChartDataQuery,
	useGetDashboardBarDataQuery,
} = extendedApiSlice;
