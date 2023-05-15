import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../utils/getUserInfo";

const { _id, email, user_type } = getUserInfo();

const initialState = {
	id: _id,
	email,
	user_type,
};

export const userInfo = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		set: (state) => {
			const userInfo = getUserInfo();
			state.id = userInfo?._id || "";
			state.email = userInfo?.email || "";
			state.user_type = userInfo?.user_type || "";
		},
	},
});

export const userInfoStatus = (state) => state.userInfo;

export const { set } = userInfo.actions;

export default userInfo.reducer;
