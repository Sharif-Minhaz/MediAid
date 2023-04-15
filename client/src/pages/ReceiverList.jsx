import { Paper } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ListTable from "../components/listTable/ListTable";
import { useAcceptedApplicationQuery } from "../features/pending/pendingSlice";

const tableFormat = {
	tableHeaders: [
		{ align: "left", heading: "Avatar" },
		{ align: "left", heading: "Username" },
		{ align: "center", heading: "Role" },
		{ align: "center", heading: "Medicine" },
		{ align: "center", heading: "Total Received" },
		{ align: "right", heading: "Action" },
	],
};

const ReceiverList = () => {
	const receiverList = useAcceptedApplicationQuery();

	return (
		<Paper component="div" sx={{ mt: "5px", pb: "20px" }}>
			<SectionTitle text="Receiver List" />
			<ListTable tableName='receiver' tableFormat={tableFormat} listData={receiverList} />
		</Paper>
	);
};

export default ReceiverList;
