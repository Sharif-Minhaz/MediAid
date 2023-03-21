import { Paper } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ListTable from "../components/listTable/ListTable";

const historyData = [
	{
		id: "1",
		user: {
			name: "Scotter Dave",
			profilePic: "https://mui.com/static/images/avatar/1.jpg",
			role: "User",
		},
		action: "apply-receive",
		medicine: { medicineName: "Esoral Mups" },
		date: new Date(2023, 0, 20),
	},
	{
		id: "2",
		user: {
			name: "Grate Ramsay",
			profilePic: "https://mui.com/static/images/avatar/2.jpg",
			role: "Admin",
		},
		action: "accept-donation",
		medicine: { medicineName: "Spinraza" },
		date: new Date(2023, 2, 20),
	},
	{
		id: "3",
		user: {
			name: "Johan Jankins",
			profilePic: "https://mui.com/static/images/avatar/5.jpg",
			role: "Admin",
		},
		action: "reject-receive",
		medicine: { medicineName: "Spark Scala" },
		date: new Date(2023, 2, 7),
	},
	{
		id: "4",
		user: {
			name: "John Doe",
			profilePic: "https://mui.com/static/images/avatar/1.jpg",
			role: "User",
		},
		action: "apply-donate",
		medicine: { medicineName: "Esoral Mups" },
		date: new Date(2023, 2, 1),
	},
	{
		id: "5",
		user: {
			name: "Barn Yolky",
			profilePic: "https://mui.com/static/images/avatar/6.jpg",
			role: "Admin",
		},
		action: "accept-receive",
		medicine: { medicineName: "Spark Scala" },
		date: new Date(2023, 0, 2),
	},
];

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

const sortedHistoryData = historyData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const History = () => {
	return (
		<Paper component="div" sx={{ mt: "5px", pb: "20px" }}>
			<SectionTitle text="Action History" />
			<ListTable tableFormat={tableFormat} listData={sortedHistoryData} tableName="history" />
		</Paper>
	);
};

export default History;
