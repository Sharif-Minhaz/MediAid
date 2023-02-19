import { Box, Grid } from "@mui/material";
import ServiceCardExcerpt from "./ServiceCardExcerpt";

const ServiceCards = () => {
	return (
		<Box component="div" width="100%" p={2}>
			<Grid container spacing="20px">
				<Grid item xs={4}>
					<ServiceCardExcerpt img="/images/card-img-1.png" />
				</Grid>
				<Grid item xs={4}>
					<ServiceCardExcerpt img="/images/card-img-2.png" />
				</Grid>
				<Grid item xs={4}>
					<ServiceCardExcerpt img="/images/card-img-3.png" />
				</Grid>
			</Grid>
		</Box>
	);
};

export default ServiceCards;
