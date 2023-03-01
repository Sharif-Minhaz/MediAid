import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
import ProfileMedicines from "./ProfileMedicines";

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
	name: "John Doe",
	designation: "UI/UX designer",
	profilePicture: "/images/default-profile-pic.jpg",
};

const Profile = () => {
	const navigate = useNavigate();
	const [currentTab, setCurrentTab] = useState("About");

	return (
		<>
			<Paper component="section" sx={{ mt: "5px" }}>
				<Box component="div" height={340}>
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
										src={profileData.profilePicture}
										style={{ width: "100%", borderRadius: "5px" }}
									/>
								</Box>
								<Stack color="white" rowGap={0.3}>
									<Typography fontSize="1.71rem">{profileData.name}</Typography>
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
						m="14.5px 16px auto 176px"
					>
						<Stack direction="row" columnGap={1}>
							<>
								{["About", "Donated", "Received"].map((text) => (
									<Button
										key={text}
										disableElevation
										size="small"
										sx={{ color: currentTab === text ? "whitesmoke" : "" }}
										variant={currentTab === text ? "contained" : "text"}
										onClick={() => setCurrentTab(text)}
									>
										{text}
									</Button>
								))}
							</>
						</Stack>
						<Button
							disableElevation
							size="small"
							sx={{ color: "whitesmoke" }}
							variant="contained"
							onClick={() => navigate("/profile/edit", { state: profileData })}
						>
							Edit
						</Button>
					</Stack>
				</Box>
			</Paper>

			{currentTab === "About" && <ProfileInfo />}
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
