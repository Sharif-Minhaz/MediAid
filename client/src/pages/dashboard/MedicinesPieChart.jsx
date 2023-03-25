import { Card } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
	responsive: true,
	maintainAspectRatio: true,
	devicePixelRatio: 2,
};

export const data = {
	labels: ["Total", "Donated", "Received"],
	datasets: [
		{
			label: "Number of dosages",
			data: [134, 36, 89],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(153, 102, 255, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(153, 102, 255, 1)",
			],
			borderWidth: 1,
		},
	],
};

const MedicinesPieChart = () => {
	return (
		<Card
			sx={{
				boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
				px: { lg: 4, md: 1.5, sm: 14, xs: 2.5 },
				py: 2.5,
			}}
		>
			<Pie data={data} options={options} />
		</Card>
	);
};

export default MedicinesPieChart;
