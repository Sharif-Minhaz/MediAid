import RatedMedicineExcerpt from "./RatedMedicineExcerpt";
import { Box, Grid, useMediaQuery } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { useStateContext } from "../../contexts/ContextProvider";

const medicines = [
	{
		id: "1",
		name: "Esoral Mups",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/esoral-mups.png",
		rating: 4.8,
	},
	{
		id: "2",
		name: "AstraZeneca",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/AstraZeneca.avif",
		rating: 4.3,
	},
	{
		id: "3",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
	{
		id: "4",
		name: "Spinraza",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/Spinraza.jpg",
		rating: 4.2,
	},
	{
		id: "5",
		name: "Esoral Mups",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/esoral-mups.png",
		rating: 4.9,
	},
];
const RatedMedicines = () => {
	const { leftDrawerOpen } = useStateContext();
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
				{medicines.map((medicine) => (
					<Grid
						key={medicine.id}
						item
						lg={4}
						md={leftDrawerOpen ? 6 : 4}
						sm={smallScreen ? 6 : 4}
						xs={12}
					>
						<RatedMedicineExcerpt medicine={medicine} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default RatedMedicines;
