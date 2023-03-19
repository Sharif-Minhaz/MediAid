import { Box, Grid, Typography } from "@mui/material";
import PeopleReviewCard from "./PeopleReviewCard";

const reviews = [
	{
		id: 1,
		name: "John Doe",
		avatar: "	https://mui.com/static/images/avatar/1.jpg",
		date: "2 days ago",
		rating: 4,
		review: "I recently received a donation of this medicine, and I have been taking it for a few days now. I have noticed that it has helped alleviate my symptoms, and I am feeling better. I have not experienced any side effects thus far, and the dosage and frequency are easy to follow. Overall, I am satisfied with the medicine.",
	},
	{
		id: 2,
		name: "Jane Smith",
		avatar: "	https://mui.com/static/images/avatar/3.jpg",
		date: "4 days ago",
		rating: 5,
		review: "I received this medicine as donation. It is a pain reliever, and it has been a game-changer for me. I have been experiencing chronic pain for months, and this medicine has helped alleviate my symptoms. The dosage is easy to follow, and I have not experienced any side effects so far.",
	},
	{
		id: 3,
		name: "Bob Johnson",
		avatar: "	https://mui.com/static/images/avatar/2.jpg",
		date: "6 days ago",
		rating: 3,
		review: "This work like magic as an allergy medicine, and I have been taking it for a week now. It has significantly reduced my allergy symptoms, including sneezing and itchy eyes. The dosage is easy to follow, and I have not experienced any side effects. Overall, It's qualify is moderate.",
	},
];

const ReviewedMedicine = () => {
	return (
		<Box sx={{ p: 2 }}>
			<Typography variant="h5" mb={2} gutterBottom>
				People's Ratings & Reviews
			</Typography>
			<Grid container>
				{reviews.map((review) => (
					<Grid item xs={12} sm={10} md={8} lg={7} key={review.id}>
						<PeopleReviewCard review={review} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ReviewedMedicine;
