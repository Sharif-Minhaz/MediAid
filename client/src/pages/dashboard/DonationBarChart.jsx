import { Card, Chip, Stack, Box } from "@mui/material";
import { IconPill } from "@tabler/icons-react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import SelectYear from "./SelectYear";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	maintainAspectRatio: true,
	responsive: true,
	devicePixelRatio: 2,
	plugins: {
		legend: {
			position: "top",
		},
	},
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const data = {
	labels,
	datasets: [
		{
			label: "Donated Dosages",
			data: labels.map(() => Math.ceil(Math.random() * 100)),
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 159, 64, 0.2)",
				"rgba(255, 205, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(201, 203, 207, 0.2)",
			],
			borderColor: [
				"rgb(255, 99, 132)",
				"rgb(255, 159, 64)",
				"rgb(255, 205, 86)",
				"rgb(75, 192, 192)",
				"rgb(54, 162, 235)",
				"rgb(153, 102, 255)",
				"rgb(201, 203, 207)",
			],
			borderWidth: 1,
		},
	],
};

const DonationBarChart = () => {
	return (
		<Card
			sx={{
				boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
				p: 2,
			}}
		>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Chip
					icon={<IconPill size={18} />}
					sx={{ background: "rgb(243 242 248)" }}
					label="Donation History"
				/>
				<SelectYear />
			</Stack>
			<Box
				sx={{
					width: "100%",
					height: "calc(100% - 40px)",
					display: "flex",
					alignItems: "center",
					mt: { xs: "12px", sm: "auto" },
				}}
			>
				<Bar options={options} data={data} />
			</Box>
		</Card>
	);
};

export default DonationBarChart;
