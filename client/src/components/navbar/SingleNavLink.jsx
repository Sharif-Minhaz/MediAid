import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useStateContext } from "../../contexts/ContextProvider";
import { NavLink } from "react-router-dom";

const SingleNavLink = ({ text, icon, link = "/" }) => {
	const { leftDrawerOpen } = useStateContext();
	return (
		<ListItem disablePadding sx={{ display: "block" }}>
			<Box
				component="div"
				sx={{
					mx: leftDrawerOpen ? 2 : "9px",
					mb: 1,
					borderRadius: "14px",
				}}
			>
				<NavLink to={link}>
					<ListItemButton
						sx={{
							minHeight: 48,
							justifyContent: leftDrawerOpen ? "initial" : "center",
							px: 2.5,
							borderRadius: "14px",
							color: "#364152",
							width: leftDrawerOpen ? "auto" : "47px",
							"& .MuiListItemIcon-root.css-wa5fuu-MuiListItemIcon-root": {
								mr: 2,
							},
							"&:hover": {
								color: "#5e35b1 !important",
								background: "#ede7f6",
							},
							"&:hover .MuiListItemIcon-root.css-wa5fuu-MuiListItemIcon-root": {
								color: "#5e35b1 !important",
							},
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: leftDrawerOpen ? 3 : "auto",
								justifyContent: "center",
							}}
						>
							{icon}
						</ListItemIcon>
						<ListItemText
							className="nav-text"
							primary={text}
							sx={{
								opacity: leftDrawerOpen ? 1 : 0,
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
