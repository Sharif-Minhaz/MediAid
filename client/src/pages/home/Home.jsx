import "./Home.css";
import { Paper } from "@mui/material";
import HomeIntro from "./HomeIntro";
import ServiceCards from "./ServiceCards";
import RatedMedicines from "./RatedMedicines";
import { useState } from "react";
import { getUserInfo } from "../../utils/getUserInfo";
import { Navigate } from "react-router-dom";

const Home = () => {
	const [userInfo, setUserInfo] = useState(getUserInfo());

	if (userInfo?.user_type === "admin") {
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
