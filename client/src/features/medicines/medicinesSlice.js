import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewAllMedicines: builder.query({
			query: () => "/medicines",
			providesTags: ["Medicine"],
		}),
		addMedicine: builder.mutation({
			query: (body) => {
				const payload = new FormData();

				for (const [key, value] of Object.entries(body)) {
					payload.append(key, value);
				}

				return {
					url: "/medicines/add",
					method: "POST",
					body: payload,
				};
			},
			invalidatesTags: ["Medicine"],
		}),
		updateMedicine: builder.mutation({
			query: ({ body, medicineId }) => {
				const payload = new FormData();

				for (const [key, value] of Object.entries(body)) {
					payload.append(key, value);
				}

				return {
					url: `/medicines/update/${medicineId}`,
					method: "PATCH",
					body: payload,
				};
			},
			invalidatesTags: ["Medicine"],
		}),
	}),
});

export const { useViewAllMedicinesQuery, useAddMedicineMutation, useUpdateMedicineMutation } =
	extendedApiSlice;
