import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const medicines = createEntityAdapter({
	sortComparer: (a, b) => b.title.localeCompare(a.title),
});

const initialState = medicines.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMedicines: builder.query({
			query: () => "/medicines",
			transformResponse: (responseData) => {
				return medicines.setAll(initialState, responseData);
			},
			providesTags: (result, error, arg) => [
				{ type: "Medicine", id: "LIST" },
				...result.ids.map((id) => ({ type: "Medicine", id })),
			],
		}),
	}),
});

export const { useGetMedicinesQuery } = extendedApiSlice;