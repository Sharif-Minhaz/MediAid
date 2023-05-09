import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewAllHealthTips: builder.query({
			query: () => "/health-tips",
			providesTags: ["HealthTip"],
		}),

		viewSingleHealthTip: builder.query({
			query: (healthTipId) => `/health-tips/${healthTipId}`,
			providesTags: ["HealthTip"],
		}),

		addHealthTip: builder.mutation({
			query: (body) => {
				return {
					url: "/health-tips/add",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["HealthTip"],
		}),

		updateHealthTip: builder.mutation({
			query: ({ body, healthTipId }) => {
				return {
					url: `/health-tips/update/${healthTipId}`,
					method: "PATCH",
					body,
				};
			},
			invalidatesTags: ["HealthTip"],
		}),
	}),
});

export const {
	useAddHealthTipMutation,
	useUpdateHealthTipMutation,
	useViewAllHealthTipsQuery,
	useViewSingleHealthTipQuery,
} = extendedApiSlice;
