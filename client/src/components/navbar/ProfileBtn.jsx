import { Avatar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";

const RoundedButton = styled(Button)(({ theme }) => ({
	width: 84,
	height: 48,
	color: "#2196f3",
	borderRadius: 40,
	backgroundColor: "#eef2f6",
	"&:hover": {
		color: "#fff",
		backgroundColor: "#2196f3",
	},
}));

const ProfileBtn = () => {
	return (
		<RoundedButton
			startIcon={
				<Avatar
					alt="Remy Sharp"
					src="https://mui.com/static/images/avatar/2.jpg"
					sx={{ width: 36, height: 36, ml: "2px" }}
				/>
			}
			endIcon={<SettingsIcon fontSize="22px" sx={{ ml: "1px" }} />}
		/>
	);
};

export default ProfileBtn;
