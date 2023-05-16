import { useState } from "react";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/getUserInfo";

const AlreadyLoggedIn = ({ children }) => {
	const [user, _] = useState(getUserInfo());

	if (user?.user_type) {
		return <Navigate to="/profile" replace />;
	}
	return children;
};

export default AlreadyLoggedIn;
