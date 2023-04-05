import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api", // optional
	baseQuery: fetchBaseQuery({
		// baseUrl: "https://mediaid.onrender.com/api",
		baseUrl: "http://localhost:8080/api",
		credentials: "include",
	}),
	tagTypes: ["User", "Medicine", "Gallery", "HealthTip", "Profile"],
	endpoints: (builder) => ({}),
});
