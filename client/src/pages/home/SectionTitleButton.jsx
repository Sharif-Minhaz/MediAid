import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SectionTitleButton = ({ link, text }) => {
	const navigate = useNavigate();

	return (
		<Button
			disableElevation
			variant="contained"
			size="small"
			sx={{
				color: "whitesmoke",
				backgroundColor: "secondary.light",
				"&:hover": { backgroundColor: "secondary.main" },
			}}
			onClick={() => navigate(`${link}`)}
		>
			{text}
		</Button>
	);
};

export default SectionTitleButton;
