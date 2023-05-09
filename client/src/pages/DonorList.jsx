import { Paper } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ListTable from "../components/listTable/ListTable";
import { useViewAllMedicinesQuery } from "../features/medicines/medicinesSlice";

const tableFormat = {
	tableHeaders: [
		{ align: "left", heading: "Avatar" },
		{ align: "left", heading: "Username" },
		{ align: "center", heading: "Medicine" },
		{ align: "center", heading: "Company" },
		{ align: "center", heading: "Total Donated" },
		{ align: "right", heading: "Action" },
	],
};

const DonorList = () => {
	const donationInfo = useViewAllMedicinesQuery();

	return (
		<Paper component="div" sx={{ mt: "5px", pb: "20px" }}>
			<SectionTitle text="Donation List" />
			<ListTable tableName="donor" tableFormat={tableFormat} listData={donationInfo} />
		</Paper>
	);
};

export default DonorList;
