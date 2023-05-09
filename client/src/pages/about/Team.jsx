import { Grid } from "@mui/material";
import Member from "./Member";

const teamData = [
	{
		name: "Sharif Md. Minhaz",
		image: "https://res.cloudinary.com/hostingimagesservice/image/upload/v1678629215/mediAid/minhaz_skyejo.png",
		title: "Web Developer",
		bio: "I'm a skilled MERN stack developer with expertise in MongoDB, Express, React, and Node.js. Passionate about building dynamic and efficient fullstack web applications.",
		fb: "https://www.facebook.com/sharif.mdminhaz",
		wp: "whatsapp://send?phone=+8801308673831",
		gh: "https://github.com/Sharif-Minhaz",
		email: "sharif35-3001@diu.edu.bd"
	},
	{
		name: "Asiful Haque",
		image: "https://res.cloudinary.com/hostingimagesservice/image/upload/v1678629486/mediAid/asif_ydpipe.jpg",
		title: "Competitive Programmer",
		bio: "Passionate competitive programmer constantly pushing the boundaries of computer science with a proven track record of success in programming competitions.",
		fb: "https://www.facebook.com/asifiul.haque",
		wp: "whatsapp://send?phone=+8801879205152",
		gh: "https://github.com/Asiful-Haque",
		email: "asiful35-2961@diu.edu.bd"
	},
];

const Team = () => {
	return (
		<Grid container spacing="20px" sx={{ padding: { xs: "16px", sm: "20px" } }}>
			{teamData.map((data, i) => (
				<Member key={i} data={data} />
			))}
		</Grid>
	);
};

export default Team;
