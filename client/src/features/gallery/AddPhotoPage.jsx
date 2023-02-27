import { Grid, Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import AddPhotoForm from "./AddPhotoForm";

const AddPhotoPage = () => {
	return (
		<Paper sx={{ mt: "5px" }}>
			<SectionTitle text="Add Photo to Gallery" />
			<AddPhotoForm />
		</Paper>
	);
};

export default AddPhotoPage;
