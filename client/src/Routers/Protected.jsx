import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/getUserInfo";
import { useState } from "react";
import { toast } from "react-toastify";

const Protected = ({ children }) => {
	const [userType, setUserType] = useState(getUserInfo());

	if (!userType) {
		toast.error("Login required for this action");
		return <Navigate to="/login" replace />;
	}
	return children;
};

export default Protected;
