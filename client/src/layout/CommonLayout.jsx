import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import ProfileMenu from "../components/navbar/ProfileMenu";
import NotificationMenu from "../components/navbar/NotificationMenu";
import DrawerConfig from "../components/navbar/DrawerConfig";
import Navbar from "../components/navbar/Navbar";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export default function CommonLayout({ children }) {
	const [anchorEl, setAnchorEl] = useState({ profile: null, notification: null });
	const openProfile = Boolean(anchorEl.profile);
	const openNotification = Boolean(anchorEl.notification);

	const handleClick = (event) => {
		setAnchorEl((prev) => ({ ...prev, profile: event.currentTarget }));
	};

	const handleNotificationClick = (event) => {
		setAnchorEl((prev) => ({ ...prev, notification: event.currentTarget }));
	};

	const handleClose = () => {
		setAnchorEl({ profile: null, notification: null });
	};

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				{/* ====== Navbar here ======== */}
				<Navbar
					anchorEl={anchorEl}
					handleClick={handleClick}
					handleNotificationClick={handleNotificationClick}
				/>
				{/* ========= configured Drawer body here ========= */}
				<DrawerConfig />
				<Box component="main" sx={{ flexGrow: 1, pt: "13px", pb: { xs: 0, md: "20px" } }}>
					<DrawerHeader />
					<Box
						bgcolor="#eef2f6"
						pt="15px"
						mt="14px"
						sx={{
							ml: 0,
							mr: { xs: "0px", sm: 0, md: "20px" },
							px: { xs: "16px", sm: "20px" },
							pb: { xs: "16px", sm: "20px" },
							borderRadius: { sm: 0, md: 3 },
						}}
					>
						{/* ============= children here ============= */}
						{children}
					</Box>
				</Box>
			</Box>
			<NotificationMenu
				anchorEl={anchorEl.notification}
				open={openNotification}
				handleClose={handleClose}
			/>
			<ProfileMenu anchorEl={anchorEl.profile} open={openProfile} handleClose={handleClose} />
		</>
	);
}
