import MedicineExcerpt from "../../components/medicine/MedicineExcerpt";
import { Box, Grid, useMediaQuery } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import { drawerStatus } from "../../features/drawer/drawerSlice";
import { useGetTopRatedMedicinesQuery } from "../../features/medicines/medicinesSlice";
import MedicineLoading from "../medicines/MedicineLoading";

const RatedMedicines = () => {
	const drawerOpen = useSelector(drawerStatus);
	const topRatedMedicinesInfo = useGetTopRatedMedicinesQuery();

	const midScreen = useMediaQuery("(min-width:900px)");
	const smallScreen = useMediaQuery("(min-width:600px)");

	return (
		<Box>
			<SectionTitle
				text="Top Rated Medicines"
				button={{ text: "View All", link: "/medicines" }}
			/>
			<Grid
				container
				spacing={midScreen ? "20px" : "16px"}
				sx={{ p: { xs: "16px", md: "20px" } }}
			>
				{topRatedMedicinesInfo.isLoading ? (
					<MedicineLoading drawerOpen={drawerOpen} smallScreen={smallScreen} />
				) : (
					<>
						{topRatedMedicinesInfo.data?.topRatedMedicines?.map((medicineInfo) => (
							<Grid
								key={medicineInfo._id}
								item
								lg={4}
								md={drawerOpen ? 6 : 4}
								sm={smallScreen ? 6 : 4}
								xs={12}
							>
								<MedicineExcerpt medicine={medicineInfo?.medicine} />
							</Grid>
						))}
					</>
				)}
			</Grid>
		</Box>
	);
};

export default RatedMedicines;
