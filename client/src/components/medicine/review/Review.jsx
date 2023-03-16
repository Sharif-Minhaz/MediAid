import { Divider, Paper } from "@mui/material";
import SectionTitle from "../../SectionTitle";
import MedicineReviewForm from "./MedicineReviewForm";
import ReviewedMedicine from "./ReviewedMedicine";

const Review = () => {
	return (
		<Paper component="section" sx={{ mt: "20px" }}>
			<SectionTitle text="Reviews & Ratings" />
			<MedicineReviewForm />
			<Divider sx={{mt: 6}} />
			<ReviewedMedicine />
		</Paper>
	);
};

export default Review;
