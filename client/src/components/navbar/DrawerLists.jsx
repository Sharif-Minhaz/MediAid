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
	IconMedicineSyrup,
	IconPhotoPlus,
	IconLoader,
} from "@tabler/icons-react";
import BrandAuthImg from "../../features/auth/BrandAuthImg";
import SingleNavLink from "./SingleNavLink";
import { userInfoStatus as userInfo } from "../../features/auth/userInfoSlice";
import { useSelector } from "react-redux";

const DrawerLists = ({ drawerWidth = 260, isSmallScreen }) => {
	const userInfoStatus = useSelector(userInfo);
	return (
		<Box component="div" sx={{ width: drawerWidth }}>
			{isSmallScreen && (
				<Box p="28px 20px 13px">
					<BrandAuthImg height={27} disableMargin={true} />
				</Box>
			)}
			<List sx={{ pt: "6px" }}>
				{userInfoStatus?.user_type === "admin" ? (
					<SingleNavLink
						link="/dashboard"
						text="Dashboard"
						icon={<IconDashboard size={20} />}
					/>
				) : (
					<SingleNavLink link="/" text="Home" icon={<Home size={20} />} />
				)}
				<SingleNavLink
					link="/medicines"
					text="Medicines"
					icon={<IconVaccineBottle size={20} />}
				/>
				{userInfoStatus?.user_type === "admin" && (
					<SingleNavLink
						link="/medicine/add"
						text="Add Medicine"
						icon={<IconMedicineSyrup size={20} />}
					/>
				)}
				<SingleNavLink
					link="/gallery"
					text="Gallery"
					icon={<IconBrandGooglePhotos size={20} />}
				/>
				{userInfoStatus?.user_type === "admin" && (
					<SingleNavLink
						link="/gallery-photo/add"
						text="Add Photo"
						icon={<IconPhotoPlus size={20} />}
					/>
				)}
				<SingleNavLink
					link="/donate"
					text="Donate"
					icon={<IconHeartHandshake size={20} />}
				/>
				{userInfoStatus?.user_type === "admin" && (
					<>
						<SingleNavLink
							link="/pending"
							text="Pending"
							icon={<IconLoader size={20} />}
						/>
						<SingleNavLink
							link="/history"
							text="History"
							icon={<IconHistory size={20} />}
						/>
						<SingleNavLink
							link="/donor-list"
							text="Donation List"
							icon={<IconClipboardList size={20} />}
						/>
						<SingleNavLink
							link="/receiver-list"
							text="Receiver List"
							icon={<IconCheckupList size={20} />}
						/>
					</>
				)}
				<SingleNavLink
					link="/best-donors"
					text="Best Donor"
					icon={<IconAward size={20} />}
				/>
				<SingleNavLink
					link="/health-tips"
					text="Health Tips"
					icon={<IconClipboardHeart size={20} />}
				/>
			</List>
			<Divider />
			<List>
				{(userInfoStatus?.user_type === "user" ||
					userInfoStatus?.user_type === "admin") && (
					<SingleNavLink
						link="/reset-password"
						text="Reset Password"
						icon={<IconLockOpen size={20} />}
					/>
				)}
				{!(userInfoStatus?.user_type === "admin") && (
					<>
						<SingleNavLink link="/faq" text="FAQ" icon={<IconMessage size={20} />} />
						<SingleNavLink
							link="/contact"
							text="Contact"
							icon={<IconAddressBook size={20} />}
						/>
						<SingleNavLink
							link="/about"
							text="About"
							icon={<IconNotebook size={20} />}
						/>
					</>
				)}
			</List>
		</Box>
	);
};

export default DrawerLists;
