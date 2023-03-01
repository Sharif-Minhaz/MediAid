import { Avatar, Box, Divider, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { IconLogout as Logout, IconEdit, IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ProfileMenu = ({ anchorEl, open, handleClose }) => {
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
					<Avatar src="/images/default-profile-pic.jpg" />{" "}
					<Stack>
						<Box component="span" color="#364152" fontSize={18}>
							John Doe
						</Box>
						<Box component="span" color="#364152" fontSize={14}>
							Profile
						</Box>
					</Stack>
				</MenuItem>
			</Link>
			<Divider />
			<Link to="/register">
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<IconUserCircle size={22} />
					</ListItemIcon>
					Register
				</MenuItem>
			</Link>
			<Link to="/login">
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<IconUserCircle size={22} />
					</ListItemIcon>
					Login
				</MenuItem>
			</Link>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<Logout size={22} />
				</ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
};

export default ProfileMenu;
