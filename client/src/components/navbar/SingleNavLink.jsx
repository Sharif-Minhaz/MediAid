import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { drawerStatus } from "../../features/drawer/drawerSlice";
import { NavLink } from "react-router-dom";

const SingleNavLink = ({ text, icon, link = "/" }) => {
	const drawerOpen = useSelector(drawerStatus);

	return (
		<ListItem disablePadding sx={{ display: "block" }}>
			<Box
				component="div"
				sx={{
					mx: drawerOpen ? 2 : "9px",
					mb: 1,
					borderRadius: "14px",
				}}
			>
				<NavLink to={link}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: drawerOpen ? "initial" : "center",
							px: 2.5,
							borderRadius: "14px",
							color: "#364152",
							width: drawerOpen ? "auto" : "47px",
							"& .MuiListItemIcon-root": {
								mr: drawerOpen ? 2 : 0,
							},
							"&:hover": {
								color: "#5e35b1 !important",
								backgroundColor: "#ede7f6",
								"&.MuiButtonBase-root .MuiListItemIcon-root": {
									color: "#5e35b1 !important",
									borderColor: "red",
								},
							},
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: drawerOpen ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							{icon}
						</ListItemIcon>
						<ListItemText
							className="nav-text"
							primary={text}
							sx={{
								opacity: drawerOpen ? 1 : 0,
								fontSize: "0.875rem",
								fontWeight: 400,
							}}
						/>
					</ListItemButton>
				</NavLink>
			</Box>
		</ListItem>
	);
};

export default SingleNavLink;
