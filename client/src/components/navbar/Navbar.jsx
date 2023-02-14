import { styled } from "@mui/material/styles";
import {
	Box,
	Drawer,
	AppBar,
	Toolbar,
	List,
	CssBaseline,
	Typography,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useStateContext } from "../../contexts/ContextProvider";
import CustomIconButton from "../../theme/customComponent/CustomIconButton";
import SearchBar from "../SearchBar";
import ProfileBtn from "./ProfileBtn";

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
	const { leftDrawerOpen, handleLeftDrawerToggle } = useStateContext();

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<CustomAppBar
				sx={{ height: "83px" }}
				elevation={0}
				color="light"
				position="fixed"
				open={leftDrawerOpen}
			>
				<Toolbar sx={{ display: "flex", alignItems: "center", height: "100%" }}>
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						width="285px"
					>
						<img src="/images/default.png" alt="brand-logo" height="27" />
						<DrawerHeader>
							<CustomIconButton onClick={handleLeftDrawerToggle}>
								<MenuIcon fontSize="small" />
							</CustomIconButton>
						</DrawerHeader>
					</Stack>
					<Stack
						direction="row"
						width="100%"
						alignItems="center"
						justifyContent="space-between"
					>
						<SearchBar />
						<Stack direction="row" alignItems="center" gap={2}>
							<CustomIconButton>
								<NotificationsNoneIcon fontSize="small" />
							</CustomIconButton>
							<ProfileBtn />
						</Stack>
					</Stack>
				</Toolbar>
			</CustomAppBar>
			<CustomDrawer variant="permanent" open={leftDrawerOpen}>
				<Divider />
				<List sx={{ mt: 8 }}>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: "block" }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: leftDrawerOpen ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: leftDrawerOpen ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText
									primary={text}
									sx={{ opacity: leftDrawerOpen ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: "block" }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: leftDrawerOpen ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: leftDrawerOpen ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText
									primary={text}
									sx={{ opacity: leftDrawerOpen ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</CustomDrawer>
			<Box component="main" sx={{ flexGrow: 1, pt: "5px" }}>
				<DrawerHeader />
				<Box borderRadius={3} bgcolor="#eef2f6" px="20px" pt="15px" mt="14px" mr="20px">
					<Typography textAlign={"justify"} paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
						morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
						bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
						Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
						commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
						vivamus at augue. At augue eget arcu dictum varius duis at consectetur
						lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
						faucibus et molestie ac.
					</Typography>
					<Typography textAlign={"justify"} paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
						morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
						bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
						Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
						commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
						vivamus at augue. At augue eget arcu dictum varius duis at consectetur
						lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
						faucibus et molestie ac.
					</Typography>
					<Typography textAlign={"justify"} paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
						enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
						imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
						Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
						morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
						bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
						Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
						commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
						vivamus at augue. At augue eget arcu dictum varius duis at consectetur
						lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
						faucibus et molestie ac.
					</Typography>
					<Typography textAlign={"justify"} paragraph>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
						eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
						neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
						tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed
						odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
						tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
						gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
						et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
						tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
						eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
						posuere sollicitudin aliquam ultrices sagittis orci a.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
