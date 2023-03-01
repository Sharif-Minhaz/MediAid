import { Box, Paper, Stack, Typography } from "@mui/material";
import SectionTitle from "./../../components/SectionTitle";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const ProfileInfo = () => {
	return (
		<Paper component="section" sx={{ mt: "15px" }}>
			<SectionTitle text="Profile Information" />
			<Box sx={{ p: "20px" }}>
				<Typography mb={3} color="#545454" fontSize={17}>
					Hi, I am John. Medicine donation is the act of giving medications to those in
					need, either directly or through a charitable organization. The donation of
					medication can help individuals who cannot afford or do not have access to
					necessary medications due to financial or other barriers.
				</Typography>
				<Stack rowGap={0.6}>
					<Typography fontSize={15.5} color="#484848">
						<span className="bold-titles">Organization:</span> Daffodil International
						University
					</Typography>
					<Typography fontSize={15.5} color="#484848">
						<span className="bold-titles">Email: </span>
						<a href="" style={{ color: "inherit" }}>
							john@gmail.com
						</a>
					</Typography>
					<Typography fontSize={15.5} color="#484848">
						<span className="bold-titles">Contact: </span>
						<a href="" style={{ color: "inherit" }}>
							017323402437
						</a>
					</Typography>

					<Stack direction="row" columnGap={0.5} mt={1}>
						<span className="bold-titles">Socials: </span>
						<a href="https://www.facebook.com/">
							<IconBrandFacebook size={19} />
						</a>
						<a href="https://www.instagram.com/">
							<IconBrandInstagram size={19} />
						</a>
						<a href="https://twitter.com/?lang=en">
							<IconBrandTwitter size={19} />
						</a>
					</Stack>
				</Stack>
			</Box>
		</Paper>
	);
};

export default ProfileInfo;
