import MedicineExcerpt from "../../components/medicine/MedicineExcerpt";
import { Box, Grid, useMediaQuery } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import { useStateContext } from "../../contexts/ContextProvider";

const MedicinesList = ({ medicines }) => {
	const { leftDrawerOpen } = useStateContext();
	const midScreen = useMediaQuery("(min-width:900px)");
	const smallScreen = useMediaQuery("(min-width:600px)");

	return (
		<Box>
			<SectionTitle text="Available Medicines" />
			<Grid
				container
				spacing={midScreen ? "20px" : "16px"}
				sx={{ p: { xs: "16px", md: "20px" } }}
			>
				{medicines?.map((medicine) => (
					<Grid
						key={medicine.id}
						item
						lg={4}
						md={leftDrawerOpen ? 6 : 4}
						sm={smallScreen ? 6 : 4}
						xs={12}
					>
						<MedicineExcerpt medicine={medicine} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default MedicinesList;
