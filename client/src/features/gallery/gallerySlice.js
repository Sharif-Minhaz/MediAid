import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewAllGalleryImg: builder.query({
			query: () => "/gallery",
			providesTags: ["Gallery"],
		}),

		addGalleryImg: builder.mutation({
			query: (body) => {
				const payload = new FormData();
				for (const [key, value] of Object.entries(body)) {
					payload.append(key, value);
				}

				return {
					url: "/gallery/add",
					method: "POST",
					body: payload,
				};
			},
			invalidatesTags: ["Gallery"],
		}),
	}),
});

export const { useAddGalleryImgMutation, useViewAllGalleryImgQuery } = extendedApiSlice;
