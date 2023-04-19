import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		pendingDonations: builder.query({
			query: () => "/pending/donation",
			providesTags: ["PendingDonation"],
		}),

		pendingDonationAccept: builder.mutation({
			query: (medicineId) => ({
				url: `/pending/donation/accept/${medicineId}`,
				method: "PATCH",
			}),
			invalidatesTags: ["PendingDonation", "Medicine", "DonatedMedicines", "Dashboard"],
		}),

		pendingDonationReject: builder.mutation({
			query: (medicineId) => ({
				url: `/pending/donation/reject/${medicineId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["PendingDonation"],
		}),

		pendingApplication: builder.query({
			query: () => "/pending/receive",
			providesTags: ["PendingReceive"],
		}),

		acceptedApplication: builder.query({
			query: () => "/pending/receive/accepted",
			providesTags: ["PendingReceive"],
		}),

		userCartItem: builder.query({
			query: () => "/pending/receive/cart",
			providesTags: ["PendingReceive"],
		}),

		pendingApplyAccept: builder.mutation({
			query: ({ medicineId, applicationId }) => ({
				url: `/pending/receive/accept/${medicineId}/${applicationId}`,
				method: "PATCH",
			}),
			invalidatesTags: ["PendingReceive", "ReceivedMedicines", "Dashboard"],
		}),

		pendingApplyReject: builder.mutation({
			query: (applicationId) => ({
				url: `/pending/receive/reject/${applicationId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["PendingReceive"],
		}),
	}),
});

export const {
	usePendingDonationsQuery,
	usePendingDonationAcceptMutation,
	usePendingDonationRejectMutation,
	usePendingApplicationQuery,
	usePendingApplyAcceptMutation,
	usePendingApplyRejectMutation,
	useUserCartItemQuery,
	useAcceptedApplicationQuery,
} = extendedApiSlice;
