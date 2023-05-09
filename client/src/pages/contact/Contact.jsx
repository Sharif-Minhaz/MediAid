import { Grid, Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contact = () => {
	return (
		<Paper component="section">
			<SectionTitle text="Contact Us" />
			<Grid container columnSpacing="20px">
				<Grid item xs={12} sm={6}>
					<ContactMap />
				</Grid>
				<Grid item xs={12} sm={6}>
					<ContactForm />
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Contact;
