import { Paper } from "@mui/material";
import MedicineForm from "../components/medicine/MedicineForm";
import SectionTitle from "../components/SectionTitle";

const AddMedicine = () => {
	return (
		<Paper sx={{mt: "5px"}}>
            <SectionTitle text="Add New Medicine" />
			<MedicineForm />
		</Paper>
	);
};

export default AddMedicine;
