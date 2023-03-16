import { useInView } from "react-intersection-observer";
import { Avatar, Box, Card, CardContent, CardHeader, Rating, Typography } from "@mui/material";
import ReviewMenu from "./ReviewMenu";

const PeopleReviewedCard = ({ review }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<Box sx={{ mb: 2 }} ref={ref} className={`${inView ? "fade-in visible" : "fade-in"}`}>
			<Card elevation={0}>
				<CardHeader
					avatar={<Avatar src={review.avatar} />}
					title={review.name}
					subheader={review.date}
					sx={{ ml: -1 }}
					action={<ReviewMenu />}
				/>
				<Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
					<Rating size="small" value={review.rating} readOnly />
					<Typography variant="body2" fontSize={12} sx={{ ml: 0.8, mb: "-3px" }}>
						{review.rating}
					</Typography>
				</Box>
				<CardContent sx={{ ml: -1 }}>
					<Typography variant="body1">{review.review}</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default PeopleReviewedCard;
