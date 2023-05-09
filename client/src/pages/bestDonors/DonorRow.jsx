import { Avatar, Box } from "@mui/material";
import { useFindProfileQuery } from "../../features/profile/profileSlice";

const DonorRow = ({ leader, index }) => {
	const profileInfo = useFindProfileQuery(leader?.donorAccount);

	return (
		<Box className="player" key={leader.donorAccount}>
			<span> {index + 1}</span>
			<Avatar alt="donor-profile" src={profileInfo.data?.profile?.profilePicture} />
			<span
				style={{
					textAlign: "right",
					display: "inline-block",
					paddingLeft: "20px",
					whiteSpace: "nowrap",
				}}
			>
				{profileInfo.data?.profile?.fullName || "Anonymous"}
			</span>
			<span
				style={{
					textAlign: "right",
					display: "inline-block",
					paddingRight: "25px",
				}}
			>
				{leader?.donated}
			</span>
		</Box>
	);
};

export default DonorRow;
