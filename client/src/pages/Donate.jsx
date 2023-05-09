import { Paper } from "@mui/material";
import MedicineForm from "../components/medicine/MedicineForm";
import SectionTitle from "../components/SectionTitle";

const Donate = () => {
	return (
		<Paper component="section">
			<SectionTitle text="Donate Medicine" />
			<MedicineForm isUpdateCase={false} donation={true} />
		</Paper>
	);
};

export default Donate;
