import { Grid } from "@mui/material";
import MedicineLoadingSkeleton from "../../components/MedicineLoadingSkeleton";

const MedicineLoading = ({ drawerOpen, smallScreen }) => {
	return (
		<>
			{[1, 2, 3, 4, 5, 6].map((value) => (
				<Grid
					key={value}
					item
					lg={4}
					md={drawerOpen ? 6 : 4}
					sm={smallScreen ? 6 : 4}
					xs={12}
					sx={{ mb: 2 }}
				>
					<MedicineLoadingSkeleton />
				</Grid>
			))}
		</>
	);
};

export default MedicineLoading;
