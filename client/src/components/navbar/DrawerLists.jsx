import {
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import BrandAuthImg from '../../features/auth/BrandAuthImg';

const DrawerLists = ({ leftDrawerOpen, drawerWidth = { drawerWidth } }) => {
	return (
		<Box component="div" sx={{ width: drawerWidth }}>
			<Box p="28px 20px 13px">
				<BrandAuthImg height={27} disableMargin={true} />
			</Box>
			<List>
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
							<ListItemText primary={text} sx={{ opacity: leftDrawerOpen ? 1 : 0 }} />
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
							<ListItemText primary={text} sx={{ opacity: leftDrawerOpen ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default DrawerLists;
