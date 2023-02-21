import { Box, Grid } from "@mui/material";
import ServiceCardExcerpt from "./ServiceCardExcerpt";

const serviceCardsData = [
	{ img: "/images/card-img-3.png", heading: "Your Trusted Medi Provider!", type: "medicine" },
	{ img: "/images/card-img-1.png", heading: "Donate Medicine, Save Lives", type: "donate" },
	{ img: "/images/card-img-2.png", heading: "Expert Health Tips for You", type: "health-tips" },
];

const ServiceCards = () => {
	return (
		<Box component="div" width="100%" p="20px">
			<Grid container spacing="20px">
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
