import "./Home.css";
import { Paper } from "@mui/material";
import HomeIntro from "./HomeIntro";
import ServiceCards from "./ServiceCards";
import RatedMedicines from "./RatedMedicines";
import { Navigate } from "react-router-dom";
import { userInfoStatus as userInfo } from "../../features/auth/userInfoSlice";
import { useSelector } from "react-redux";

const Home = () => {
	const userInfoStatus = useSelector(userInfo);

	if (userInfoStatus?.user_type === "admin") {
		return <Navigate to="/dashboard" replace />;
	}

	return (
		<>
			<Paper component="section" sx={{ mt: "20px" }}>
				<HomeIntro />
			</Paper>
			<Paper component="section" sx={{ mt: "20px" }}>
				<ServiceCards />
			</Paper>
			<Paper component="section" sx={{ mt: "20px" }}>
				<RatedMedicines />
			</Paper>
		</>
	);
};

export default Home;
