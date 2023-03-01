import "./Home.css";
import { Paper } from "@mui/material";
import HomeIntro from "./HomeIntro";
import ServiceCards from "./ServiceCards";
import RatedMedicines from "./RatedMedicines";

const Home = () => {
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
