import { apiSlice } from "../api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (body) => {
				return {
					url: "/auth/register",
					method: "POST",
					body,
				};
			},
			providesTags: ["User"],
		}),

		login: builder.mutation({
			query: (body) => ({
				url: "/auth/login",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile", "PendingReceive", "Review", "Dashboard"],
		}),

		logout: builder.mutation({
			query: (body) => ({
				url: "/auth/logout",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile"],
		}),

		resetPassword: builder.mutation({
			query: (body) => ({
				url: "/auth/reset-password",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Profile"],
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
	useResetPasswordMutation,
} = extendedApiSlice;
