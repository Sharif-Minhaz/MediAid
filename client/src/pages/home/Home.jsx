import "./Home.css";
import { Paper, Typography } from "@mui/material";
import HomeIntro from "./HomeIntro";
import ServiceCards from "./ServiceCards";

const Home = () => {
	return (
		<>
			<Paper sx={{ mt: "20px" }}>
				<HomeIntro />
			</Paper>
			<Paper sx={{ mt: "20px" }}>
				<ServiceCards />
			</Paper>
		</>
	);
};

export default Home;
