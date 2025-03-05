import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api", // optional
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		credentials: "include",
	}),
	tagTypes: [
		"User",
		"Dashboard",
		"Medicine",
		"Review",
		"Rating",
		"Gallery",
		"HealthTip",
		"Profile",
		"History",
		"PendingDonation",
		"PendingReceive",
		"BestDonors",
		"DonatedMedicines",
		"ReceivedMedicines",
	],
	endpoints: (builder) => ({}),
});
