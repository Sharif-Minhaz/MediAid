import { Paper } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ListTable from "../components/listTable/ListTable";

const donorData = [
	{
		id: "1",
		user: {
			name: "Scotter Dave",
			profilePic: "https://mui.com/static/images/avatar/4.jpg",
			role: "User",
		},
		totalMedicine: 100,
	},
	{
		id: "2",
		user: {
			name: "Grate Ramsay",
			profilePic: "https://mui.com/static/images/avatar/2.jpg",
			role: "User",
		},
		totalMedicine: 150,
	},
	{
		id: "3",
		user: {
			name: "Johan Jankins",
			profilePic: "https://mui.com/static/images/avatar/1.jpg",
			role: "User",
		},
		totalMedicine: 300,
	},
	{
		id: "4",
		user: {
			name: "John Doe",
			profilePic: "https://mui.com/static/images/avatar/6.jpg",
			role: "User",
		},
		totalMedicine: 120,
	},
	{
		id: "5",
		user: {
			name: "Barn Yolky",
			profilePic: "https://mui.com/static/images/avatar/5.jpg",
			role: "User",
		},
		totalMedicine: 200,
	},
];

const tableFormat = {
	tableHeaders: [
		{ align: "left", heading: "Avatar" },
		{ align: "left", heading: "Username" },
		{ align: "center", heading: "Role" },
		{ align: "center", heading: "Medicine" },
		{ align: "center", heading: "Total Donated" },
		{ align: "right", heading: "Action" },
	],
};

const sortedDonatedData = donorData.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

const DonorList = () => {
	return (
		<Paper component="div" sx={{ mt: "5px", pb: "20px" }}>
			<SectionTitle text="Receiver List" />
			<ListTable tableFormat={tableFormat} listData={sortedDonatedData} />
		</Paper>
	);
};

export default DonorList;
