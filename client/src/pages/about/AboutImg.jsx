import { Grid } from "@mui/material";

const AboutImg = ({ image }) => {
	return (
		<Grid
			item
			xs={12}
			sm={5}
			sx={{
				p: 2.5,
				display: "flex",
				textAlign: "center",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<img className="drop-shadow-img" width="100%" src={image} alt={`about-${image}`} />
		</Grid>
	);
};

export default AboutImg;
