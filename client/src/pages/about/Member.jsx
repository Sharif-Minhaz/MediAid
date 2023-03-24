import { Box, Grid } from "@mui/material";
import SocialMediaSection from "./SocialMediaSection";
import { useInView } from "react-intersection-observer";

const Member = ({ data }) => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});

	return (
		<Grid item xs={12} sm={6} className={`${inView ? "fade-in visible" : "fade-in"}`} ref={ref}>
			<Box className="card">
				<Box className="card-image">
					<img loading="lazy" effect="blur" src={data.image} alt="card image" />
				</Box>

				<Box className="card-content">
					<span className="card-name">{data.name}</span>
					<span className="card-title">{data.title}</span>
					<p className="card-text">{data.bio}</p>
					{/* social media section - facebook, github and whatsapp */}
					<SocialMediaSection fb={data.fb} gh={data.gh} wp={data.wp} />
					<a href={`mailto:${data.email}`}>
						<button className="card-btn">Hire Me</button>
					</a>
				</Box>
			</Box>
		</Grid>
	);
};

export default Member;
