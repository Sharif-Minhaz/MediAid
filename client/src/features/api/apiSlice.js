import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api", // optional
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
	tagTypes: ["User","Medicine"],
	endpoints: (builder) => ({}),
});
