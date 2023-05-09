import { Card } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useGetDashboardChartDataQuery } from "../../features/dashboard/dashboardSlice";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
	responsive: true,
	maintainAspectRatio: true,
	devicePixelRatio: 2,
};

const initialData = {
	labels: ["Total", "Donation", "Donation received"],
	datasets: [
		{
			label: "Number of dosages",
			data: [],
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
	const chartInfo = useGetDashboardChartDataQuery();
	const [data, setData] = useState(initialData);
	const [key, setKey] = useState(0);

	useEffect(() => {
		if (chartInfo.isSuccess) {
			setData((prev) => {
				prev.datasets[0].data = [
					chartInfo.data?.total,
					chartInfo.data?.donation,
					chartInfo.data?.donationReceived,
				];
				return prev;
			});
			setKey((prev) => prev + 1);
		}
	}, [chartInfo]);

	return (
		<Card
			sx={{
				boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
				px: { lg: 4, md: 1.5, sm: 14, xs: 2.5 },
				py: 2.5,
			}}
		>
			{chartInfo.isLoading ? "Loading..." : <Pie key={key} data={data} options={options} />}
		</Card>
	);
};

export default MedicinesPieChart;
