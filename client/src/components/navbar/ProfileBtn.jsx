import { Avatar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconSettings as SettingsIcon } from "@tabler/icons-react";

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

const ProfileBtn = ({ handleClick }) => {
	return (
		<RoundedButton
			onClick={handleClick}
			startIcon={
				<Avatar
					alt="John Doe"
					src="https://mui.com/static/images/avatar/1.jpg"
					sx={{ width: 36, height: 36, ml: "2px" }}
				/>
			}
			endIcon={<SettingsIcon size={24} sx={{ ml: "1px" }} />}
		/>
	);
};

export default ProfileBtn;
