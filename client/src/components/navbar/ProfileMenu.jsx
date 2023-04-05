import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { IconLogout as Logout, IconUserCircle } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { toCapitalize } from "../../utils/toCapitalize";

const ProfileMenu = ({ profileInfo, anchorEl, open, handleClose }) => {
	const navigate = useNavigate();
	const [logout, responseInfo] = useLogoutMutation();

	const handleLogout = () => {
		logout()
			.unwrap()
			.then((response) => {
				if (response.msg === "logout_successful") {
					toast.success("Logout successful");
					navigate("/", { replace: true });
				}
			})
			.catch((err) => toast.error("Something went wrong"));
	};

	return (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					overflow: "visible",
					filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
					mt: 1.5,
					"& .MuiAvatar-root": {
						width: 60,
						height: 60,
						ml: -0.5,
						mr: 1,
					},
					"&:before": {
						content: '""',
						display: "block",
						position: "absolute",
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: "background.paper",
						transform: "translateY(-50%) rotate(45deg)",
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<Link to="/profile">
				<MenuItem onClick={handleClose} sx={{ mb: "8px" }}>
					<Avatar src={profileInfo.data?.profile.profilePicture} />{" "}
					<Stack>
						<Box component="span" color="#364152" fontSize={18}>
							{profileInfo.data?.profile.fullName}
						</Box>
						<Box component="span" color="#364152" fontSize={14}>
							{toCapitalize(profileInfo.data?.profile.user.user_type)} profile
						</Box>
					</Stack>
				</MenuItem>
			</Link>
			<Divider />
			<MenuItem
				onClick={() => {
					handleClose();
					handleLogout();
				}}
			>
				<ListItemIcon>
					<Logout size={22} />
				</ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
};

export default ProfileMenu;
