import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (body) => ({
				url: "/auth/register",
				method: "POST",
				body,
			}),
			providesTags: ["User"],
		}),
		login: builder.mutation({
			query: (body) => ({
				url: "/auth/login",
				method: "POST",
				body,
			}),
			providesTags: ["User"],
		}),
		logout: builder.mutation({
			query: (body) => ({
				url: "/auth/logout",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = extendedApiSlice;
