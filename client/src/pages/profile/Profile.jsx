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
import { useViewProfileQuery } from "../../features/profile/profileSlice";
import { toCapitalize } from "../../utils/toCapitalize";
import {
	useGetDonatedMedicinesQuery,
	useGetReceivedMedicinesQuery,
} from "../../features/medicines/medicinesSlice";

const Profile = () => {
	const navigate = useNavigate();
	const responseInfo = useViewProfileQuery();
	const donatedMedicinesInfo = useGetDonatedMedicinesQuery();
	const receiverMedicinesInfo = useGetReceivedMedicinesQuery();
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
										src={responseInfo?.data?.profile?.profilePicture}
										style={{
											width: "100%",
											borderRadius: "5px",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Box>
								<Stack color="white" rowGap={0.3}>
									<Typography fontSize="1.71rem">
										{responseInfo?.data?.profile.fullName}
									</Typography>
									<Typography fontSize="0.95rem" color="whitesmoke">
										{toCapitalize(responseInfo?.data?.profile.user.user_type)}
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
							onClick={() =>
								navigate("/profile/edit", { state: responseInfo?.data.profile })
							}
						>
							{smallScreen ? <IconPencil /> : "Edit"}
						</Button>
					</Stack>
				</Box>
			</Paper>

			{currentTab === "About" && <ProfileInfo profileData={responseInfo.data} />}
			{currentTab === "Donated" && (
				<ProfileMedicines
					medicines={donatedMedicinesInfo.data?.medicines}
					titleText="Donated Medicines"
				/>
			)}
			{currentTab === "Received" && (
				<ProfileMedicines
					medicines={receiverMedicinesInfo.data?.medicines}
					titleText="Received Medicines"
				/>
			)}
		</>
	);
};

export default Profile;
