import { Grid, useMediaQuery } from "@mui/material";
import InfoCard from "./InfoCard";
import { IconUsers, IconHeartHandshake, IconClipboardHeart } from "@tabler/icons-react";

const data = [
	{
		id: 1,
		title: "Total User",
		count: 223,
		bg: "bg-gradient-warn",
		des: "All registered users",
		icon: IconUsers,
	},
	{
		id: 2,
		title: "Donation Request",
		count: 121,
		bg: "bg-gradient-info",
		des: "User's donation request",
		icon: IconHeartHandshake,
	},
	{
		id: 3,
		title: "Receive Request",
		count: 79,
		bg: "bg-gradient-success",
		des: "User's receiver request",
		icon: IconClipboardHeart,
	},
];

const CardBase = () => {
	const midScreen = useMediaQuery("(min-width:900px)");

	return (
		<Grid
			container
			spacing={midScreen ? "20px" : "16px"}
			sx={{ p: { xs: "16px", sm: "20px" } }}
		>
			{data.map((data) => (
				<Grid key={data.id} item xs={12} md={6} lg={4}>
					<InfoCard data={data} />
				</Grid>
			))}
		</Grid>
	);
};

export default CardBase;
