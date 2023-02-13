import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api", // optional
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
	tagTypes: ["Medicines"],
	endpoints: (builder) => ({}),
});
