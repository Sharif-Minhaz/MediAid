import { Box, Skeleton } from "@mui/material";

const SingleSkeleton = () => {
	return (
		<Box sx={{ mb: 2 }}>
			<Skeleton animation="wave" width="60%" height={33} sx={{ mb: "4px" }} />
			<Skeleton animation="wave" />
			<Skeleton animation="wave" />
			<Skeleton animation="wave" />
			<Skeleton animation="wave" width={280} />
		</Box>
	);
};

const HealthTipSkeleton = () => {
	return (
		<Box sx={{ p: { xs: "16px", sm: "20px" } }}>
			{[1, 2, 3].map((data) => (
				<SingleSkeleton key={data} />
			))}
		</Box>
	);
};

export default HealthTipSkeleton;
