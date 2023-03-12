import AboutDescription from "./AboutDescription";
import AboutImg from "./AboutImg";

const AboutSection = ({ index, data, direction }) => {
	const isRight = direction === "right";

	return (
		<>
			{isRight ? (
				<>
					<AboutImg index={index} image={data.image} />
					<AboutDescription
						index={index}
						heading={data.heading}
						shortHeading={data.shortHeading}
						description={data.description}
					/>
				</>
			) : (
				<>
					<AboutDescription
						index={index}
						heading={data.heading}
						shortHeading={data.shortHeading}
						description={data.description}
					/>
					<AboutImg index={index} image={data.image} />
				</>
			)}
		</>
	);
};

export default AboutSection;
