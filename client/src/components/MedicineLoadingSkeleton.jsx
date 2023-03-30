import { Box, Skeleton, Stack } from "@mui/material";

const MedicineLoadingSkeleton = () => {
	return (
		<Box>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={200}
				sx={{ borderTopLeftRadius: "14px", borderTopRightRadius: "14px", mb: "7px" }}
			/>
			<Skeleton />
			<Skeleton />
			<Skeleton />
			<Skeleton width="75%" />
			<Stack mt={1} direction="row" justifyContent="space-between" alignItems="center">
				<Skeleton variant="circular" width={35} sx={{ mr: 2 }} height={35} />
				<Stack direction="row" spacing={1}>
					<Skeleton variant="rectangular" width={60} height={20} />
					<Skeleton variant="rectangular" width={60} height={20} />
					<Skeleton variant="rectangular" width={60} height={20} />
				</Stack>
			</Stack>
		</Box>
	);
};

export default MedicineLoadingSkeleton;
