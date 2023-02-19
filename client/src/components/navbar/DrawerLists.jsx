import { List, Divider, Box } from "@mui/material";
import {
	IconHome as Home,
	IconVaccineBottle,
	IconBrandGooglePhotos,
	IconHistory,
	IconClipboardList,
	IconCheckupList,
	IconAward,
	IconClipboardHeart,
	IconLockOpen,
	IconMessage,
	IconAddressBook,
	IconNotebook,
	IconDashboard,
	IconHeartHandshake,
} from "@tabler/icons-react";
import BrandAuthImg from "../../features/auth/BrandAuthImg";
import SingleNavLink from "./SingleNavLink";

const DrawerLists = ({ drawerWidth = 260, isSmallScreen }) => {
	return (
		<Box component="div" sx={{ width: drawerWidth }}>
			{isSmallScreen && (
				<Box p="28px 20px 13px">
					<BrandAuthImg height={27} disableMargin={true} />
				</Box>
			)}
			<List sx={{ pt: "6px" }}>
				<SingleNavLink link="/" text="Home" icon={<Home size={20} />} />
				<SingleNavLink
					link="/dashboard"
					text="Dashboard"
					icon={<IconDashboard size={20} />}
				/>
				<SingleNavLink
					link="/medicines"
					text="Medicines"
					icon={<IconVaccineBottle size={20} />}
				/>
				<SingleNavLink
					link="/gallery"
					text="Gallery"
					icon={<IconBrandGooglePhotos size={20} />}
				/>
				<SingleNavLink
					link="/donate"
					text="Donate"
					icon={<IconHeartHandshake size={20} />}
				/>
				<SingleNavLink link="/h" text="History" icon={<IconHistory size={20} />} />
				<SingleNavLink link="/d" text="Donor List" icon={<IconClipboardList size={20} />} />
				<SingleNavLink
					link="/r"
					text="Receiver List"
					icon={<IconCheckupList size={20} />}
				/>
				<SingleNavLink link="/b" text="Best Donor" icon={<IconAward size={20} />} />
				<SingleNavLink
					link="/he"
					text="Health Tips"
					icon={<IconClipboardHeart size={20} />}
				/>
			</List>
			<Divider />
			<List>
				<SingleNavLink
					link="/reset-password"
					text="Reset Password"
					icon={<IconLockOpen size={20} />}
				/>
				<SingleNavLink link="f" text="FAQ" icon={<IconMessage size={20} />} />
				<SingleNavLink link="c" text="Contact" icon={<IconAddressBook size={20} />} />
				<SingleNavLink link="ab" text="About" icon={<IconNotebook size={20} />} />
			</List>
		</Box>
	);
};

export default DrawerLists;
