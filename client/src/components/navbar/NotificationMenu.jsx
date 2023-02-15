import {
	Divider,
	ListSubheader,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";

const NotificationMenu = ({ anchorEl, open, handleClose }) => {
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
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<ListSubheader sx={{ display: "flex", justifyContent: "space-between", gap: 2, py: "10px" }}>
				<Typography fontSize="14px">All Notifications</Typography>
				<Typography fontSize="14px">Inbox</Typography>
			</ListSubheader>
			<Divider />
			<MenuItem onClick={handleClose}>1. Notification - 1</MenuItem>
			<MenuItem onClick={handleClose}>2. Notification - 2</MenuItem>
			<MenuItem onClick={handleClose}>3. Notification - 3</MenuItem>
		</Menu>
	);
};

export default NotificationMenu;
