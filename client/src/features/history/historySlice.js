import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewHistory: builder.query({
			query: () => {
				return {
					url: "/history/",
					method: "GET",
				};
			},
			providesTags: ["History"],
		}),
	}),
});

export const { useViewHistoryQuery } = extendedApiSlice;
