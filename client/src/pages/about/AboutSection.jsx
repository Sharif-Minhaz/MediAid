import { Fragment } from "react";
import AboutDescription from "./AboutDescription";
import AboutImg from "./AboutImg";
import { useInView } from "react-intersection-observer";

const AboutSection = ({ index, data, direction }) => {
	const isRight = direction === "right";

	return (
		<>
			{isRight ? (
				<Fragment>
					<AboutImg index={index} image={data.image} />
					<AboutDescription
						index={index}
						heading={data.heading}
						shortHeading={data.shortHeading}
						description={data.description}
					/>
				</Fragment>
			) : (
				<Fragment>
					<AboutDescription
						index={index}
						heading={data.heading}
						shortHeading={data.shortHeading}
						description={data.description}
					/>
					<AboutImg index={index} image={data.image} />
				</Fragment>
			)}
		</>
	);
};

export default AboutSection;
