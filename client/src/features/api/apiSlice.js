import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api", // optional
	baseQuery: fetchBaseQuery({
		// baseUrl: "http://localhost:8080/api",
		baseUrl: "https://mediaid.onrender.com/api",
		// baseUrl: "https://mediaid-production.up.railway.app/api",
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
