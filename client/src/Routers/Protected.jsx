import { useState } from "react";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/getUserInfo";
import { toast } from "react-toastify";

const Protected = ({ children }) => {
	const [user, _] = useState(getUserInfo());

	if (!user?.user_type) {
		toast.error("Login required for this action");
		return <Navigate to="/login" replace />;
	}
	return children;
};

export default Protected;
