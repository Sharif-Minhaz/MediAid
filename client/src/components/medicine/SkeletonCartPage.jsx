import { Divider, Grid, Skeleton } from "@mui/material";

const SkeletonCartPage = () => {
	return (
		<Grid container rowSpacing={2} columnSpacing={3} sx={{ p: { xs: 2, sm: 2.5 } }}>
			<Grid item xs={12} md={6}>
				<Skeleton
					variant="rounded"
					height={300}
					animation="wave"
					sx={{ borderRadius: "14px" }}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<Skeleton height={30} width={160} />
				<Skeleton width={100} />
				<Skeleton width={80} />
				<Divider sx={{ mt: 2, mb: 1 }} />
				<Skeleton height={70} />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton width={250} />
			</Grid>
		</Grid>
	);
};

export default SkeletonCartPage;
