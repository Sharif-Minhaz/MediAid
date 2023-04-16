import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import { useNavigate, useSearchParams } from "react-router-dom";
import medicines from "../../data/medicines.json";
import { useEffect, useState } from "react";
import MedicineExcerpt from "../components/medicine/MedicineExcerpt";
import { useViewAllMedicinesQuery } from "../features/medicines/medicinesSlice";

const SearchResultPage = () => {
	const navigate = useNavigate();
	const [queryParams, setQueryParams] = useSearchParams();
	const [searchedMedicines, setSearchedMedicines] = useState([]);
	const medicineInfo = useViewAllMedicinesQuery();

	const filterMedicinesByName = (medicines, name) => {
		const lowerCaseName = name.toLowerCase();

		const filteredMedicines = medicines.filter((medicine) =>
			medicine.medicineName.toLowerCase().includes(lowerCaseName)
		);

		return filteredMedicines;
	};

	useEffect(() => {
		setSearchedMedicines(
			filterMedicinesByName(medicineInfo?.data?.medicines, queryParams.get("medicine"))
		);
	}, [queryParams]);

	return (
		<Paper component="section">
			<SectionTitle text={`Search result for - ${queryParams.get("medicine") || ""}`} />
			<Grid container spacing="20px" sx={{ p: { xs: 2, sm: "20px" } }}>
				{searchedMedicines.length === 0 && (
					<Stack alignItems="center" width="100%" sx={{ px: 2, py: "70px" }}>
						<Typography variant="h5" fontWeight={300} mb={1.2} textAlign="center">
							Oops! Medicine not found
						</Typography>
						<Button onClick={() => navigate("/donate")}>Donate this medicine</Button>
					</Stack>
				)}
				{searchedMedicines.map((medicine) => (
					<Grid item xs={12} sm={6} lg={4} key={medicine.id}>
						<MedicineExcerpt medicine={medicine} />
					</Grid>
				))}
			</Grid>
		</Paper>
	);
};

export default SearchResultPage;
