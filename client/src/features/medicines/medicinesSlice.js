import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewAllMedicines: builder.query({
			query: () => "/medicines",
			providesTags: (result) =>
				result.medicines?.length
					? result.medicines.map(({ _id }) => ({ type: "Medicine", id: _id }))
					: ["Medicine"],
		}),

		viewSingleMedicine: builder.query({
			query: (medicineId) => `/medicines/${medicineId}`,
			providesTags: (result) =>
				result.medicine ? [{ type: "Medicine", id: result.medicine?._id }] : ["Medicine"],
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
			invalidatesTags: ["Medicine", "BestDonors"],
		}),

		donateMedicine: builder.mutation({
			query: (body) => {
				const payload = new FormData();

				for (const [key, value] of Object.entries(body)) {
					payload.append(key, value);
				}

				return {
					url: "/medicines/donate",
					method: "POST",
					body: payload,
				};
			},
			invalidatesTags: ["PendingDonation", "History", "BestDonors"],
		}),

		applyMedicine: builder.mutation({
			query: (body) => {
				return {
					url: "/medicines/apply",
					method: "POST",
					body,
				};
			},
			invalidatesTags: ["PendingReceive", "History"],
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
			invalidatesTags: (result) =>
				result.updateMedicine
					? [{ type: "Medicine", id: result.updatedMedicine?._id }]
					: ["Medicine"],
		}),

		deleteMedicine: builder.mutation({
			query: (medicineId) => {
				return {
					url: `/medicines/delete/${medicineId}`,
					method: "DELETE",
				};
			},
			invalidatesTags: ["Medicine"],
		}),

		getDonatedMedicines: builder.query({
			query: () => "/medicines/donated/all",
			providesTags: ["DonatedMedicines"],
		}),

		getReceivedMedicines: builder.query({
			query: () => "/medicines/received/all",
			providesTags: ["ReceivedMedicines"],
		}),

		getTopRatedMedicines: builder.query({
			query: () => "/medicines/topRated/5",
			providesTags: ["Medicine"],
		}),
	}),
});

export const {
	useViewAllMedicinesQuery,
	useViewSingleMedicineQuery,
	useAddMedicineMutation,
	useUpdateMedicineMutation,
	useDeleteMedicineMutation,
	useDonateMedicineMutation,
	useApplyMedicineMutation,
	useGetDonatedMedicinesQuery,
	useGetReceivedMedicinesQuery,
	useGetTopRatedMedicinesQuery,
} = extendedApiSlice;
