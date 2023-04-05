import { Navigate } from "react-router-dom";

const Admin = ({ condition, children }) => {
	if (!condition) {
		toast.error("Unauthorized access");
		return <Navigate to="/" replace />;
	}
	return children;
};

export default Admin;
