import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomIconButton = styled(IconButton)(({ theme }) => ({
	color: theme.palette.primary.main,
	backgroundColor: theme.palette.primaryLight.main,
	"&:hover": {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primaryLight.main,
	},
	borderRadius: "9px",
	height: "32px",
	width: "34px",
}));

export default CustomIconButton;
