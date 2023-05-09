import { Box, Grid, useMediaQuery } from "@mui/material";
import ServiceCardExcerpt from "./ServiceCardExcerpt";

const serviceCardsData = [
	{ img: "/images/card-img-3.png", heading: "Your Trusted Medi Provider!", type: "medicines" },
	{ img: "/images/card-img-1.png", heading: "Donate Medicine, Save Lives", type: "donate" },
	{ img: "/images/card-img-2.png", heading: "Expert Health Tips for You", type: "health-tips" },
];

const ServiceCards = () => {
	const midScreen = useMediaQuery("(min-width:900px)");

	return (
		<Box component="div" width="100%" p={midScreen ? "20px" : "16px"}>
			<Grid container spacing={midScreen ? "20px" : "16px"}>
				{serviceCardsData.map((data, i) => (
					<Grid key={i} item xs={12} sm={6} lg={4}>
						<ServiceCardExcerpt
							img={data.img}
							heading={data.heading}
							type={data.type}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ServiceCards;
