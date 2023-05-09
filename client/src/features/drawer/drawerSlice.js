import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	leftDrawerOpen: true,
	rightDrawerOpen: false,
};

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		open: (state) => {
			state.leftDrawerOpen = true;
		},
		toggle: (state) => {
			state.leftDrawerOpen = !state.leftDrawerOpen;
		},
		close: (state) => {
			state.leftDrawerOpen = false;
		},
		openCart: (state) => {
			state.rightDrawerOpen = true;
		},
		closeCart: (state) => {
			state.rightDrawerOpen = false;
		},
	},
});

export const drawerStatus = (state) => state.drawer.leftDrawerOpen;
export const cartDrawerStatus = (state) => state.drawer.rightDrawerOpen;

export const { open, toggle, close, openCart, closeCart } = drawerSlice.actions;

export default drawerSlice.reducer;
