import { Box, Typography } from "@mui/material";
import { IconInfoCircle } from "@tabler/icons-react";

const InfoCard = ({ data }) => {
	return (
		<Box className={`dashboard-card card-img-holder ${data.bg}`}>
			<img src="/images/circle.png" className="card-img-absolute" alt="circle-image" />
			<Typography
				sx={{
					display: "flex",
					fontSize: "18px",
					justifyContent: "space-between",
					alignItems: "center",
					mb: "4px",
				}}
			>
				{data.title} <data.icon size={30} />
			</Typography>
			<Typography sx={{ fontSize: "28px", mb: "12px", fontWeight: 500 }}>
				{data.count}
			</Typography>
			<Typography
				sx={{
					fontSize: "15px",
					fontFamily: "cursive",
					display: "flex",
					alignItems: "center",
					gap: "4px",
				}}
			>
				<IconInfoCircle size={18} />
				{data.des}
			</Typography>
		</Box>
	);
};

export default InfoCard;
