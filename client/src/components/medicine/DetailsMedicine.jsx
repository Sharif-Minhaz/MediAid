import { Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import MedicineBody from "./MedicineBody";
import Review from "./review/Review";

const DetailsMedicine = () => {
	const { state } = useLocation();

	return (
		<>
			<Paper component="section" sx={{ mt: "5px" }}>
				<SectionTitle
					text="Medicine Details"
					button={{ link: "/medicines", text: "Find More" }}
				/>
				<MedicineBody medicine={state} />
			</Paper>
			<Review />
		</>
	);
};

export default DetailsMedicine;
