import { Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import AddPhotoForm from "./AddPhotoForm";

const AddPhotoPage = () => {
	return (
		<Paper component="section">
			<SectionTitle text="Add Photo to Gallery" />
			<AddPhotoForm />
		</Paper>
	);
};

export default AddPhotoPage;
