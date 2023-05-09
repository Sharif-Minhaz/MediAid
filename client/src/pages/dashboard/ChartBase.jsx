import { Grid } from "@mui/material";
import DonationBarChart from "./DonationBarChart";
import MedicinesPieChart from "./MedicinesPieChart";

const ChartBase = () => {
	return (
		<Grid container spacing="20px">
			<Grid item xs={12} md={7} className="chart-grid">
				<DonationBarChart />
			</Grid>
			<Grid item xs={12} md={5} className="chart-grid">
				<MedicinesPieChart />
			</Grid>
		</Grid>
	);
};

export default ChartBase;
