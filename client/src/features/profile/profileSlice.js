import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewProfile: builder.query({
			query: () => {
				return {
					url: `/profile`,
					method: "GET",
				};
			},
			providesTags: ["Profile"],
		}),

		findProfile: builder.query({
			query: (id) => {
				return {
					url: `/profile/find/${id}`,
					method: "GET",
				};
			},
			providesTags: ["Profile"],
		}),

		updateProfile: builder.mutation({
			query: (body) => {
				const payload = new FormData();

				for (const [key, value] of Object.entries(body)) {
					payload.append(key, value);
				}

				return { url: "/profile/edit", method: "PATCH", body: payload };
			},
			invalidatesTags: ["Profile"],
		}),

		bestDonors: builder.query({
			query: () => {
				return {
					url: "/best-donors",
				};
			},
			providesTags: ["BestDonors"],
		}),
	}),
});

export const {
	useViewProfileQuery,
	useUpdateProfileMutation,
	useFindProfileQuery,
	useBestDonorsQuery,
} = extendedApiSlice;
