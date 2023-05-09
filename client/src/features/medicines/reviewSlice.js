import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewReviews: builder.query({
			query: (medicineId) => {
				return {
					url: `/review/${medicineId}`,
					method: "GET",
				};
			},
			providesTags: ["Review"],
		}),

		userReview: builder.query({
			query: (medicineId) => {
				return {
					url: `/review/user/${medicineId}`,
					method: "GET",
				};
			},
			providesTags: ["Review"],
		}),

		addReview: builder.mutation({
			query: (body) => {
				return {
					url: "/review/add",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["Review", "Rating"],
		}),

		getMedicineRating: builder.query({
			query: (medicineId) => `/review/medicine/${medicineId}`,
			providesTags: ["Rating"],
		}),
	}),
});

export const {
	useViewReviewsQuery,
	useAddReviewMutation,
	useUserReviewQuery,
	useGetMedicineRatingQuery,
} = extendedApiSlice;
