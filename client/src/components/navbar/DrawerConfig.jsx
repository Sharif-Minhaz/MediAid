import { Box, Drawer, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { close, drawerStatus } from "../../features/drawer/drawerSlice";
import DrawerLists from "./DrawerLists";

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		...(open && {
			...openedMixin(theme),
			"& .MuiDrawer-paper": { ...openedMixin(theme), borderRight: 0 },
		}),
		...(!open && {
			...closedMixin(theme),
			"& .MuiDrawer-paper": { ...closedMixin(theme), borderRight: 0 },
		}),
	})
);

const drawerWidth = 260;

const DrawerConfig = () => {
	const isSmallScreen = useMediaQuery("(max-width:899px)");
	const drawerOpen = useSelector(drawerStatus);

	const dispatch = useDispatch();

	return (
		<Box component="div">
			{isSmallScreen ? (
				<Drawer
					variant="temporary"
					open={drawerOpen}
					onClose={() => dispatch(close())}
					sx={{
						display: { xs: "block", sm: "block", md: "none" },
					}}
				>
					<DrawerLists isSmallScreen={isSmallScreen} drawerWidth={drawerWidth} />
				</Drawer>
			) : (
				<CustomDrawer
					sx={{
						display: { xs: "none", sm: "none", md: "block" },
					}}
					variant="permanent"
					open={drawerOpen}
					className="down-list"
				>
					<DrawerLists isSmallScreen={isSmallScreen} drawerWidth={drawerWidth} />
				</CustomDrawer>
			)}
		</Box>
	);
};

export default DrawerConfig;
