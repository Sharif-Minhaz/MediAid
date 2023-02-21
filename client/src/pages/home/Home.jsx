import "./Home.css";
import { Paper } from "@mui/material";
import HomeIntro from "./HomeIntro";
import ServiceCards from "./ServiceCards";
import RatedMedicines from "./RatedMedicines";

const Home = () => {
	return (
		<>
			<Paper sx={{ mt: "20px" }}>
				<HomeIntro />
			</Paper>
			<Paper sx={{ mt: "20px" }}>
				<ServiceCards />
			</Paper>
			<Paper sx={{ mt: "20px" }}>
				<RatedMedicines />
			</Paper>
		</>
	);
};

export default Home;
