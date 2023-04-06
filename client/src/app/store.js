import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import drawerReducer from "../features/drawer/drawerSlice";
import cartReducer from "../features/cart/cartSlice";
import userInfoReducer from "../features/auth/userInfoSlice";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		drawer: drawerReducer,
		cart: cartReducer,
		userInfo: userInfoReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});
