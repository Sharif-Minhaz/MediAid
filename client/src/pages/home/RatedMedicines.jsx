import RatedMedicineExcerpt from "./RatedMedicineExcerpt";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const RatedMedicines = () => {

	return (
		<Box>
			<SectionTitle
				text="Best Rated Medicines"
				button={{ text: "View All", link: "/medicines" }}
			/>
			<Grid container spacing={"20px"} p="20px" >
				<Grid item xs={12} sm={4}>
					<RatedMedicineExcerpt />
				</Grid>
				<Grid item xs={12} sm={4}>
					<RatedMedicineExcerpt />
				</Grid>
				<Grid item xs={12} sm={4}>
					<RatedMedicineExcerpt />
				</Grid>
				<Grid item xs={12} sm={4}>
					<RatedMedicineExcerpt />
				</Grid>
				<Grid item xs={12} sm={4}>
					<RatedMedicineExcerpt />
				</Grid>
			</Grid>
		</Box>
	);
};

export default RatedMedicines;
