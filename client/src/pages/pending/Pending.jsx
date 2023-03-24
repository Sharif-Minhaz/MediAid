import { Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import PendingTabs from "./PendingTabs";

const Pending = () => {
	return (
		<Paper component="section">
			<SectionTitle text="Pending Requests" />
			<PendingTabs />
		</Paper>
	);
};

export default Pending;
