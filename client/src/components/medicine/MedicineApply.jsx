import { Paper } from "@mui/material";
import SectionTitle from "../SectionTitle";
import MedicineApplyForm from "./MedicineApplyForm";

const MedicineApply = () => {
	return (
		<Paper component="section" sx={{ mt: "5px" }}>
			<SectionTitle text="Apply for the medicine" />
			<MedicineApplyForm />
		</Paper>
	);
};

export default MedicineApply;
