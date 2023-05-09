import { Paper } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ListTable from "../components/listTable/ListTable";
import { useViewHistoryQuery } from "../features/history/historySlice";

const tableFormat = {
	tableHeaders: [
		{ align: "left", heading: "Avatar" },
		{ align: "left", heading: "Username" },
		{ align: "center", heading: "Role" },
		{ align: "right", heading: "Medicine" },
		{ align: "right", heading: "Action" },
		{ align: "right", heading: "Date" },
	],
};

const History = () => {
	const historyInfo = useViewHistoryQuery();

	return (
		<Paper component="div" sx={{ mt: "5px", pb: "20px" }}>
			<SectionTitle text="Action History" />
			<ListTable tableFormat={tableFormat} listData={historyInfo} tableName="history" />
		</Paper>
	);
};

export default History;
