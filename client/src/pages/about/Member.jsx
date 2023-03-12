import { Box, Grid } from "@mui/material";
import SocialMediaSection from "./SocialMediaSection";

const Member = ({ data }) => {
	return (
		<Grid item xs={12} sm={6}>
			<Box className="card">
				<Box className="card-image">
					<img src={data.image} alt="card image" />
				</Box>

				<Box className="card-content">
					<span className="card-name">{data.name}</span>
					<span className="card-title">{data.title}</span>
					<p className="card-text">{data.bio}</p>
					{/* social media section - facebook, github and whatsapp */}
					<SocialMediaSection fb={data.fb} gh={data.gh} wp={data.wp} />
					<button className="card-btn">Hire Me</button>
				</Box>
			</Box>
		</Grid>
	);
};

export default Member;
