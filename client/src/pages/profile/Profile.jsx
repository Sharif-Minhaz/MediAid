import { Box, Button, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import ProfileMedicines from "./ProfileMedicines";
import {
	IconInfoSquare,
	IconHeartHandshake,
	IconClipboardHeart,
	IconPencil,
} from "@tabler/icons-react";

const medicines = [
	{
		id: "1",
		medicineName: "Esoral Mups",
		medicineDescription:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		medicineImage: "/images/esoral-mups.png",
		donarName: "Sharif Md. Minhaz",
		donarContact: "01309832862",
		companyName: "Square",
		rating: 4.8,
	},
	{
		id: "2",
		medicineName: "AstraZeneca",
		medicineDescription:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		medicineImage: "/images/AstraZeneca.avif",
		donarName: "Sharif Md. Minhaz",
		donarContact: "01309832862",
		companyName: "Square",
		rating: 4.3,
	},
	{
		id: "3",
		medicineName: "Brineura",
		medicineDescription:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		medicineImage: "/images/brineura.jpeg",
		donarName: "Sharif Md. Minhaz",
		donarContact: "01309832862",
		companyName: "Square",
		rating: 4.6,
	},
];

const medicine2 = [
	{
		id: "4",
		medicineName: "Spinraza",
		medicineDescription:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		medicineImage: "/images/Spinraza.jpg",
		donarName: "Sharif Md. Minhaz",
		donarContact: "01309832862",
		companyName: "Square",
		rating: 4.2,
	},
	{
		id: "5",
		medicineName: "Esoral Mups",
		medicineDescription:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		medicineImage: "/images/esoral-mups.png",
		donarName: "Sharif Md. Minhaz",
		donarContact: "01309832862",
		companyName: "Square",
		rating: 4.9,
	},
];

const profileData = {
	fullName: "John Doe",
	designation: "UI/UX designer",
	profilePicture: "/images/default-profile-pic.jpg",
	description:
		"Hi, I am John. Medicine donation is the act of giving medications to those in	need, either directly or through a charitable organization. The donation of medication can help individuals who cannot afford or do not have access to necessary medications due to financial or other barriers.",
	email: "john@gmail.com",
	contact: "+8801308673831",
	organization: "Daffodil International University",
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/",
		twitter: "https://twitter.com/?lang=en",
	},
	address: "Savar, Dhaka",
};

const Profile = () => {
	const navigate = useNavigate();
	const smallScreen = useMediaQuery("(max-width: 550px)");
	const [currentTab, setCurrentTab] = useState("About");

	return (
		<>
			<Paper component="section">
				<Box component="div" sx={{ height: { xs: 370, sm: 340 } }}>
					<Box
						component="div"
						sx={{
							background: "url(/images/timeline.jpg)",
							position: "relative",
							height: "280px",
							borderTopLeftRadius: "12px",
							borderTopRightRadius: "12px",
						}}
					>
						<Box
							component="div"
							sx={{ position: "absolute", bottom: "-27px", left: "30px" }}
						>
							<Stack direction="row" alignItems="center" gap={2.5}>
								<Box
									component="div"
									sx={{
										height: "8rem",
										width: "8rem",
										border: "0.357rem solid #fff",
										backgroundColor: "#fff",
										borderRadius: "0.428rem",
										boxShadow: "0 4px 24px 0 rgb(34 41 47 / 10%)",
									}}
								>
									<img
										loading="lazy"
										src={profileData.profilePicture}
										style={{ width: "100%", borderRadius: "5px" }}
									/>
								</Box>
								<Stack color="white" rowGap={0.3}>
									<Typography fontSize="1.71rem">
										{profileData.fullName}
									</Typography>
									<Typography fontSize="0.95rem" color="whitesmoke">
										{profileData.designation}
									</Typography>
								</Stack>
							</Stack>
						</Box>
					</Box>
					<Stack
						direction="row"
						justifyContent="space-between"
						sx={{ m: { xs: "45px 16px auto 16px", sm: "14.5px 16px auto 176px" } }}
					>
						<Stack direction="row" columnGap={1}>
							<>
								{[
									{ text: "About", icon: <IconInfoSquare /> },
									{ text: "Donated", icon: <IconHeartHandshake /> },
									{ text: "Received", icon: <IconClipboardHeart /> },
								].map((item) => (
									<Button
										key={item.text}
										disableElevation
										size="small"
										sx={{
											color: currentTab === item.text ? "whitesmoke" : "",
											minWidth: smallScreen ? "35px" : "64px",
											padding: smallScreen ? "4px 0" : "4px 10px",
										}}
										variant={currentTab === item.text ? "contained" : "text"}
										onClick={() => setCurrentTab(item.text)}
									>
										{smallScreen ? item.icon : item.text}
									</Button>
								))}
							</>
						</Stack>
						<Button
							disableElevation
							size="small"
							sx={{
								color: "whitesmoke",
								minWidth: smallScreen ? "35px" : "64px",
								padding: smallScreen ? "4px 0" : "4px 10px",
							}}
							variant="contained"
							onClick={() => navigate("/profile/edit", { state: profileData })}
						>
							{smallScreen ? <IconPencil /> : "Edit"}
						</Button>
					</Stack>
				</Box>
			</Paper>

			{currentTab === "About" && <ProfileInfo profileData={profileData} />}
			{currentTab === "Donated" && (
				<ProfileMedicines medicines={medicines} titleText="Donated Medicines" />
			)}
			{currentTab === "Received" && (
				<ProfileMedicines medicines={medicine2} titleText="Received Medicines" />
			)}
		</>
	);
};

export default Profile;
