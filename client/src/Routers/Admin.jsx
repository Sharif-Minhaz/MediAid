import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserInfo } from "../utils/getUserInfo";

const Admin = ({ children }) => {
	const [user, _] = useState(getUserInfo());

	if (user?.user_type !== "admin") {
		toast.error("Unauthorized access");
		return <Navigate to="/" replace />;
	}
	return children;
};

export default Admin;
