import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";

const AboutImg = ({ index, image }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: false,
	});

	return (
		<Grid
			className={`${inView ? "fade-in visible" : "fade-in-delay"}`}
			ref={ref}
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
