import { Paper } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ListTable from "../components/listTable/ListTable";

const receiverData = [
	{
		id: "1",
		user: {
			name: "Scotter Dave",
			profilePic: "https://mui.com/static/images/avatar/2.jpg",
			role: "User",
		},
		totalMedicine: 92,
	},
	{
		id: "2",
		user: {
			name: "Grate Ramsay",
			profilePic: "https://mui.com/static/images/avatar/1.jpg",
			role: "User",
		},
		totalMedicine: 112,
	},
	{
		id: "3",
		user: {
			name: "Johan Jankins",
			profilePic: "https://mui.com/static/images/avatar/2.jpg",
			role: "User",
		},
		totalMedicine: 312,
	},
	{
		id: "4",
		user: {
			name: "John Doe",
			profilePic: "https://mui.com/static/images/avatar/5.jpg",
			role: "User",
		},
		totalMedicine: 120,
	},
	{
		id: "5",
		user: {
			name: "Barn Yolky",
			profilePic: "https://mui.com/static/images/avatar/6.jpg",
			role: "User",
		},
		totalMedicine: 102,
	},
];

const tableFormat = {
	tableHeaders: [
		{ align: "left", heading: "Avatar" },
		{ align: "left", heading: "Username" },
		{ align: "center", heading: "Role" },
		{ align: "center", heading: "Total Received" },
		{ align: "right", heading: "Action" },
	],
};

const sortedHistoryData = receiverData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const ReceiverList = () => {
	return (
		<Paper component="div" sx={{ mt: "5px", pb: "20px" }}>
			<SectionTitle text="Receiver List" />
			<ListTable tableFormat={tableFormat} listData={sortedHistoryData} />
		</Paper>
	);
};

export default ReceiverList;
