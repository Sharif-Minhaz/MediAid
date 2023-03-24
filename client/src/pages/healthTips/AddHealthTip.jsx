import { Paper } from "@mui/material";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import HealthTipForm from "./HealthTipForm";

const AddHealthTip = () => {
	const [isUpdateCase, setIsUpdateCase] = useState(false);

	return (
		<Paper component="section">
			<SectionTitle text={isUpdateCase ? "Update Health Tip" : "Add New Health Tip"} />
			<HealthTipForm isUpdateCase={isUpdateCase} setIsUpdateCase={setIsUpdateCase} />
		</Paper>
	);
};

export default AddHealthTip;
