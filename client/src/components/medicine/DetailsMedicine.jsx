import { Paper } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import MedicineBody from "./MedicineBody";
import Review from "./review/Review";
import { useViewSingleMedicineQuery } from "../../features/medicines/medicinesSlice";
import SkeletonCartPage from "./SkeletonCartPage";

const DetailsMedicine = () => {
	const { medicineId } = useParams();
	const { state } = useLocation();
	const responseInfo = useViewSingleMedicineQuery(medicineId);

	return (
		<>
			<Paper component="section">
				<SectionTitle
					text="Medicine Details"
					button={{ link: "/medicines", text: "Find More" }}
				/>
				{responseInfo.isLoading ? (
					// loader component
					<SkeletonCartPage />
				) : (
					<MedicineBody medicine={state ? state : responseInfo?.data?.medicine} />
				)}
			</Paper>
			{/* review segment for the medicine */}
			<Review medicineId={medicineId} />
		</>
	);
};

export default DetailsMedicine;
