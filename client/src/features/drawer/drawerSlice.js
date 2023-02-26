import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	leftDrawerOpen: true,
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
	},
});

export const drawerStatus = (state) => state.drawer.leftDrawerOpen;

export const { open, toggle, close } = drawerSlice.actions;

export default drawerSlice.reducer;
