import { cloneElement, useState } from "react";
import { styled } from "@mui/material/styles";
import {
	Box,
	Drawer,
	AppBar,
	Toolbar,
	CssBaseline,
	Stack,
	useMediaQuery,
	useScrollTrigger,
} from "@mui/material";
import { IconBell as NotificationsNoneIcon } from "@tabler/icons-react";
import { useStateContext } from "../../contexts/ContextProvider";
import CustomIconButton from "../../theme/customComponent/CustomIconButton";
import SearchBar from "../SearchBar";
import ProfileBtn from "./ProfileBtn";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import DrawerLists from "./DrawerLists";
import DrawerHeaderContents from "./DrawerHeaderContents";

const drawerWidth = 260;

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

const ElevationScroll = ({ children }) => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const CustomAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
}));

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

export default function Navbar({ children }) {
	const isSmallScreen = useMediaQuery("(max-width:899px)");
	const { leftDrawerOpen, handleLeftDrawerToggle, handleLeftDrawerClose } = useStateContext();

	const [showFullSearch, setShowFullSearch] = useState(false);
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

	const handleShowFullSearch = () => {
		setShowFullSearch((prev) => !prev);
	};

	return (
		<>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<ElevationScroll>
					<CustomAppBar
						sx={{ height: "83px", zIndex: { xs: 1200, md: 1201 } }}
						elevation={0}
						color="light"
						position="fixed"
						open={leftDrawerOpen}
					>
						{/* ============= visible full search ============ */}
						{showFullSearch && (
							<SearchBar
								sm="flex"
								md="none"
								lgWidth="100%"
								mdWidth="100%"
								smWidth="100%"
								position="absolute"
								handleShowFullSearch={handleShowFullSearch}
							/>
						)}
						<Toolbar sx={{ display: "flex", alignItems: "center", height: "100%" }}>
							<DrawerHeader
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: {
										xs: "flex-start",
										sm: "flex-start",
										md: "space-between",
									},
									gap: 2,
									minWidth: { xs: 105, md: 234 },
									pl: { xs: 0, sm: 0 },
								}}
							>
								{/* =========== drawer contents =========== */}
								<DrawerHeaderContents
									handleShowFullSearch={handleShowFullSearch}
									handleLeftDrawerToggle={handleLeftDrawerToggle}
								/>
							</DrawerHeader>
							<Stack
								direction="row"
								width="100%"
								alignItems="center"
								sx={{
									justifyContent: {
										xs: "flex-end",
										sm: "flex-end",
										md: "space-between",
									},
									ml: 1,
								}}
							>
								<SearchBar
									sm="none"
									md="flex"
									lgWidth="430px"
									mdWidth="250px"
									smWidth="250px"
								/>
								<Stack direction="row" alignItems="center" gap={2}>
									<CustomIconButton onClick={handleNotificationClick}>
										<NotificationsNoneIcon size={22} />
									</CustomIconButton>
									<ProfileBtn handleClick={handleClick} />
								</Stack>
							</Stack>
						</Toolbar>
					</CustomAppBar>
				</ElevationScroll>

				<Box component="div">
					{isSmallScreen ? (
						<Drawer
							variant="temporary"
							open={leftDrawerOpen}
							onClose={handleLeftDrawerClose}
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
							open={leftDrawerOpen}
							className="down-list"
						>
							<DrawerLists isSmallScreen={isSmallScreen} drawerWidth={drawerWidth} />
						</CustomDrawer>
					)}
				</Box>
				<Box component="main" sx={{ flexGrow: 1, pt: "13px", pb: { xs: 0, md: "20px" } }}>
					<DrawerHeader />
					<Box
						bgcolor="#eef2f6"
						pt="15px"
						mt="14px"
						sx={{
							ml: 0,
							mr: { xs: "0px", md: "20px", lg: "20px" },
							px: { xs: "16px", md: "20px" },
							pb: { xs: "16px", md: "20px" },
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
