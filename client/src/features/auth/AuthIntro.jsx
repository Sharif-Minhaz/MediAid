import { Typography } from "@mui/material";
import DividerWithIcon from "./DividerWithIcon";

const AuthIntro = ({ des1, des2, des3 }) => {
	return (
		<>
			<Typography fontWeight={700} color="primary" component="h5" variant="h5">
				{des1}
			</Typography>
			<Typography color="primary.contrastText" mt={2} mb="1px">
				{des2}
			</Typography>
			<DividerWithIcon />
			<Typography fontWeight={500} sx={{ fontSize: "0.875rem" }} mb={1}>
				{des3}
			</Typography>
		</>
	);
};

export default AuthIntro;
