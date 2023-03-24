import { Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import ProfileForm from "./ProfileForm";

const EditProfile = () => {
	return (
		<Paper component="section">
			<SectionTitle text="Update Profile" />
			<ProfileForm />
		</Paper>
	);
};

export default EditProfile;
