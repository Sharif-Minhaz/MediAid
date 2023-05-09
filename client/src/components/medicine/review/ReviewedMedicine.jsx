import { Box, Grid, Typography } from "@mui/material";
import PeopleReviewCard from "./PeopleReviewCard";

const ReviewedMedicine = ({ reviews }) => {
	return (
		<Box sx={{ p: 2 }}>
			<Typography variant="h5" mb={2} gutterBottom>
				People's Ratings & Reviews
			</Typography>
			<Grid container>
				{!reviews?.length && (
					<Typography sx={{ fontStyle: "italic" }} color="#939393" p={2}>
						No review yet, Be the first.
					</Typography>
				)}
				{reviews?.map((review) => (
					<Grid item xs={12} sm={10} md={8} lg={7} key={review._id}>
						<PeopleReviewCard review={review} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ReviewedMedicine;
