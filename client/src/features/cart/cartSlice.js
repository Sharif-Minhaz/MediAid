import { createSlice } from "@reduxjs/toolkit";
import secureStorage from "react-secure-storage";

const initialState = {
	cartItems: secureStorage.getItem("cartItems") || [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action) => {
			state.cartItems.push(action.payload);
			secureStorage.setItem("cartItems", state.cartItems);
		},
		cancel: (state, action) => {
			const item = action.payload;

			state.cartItems = state.cartItems.filter((existedItem) => {
				return existedItem._id !== item._id;
			});

			secureStorage.setItem("cartItems", state.cartItems);
		},
	},
});

export const cartItemStatus = (state) => state.cart.cartItems;

export const { add, cancel } = cartSlice.actions;

export default cartSlice.reducer;
