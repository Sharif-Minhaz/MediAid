import { Divider, Grid } from "@mui/material";
import ExtraDetailsAccordion from "./ExtraDetailsAccordion";
import MedicineCartDetails from "./MedicineCartDetails";

const MedicineBody = ({ medicine }) => {
	return (
		<Grid container rowSpacing={2} columnSpacing={3} sx={{ p: { xs: 2, sm: 2.5 } }}>
			<Grid item xs={12} md={6}>
				<img
					style={{
						width: "100%",
						height: "100%",
						boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
						borderRadius: "14px",
						objectFit: "cover",
					}}
					src={medicine?.medicineImage}
					alt={medicine?.medicineName}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<MedicineCartDetails medicine={medicine} />
				<Divider />
				<ExtraDetailsAccordion medicine={medicine} />
			</Grid>
		</Grid>
	);
};

export default MedicineBody;
