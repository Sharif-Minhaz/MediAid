import { Box, Paper, Stack, Typography } from "@mui/material";
import SectionTitle from "./../../components/SectionTitle";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const ProfileInfo = ({ profileData }) => {
	return (
		<Paper component="section" sx={{ mt: "15px" }}>
			<SectionTitle text="Profile Information" />
			<Box sx={{ p: "20px" }}>
				<Typography mb={3} color="#545454" fontSize={17}>
					{profileData.description}
				</Typography>
				<Stack rowGap={0.6}>
					<Typography fontSize={15.5} color="#484848">
						<span className="bold-titles">Organization:</span>{" "}
						{profileData.organization}
					</Typography>
					<Typography fontSize={15.5} color="#484848">
						<span className="bold-titles">Address:</span> {profileData.address}
					</Typography>
					<Typography
						fontSize={15.5}
						color="#484848"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						<span className="bold-titles">Email: </span>
						<a href={`mailto:${profileData.email}`} style={{ color: "inherit" }}>
							{profileData.email}
						</a>
					</Typography>
					<Typography
						fontSize={15.5}
						color="#484848"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						<span className="bold-titles">Contact: </span>
						<a
							href={`whatsapp://send?phone=${profileData.contact}`}
							style={{ color: "inherit" }}
						>
							{profileData.contact}
						</a>
					</Typography>

					<Stack direction="row" columnGap={0.5} mt={1}>
						<span className="bold-titles">Socials: </span>
						{profileData.socials.facebook && (
							<a href={profileData.socials.facebook}>
								<IconBrandFacebook size={19} />
							</a>
						)}
						{profileData.socials.instagram && (
							<a href={profileData.socials.instagram}>
								<IconBrandInstagram size={19} />
							</a>
						)}
						{profileData.socials.twitter && (
							<a href={profileData.socials.twitter}>
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
