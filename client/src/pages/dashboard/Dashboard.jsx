import "./Dashboard.css";
import { Box, Divider, Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import CardBase from "./CardBase";
import ChartBase from "./ChartBase";

const Dashboard = () => {
	return (
		<Paper component="section">
			<SectionTitle text="Dashboard" />
			<Box sx={{ p: { xs: 2, sm: "20px" } }}>
				<ChartBase />
			</Box>
			<Divider />
			<CardBase />
		</Paper>
	);
};

export default Dashboard;
