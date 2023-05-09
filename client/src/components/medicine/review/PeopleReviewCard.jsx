import { useInView } from "react-intersection-observer";
import { formatDistance } from "date-fns";
import { Avatar, Box, Card, CardContent, CardHeader, Rating, Typography } from "@mui/material";
import ReviewMenu from "./ReviewMenu";
import { useFindProfileQuery } from "../../../features/profile/profileSlice";

const PeopleReviewedCard = ({ review, currentUser }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	const userProfileInfo = useFindProfileQuery(review?.user);

	return (
		<Box sx={{ mb: 2 }} ref={ref} className={`${inView ? "fade-in visible" : "fade-in"}`}>
			<Card elevation={0}>
				<CardHeader
					avatar={<Avatar src={userProfileInfo.data?.profile?.profilePicture} />}
					title={userProfileInfo.data?.profile?.fullName}
					subheader={formatDistance(new Date(review.createdAt), new Date(), {
						addSuffix: true,
					})}
					sx={{ ml: -1 }}
					action={<ReviewMenu currentUser={currentUser} />}
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
