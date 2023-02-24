import { Paper } from "@mui/material";
import { useState } from "react";
import MedicineForm from "../components/medicine/MedicineForm";
import SectionTitle from "../components/SectionTitle";

const AddMedicine = () => {
	const [isUpdateCase, setIsUpdateCase] = useState(false);

	return (
		<Paper sx={{ mt: "5px" }}>
			<SectionTitle text={isUpdateCase ? "Update Medicine" : "Add New Medicine"} />
			<MedicineForm isUpdateCase={isUpdateCase} setIsUpdateCase={setIsUpdateCase} />
		</Paper>
	);
};

export default AddMedicine;
