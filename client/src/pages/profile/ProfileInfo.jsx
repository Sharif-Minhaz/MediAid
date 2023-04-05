import { Box, Paper, Stack, Typography } from "@mui/material";
import SectionTitle from "./../../components/SectionTitle";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const ProfileInfo = ({ profileData }) => {
	return (
		<Paper component="section" sx={{ mt: "15px" }}>
			<SectionTitle text="Profile Information" />
			<Box sx={{ p: "20px" }}>
				{profileData?.profile.description && (
					<Typography mb={3} color="#545454" fontSize={17}>
						{profileData?.profile.description}
					</Typography>
				)}
				<Stack rowGap={0.6}>
					<Typography fontSize={15.5} color="#484848">
						<span className="bold-titles">Organization:</span>{" "}
						{profileData?.profile.organization || <i>info not provided yet</i>}
					</Typography>
					<Typography fontSize={15.5} color="#484848">
						<span className="bold-titles">Address:</span>{" "}
						{profileData?.profile.address || <i>info not provided yet</i>}
					</Typography>
					<Typography
						fontSize={15.5}
						color="#484848"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						<span className="bold-titles">Email: </span>
						<a
							href={`mailto:${profileData?.profile.email}`}
							style={{ color: "inherit" }}
						>
							{profileData?.profile.email}
						</a>
					</Typography>
					<Typography
						fontSize={15.5}
						color="#484848"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						<span className="bold-titles">Contact: </span>
						<a
							href={`whatsapp://send?phone=${profileData?.profile.contact}`}
							style={{ color: "inherit" }}
						>
							{profileData?.profile.contact || <i>info not provided yet</i>}
						</a>
					</Typography>

					<Stack direction="row" columnGap={0.5} mt={1}>
						<span className="bold-titles">
							Socials:{" "}
							{!(
								profileData?.profile.facebook ||
								profileData?.profile.instagram ||
								profileData?.profile.twitter
							) ? (
								<i>info not provided yet</i>
							) : (
								""
							)}
						</span>
						{profileData?.profile.facebook && (
							<a href={profileData?.profile.facebook}>
								<IconBrandFacebook size={19} />
							</a>
						)}
						{profileData?.profile.instagram && (
							<a href={profileData?.profile.instagram}>
								<IconBrandInstagram size={19} />
							</a>
						)}
						{profileData?.profile.twitter && (
							<a href={profileData?.profile.twitter}>
								<IconBrandTwitter size={19} />
							</a>
						)}
					</Stack>
				</Stack>
			</Box>
		</Paper>
	);
};

export default ProfileInfo;
