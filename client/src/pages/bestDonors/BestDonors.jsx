import "./BestDonors.css";
import { Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import LeaderBoard from "./LeaderBoard";
import { Box } from "@mui/system";

const dados = [
	{
		id: 1,
		name: "Spark",
		image: "https://mui.com/static/images/avatar/2.jpg",
		totalDonations: 120,
	},
	{
		id: 2,
		name: "David",
		image: "https://mui.com/static/images/avatar/1.jpg",
		totalDonations: 110,
	},
	{
		id: 3,
		name: "John",
		image: "https://mui.com/static/images/avatar/5.jpg",
		totalDonations: 105,
	},
	{
		id: 4,
		name: "Spark",
		image: "https://mui.com/static/images/avatar/3.jpg",
		totalDonations: 90,
	},
	{
		id: 5,
		name: "Hostoria",
		image: "https://mui.com/static/images/avatar/4.jpg",
		totalDonations: 70,
	},
	{
		id: 6,
		name: "Harry",
		image: "https://mui.com/static/images/avatar/6.jpg",
		totalDonations: 50,
	},
];

const BestDonors = () => {
	return (
		<Paper component="section" sx={{ mt: "5px" }}>
			<SectionTitle text="Best Donor" button={{ text: "Donate Now", link: "/donate" }} />
			<Box sx={{ p: { xs: "16px", sm: "20px" } }}>
				<LeaderBoard data={dados} />
			</Box>
		</Paper>
	);
};

export default BestDonors;
