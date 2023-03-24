import "./About.css";
import { Fragment } from "react";
import { Grid, Paper, Divider } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import AboutSection from "./AboutSection";
import Team from "./Team";

const aboutData = [
	{
		shortHeading: "OUR MISSION",
		heading: "The primary purpose of our organization",
		image: "/images/about/about-1.png",
		description:
			"At MediAid, we believe that everyone should have access to the medicines they need to live healthy, fulfilling lives. Unfortunately, many people around the world struggle to access essential medications due to a lack of resources or other barriers. That's why we've created this app - to connect those who have unused or unexpired medicines with those who need them most. Our goal is to reduce waste, save lives, and empower individuals and communities to take control of their health. By using [App Name], you can make a tangible difference in someone's life - whether you're donating your unused medications.",
	},
	{
		shortHeading: "OUR VISION",
		heading: "The plant for our desired future",
		image: "/images/about/about-3.png",
		description:
			"At MediAid, our vision is a world where everyone has access to the medicines they need to live healthy, fulfilling lives - regardless of their income, location, or other barriers. We envision a future where medicine waste is minimized, and where individuals and communities have the resources and support they need to take charge of their health. We believe that access to medicine is a fundamental human right, and that everyone deserves to have the opportunity to live a healthy, happy life. Through our app, we strive to create a community of individuals who are passionate about making a difference in the world.",
	},
	{
		shortHeading: "OUR PROMISE",
		heading: "Our commitments and guarantees",
		image: "/images/about/about-5.png",
		description:
			"We are committed to promoting transparency, safety, and equity in everything we do. We promise to: Provide a safe, secure platform for medicine donations and requests. Thoroughly vet all donated medications to ensure their safety and efficacy. Protect the privacy and personal information of our users. Work to reduce medicine waste and promote sustainable healthcare practices. Empower individuals to take control of their health. By making these promises, we aim to build trust and accountability with our users, and to create a platform that truly makes a difference in people's lives.",
	},
];

const About = () => {
	return (
		<>
			<Paper component="section">
				<SectionTitle text="About Us" />
				<Grid container columnSpacing="20px" sx={{ rowGap: { xs: 1, sm: 5 } }}>
					{aboutData.map((data, i) => (
						<Fragment key={i}>
							<AboutSection
								index={i}
								data={data}
								direction={i % 2 === 0 ? "left" : "right"}
							/>
							<Divider
								sx={{ width: "100%", borderWidth: "1px", borderColor: "#eef2f6" }}
							/>
						</Fragment>
					))}
				</Grid>
			</Paper>
			<Paper component="section" sx={{ mt: "15px" }}>
				<SectionTitle text="Meet Our Team" />
				<Team />
			</Paper>
		</>
	);
};

export default About;
