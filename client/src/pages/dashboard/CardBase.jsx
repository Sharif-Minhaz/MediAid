import { Grid, useMediaQuery } from "@mui/material";
import InfoCard from "./InfoCard";
import { IconUsers, IconHeartHandshake, IconClipboardHeart } from "@tabler/icons-react";
import { useGetDashboardCardDataQuery } from "../../features/dashboard/dashboardSlice";
import { useEffect, useState } from "react";

const structures = [
	{ title: "Total Users", bg: "bg-gradient-warn", des: "All registered users", icon: IconUsers },
	{
		title: "Donated by User",
		bg: "bg-gradient-info",
		des: "Donated medicine category",
		icon: IconHeartHandshake,
	},
	{
		title: "Donation Application",
		bg: "bg-gradient-success",
		des: "User's donation request",
		icon: IconClipboardHeart,
	},
];

const CardBase = () => {
	const midScreen = useMediaQuery("(min-width:900px)");
	const cardsInfo = useGetDashboardCardDataQuery();
	const [data, setData] = useState([]);

	useEffect(() => {
		if (cardsInfo.isSuccess) {
			setData(
				structures.map((structure, i) => {
					structure.count = Object.values(cardsInfo.data)[i];

					return structure;
				})
			);
		}
	}, [cardsInfo]);

	return (
		<Grid
			container
			spacing={midScreen ? "20px" : "16px"}
			sx={{ p: { xs: "16px", sm: "20px" } }}
		>
			{data.map((data, index) => (
				<Grid key={index} item xs={12} md={6} lg={4}>
					<InfoCard index={index} data={data} />
				</Grid>
			))}
		</Grid>
	);
};

export default CardBase;
