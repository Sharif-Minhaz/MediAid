import "./BestDonors.css";
import { Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import LeaderBoard from "./LeaderBoard";
import { Box } from "@mui/system";
import { useBestDonorsQuery } from "../../features/profile/profileSlice";

const BestDonors = () => {
	const bestDonorInfo = useBestDonorsQuery()

	return (
		<Paper component="section">
			<SectionTitle text="Best Donor" button={{ text: "Donate Now", link: "/donate" }} />
			<Box sx={{ p: { xs: "16px", sm: "20px" } }}>
				<LeaderBoard bestDonors={bestDonorInfo} />
			</Box>
		</Paper>
	);
};

export default BestDonors;
