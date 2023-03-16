import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, item) => {
			state.cartItems.push(item);
		},
	},
});

export const cartItemStatus = (state) => state.cart.cartItems;

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
