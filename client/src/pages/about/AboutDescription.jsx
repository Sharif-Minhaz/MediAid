import { Box, Chip, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IconPlus, IconTargetArrow } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";

const AboutDescription = ({ index, description, shortHeading, heading }) => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});

	return (
		<Grid
			className={`${inView ? "fade-in visible" : "fade-in"}`}
			ref={ref}
			item
			xs={12}
			sm={7}
			sx={{ display: "flex", alignItems: "center" }}
		>
			<Box component="div" sx={{ p: { xs: 2, sm: 3 } }}>
				<Chip
					icon={<IconTargetArrow />}
					label={shortHeading}
					variant="outlined"
					sx={{ mb: 2 }}
				/>
				<Typography variant="h5" className="main-heading" mb={1}>
					{heading}
				</Typography>
				<Typography variant="body1" className="about-body" mb={1.7}>
					{description}
				</Typography>
				<Link
					to="/"
					className="about-learn-more"
					style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
				>
					<IconPlus size={17} stroke={2.5} style={{ marginBottom: "2px" }} />
					<span>Learn more</span>
				</Link>
			</Box>
		</Grid>
	);
};

export default AboutDescription;
