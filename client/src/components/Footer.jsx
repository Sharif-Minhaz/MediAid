import { Box, Paper, Stack, Typography } from "@mui/material";
import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Paper
			sx={{ mt: { xs: "16px", md: "20px" }, px: { xs: "16px", md: "20px" }, py: "28px" }}
			component="footer"
		>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography color="#4b4a72">
					&copy; <Link to="/">CODE-FUSION</Link> - {new Date().getFullYear()}
				</Typography>
				<Stack direction="row" alignItems="center" columnGap={1}>
					<Link to="/">
						<IconBrandLinkedin />
					</Link>
					<Link to="/">
						<IconBrandFacebook />
					</Link>
					<Link to="/">
						<IconBrandGithub />
					</Link>
				</Stack>
			</Stack>
		</Paper>
	);
};

export default Footer;
