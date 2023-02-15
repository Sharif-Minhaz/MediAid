import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
	Box,
	Drawer,
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	Stack,
	useMediaQuery,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
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

export default function MiniDrawer() {
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
				<CustomAppBar
					sx={{ height: "83px", zIndex: { xs: 1200, sm: 1200, md: 1201 } }}
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
								minWidth: 234,
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
									<NotificationsNoneIcon fontSize="small" />
								</CustomIconButton>
								<ProfileBtn handleClick={handleClick} />
							</Stack>
						</Stack>
					</Toolbar>
				</CustomAppBar>
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
							<DrawerLists
								drawerWidth={drawerWidth}
								leftDrawerOpen={leftDrawerOpen}
							/>
						</Drawer>
					) : (
						<CustomDrawer
							sx={{
								display: { xs: "none", sm: "none", md: "block" },
							}}
							variant="permanent"
							open={leftDrawerOpen}
						>
							<DrawerLists
								drawerWidth={drawerWidth}
								leftDrawerOpen={leftDrawerOpen}
							/>
						</CustomDrawer>
					)}
				</Box>
				<Box component="main" sx={{ flexGrow: 1, pt: "13px" }}>
					<DrawerHeader />
					<Box
						borderRadius={3}
						bgcolor="#eef2f6"
						px="20px"
						pt="15px"
						mt="14px"
						mr="20px"
						sx={{ ml: { xs: "20px", sm: "20px", md: "0px" } }}
					>
						{/* ============= children here ============= */}
						<>
							<Typography textAlign={"justify"} paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
								dolor purus non enim praesent elementum facilisis leo vel. Risus at
								ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
								rutrum quisque non tellus. Convallis convallis tellus id interdum
								velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
								sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
								integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
								eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
								quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
								vivamus at augue. At augue eget arcu dictum varius duis at
								consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
								donec massa sapien faucibus et molestie ac.
							</Typography>
							<Typography textAlign={"justify"} paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
								dolor purus non enim praesent elementum facilisis leo vel. Risus at
								ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
								rutrum quisque non tellus. Convallis convallis tellus id interdum
								velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
								sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
								integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
								eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
								quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
								vivamus at augue. At augue eget arcu dictum varius duis at
								consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
								donec massa sapien faucibus et molestie ac.
							</Typography>
							<Typography textAlign={"justify"} paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
								dolor purus non enim praesent elementum facilisis leo vel. Risus at
								ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
								rutrum quisque non tellus. Convallis convallis tellus id interdum
								velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
								sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
								integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
								eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
								quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
								vivamus at augue. At augue eget arcu dictum varius duis at
								consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
								donec massa sapien faucibus et molestie ac.
							</Typography>
							<Typography textAlign={"justify"} paragraph>
								Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
								ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
								elementum integer enim neque volutpat ac tincidunt. Ornare
								suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
								volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
								Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
								ornare massa eget egestas purus viverra accumsan in. In hendrerit
								gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
								aliquam sem et tortor. Habitant morbi tristique senectus et.
								Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
								euismod elementum nisi quis eleifend. Commodo viverra maecenas
								accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
								ultrices sagittis orci a.
							</Typography>
						</>
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
