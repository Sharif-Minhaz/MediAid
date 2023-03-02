import { Grid } from "@mui/material";
import AboutDescription from "./AboutDescription";
import AboutImg from "./AboutImg";

const AboutSection = ({ data, direction }) => {
	const isRight = direction === "right";

	return (
		<>
			{isRight ? (
				<>
					<AboutImg image={data.image} />
					<AboutDescription
						heading={data.heading}
						shortHeading={data.shortHeading}
						description={data.description}
					/>
				</>
			) : (
				<>
					<AboutDescription
						heading={data.heading}
						shortHeading={data.shortHeading}
						description={data.description}
					/>
					<AboutImg image={data.image} />
				</>
			)}
		</>
	);
};

export default AboutSection;
