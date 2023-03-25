import SectionTitleButton from "../components/SectionTitleButton";
import { Divider, Stack, Typography } from "@mui/material";

const SectionTitle = (props) => {
	return (
		<>
			<Stack p="20px" direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="h6" fontWeight={500} color="#493e54">
					{props.text}
				</Typography>
				{props.button && (
					<SectionTitleButton text={props.button.text} link={props.button.link} />
				)}
			</Stack>
			<Divider />
		</>
	);
};

export default SectionTitle;
