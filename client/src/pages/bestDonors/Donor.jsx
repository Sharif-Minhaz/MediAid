import { Box } from "@mui/material";
import { useFindProfileQuery } from "../../features/profile/profileSlice";

const Donor = ({ leader }) => {
	const profileInfo = useFindProfileQuery(leader?.donorAccount);

	return (
		<Box className="containerImage">
			<img className="image" loading="lazy" src={profileInfo.data?.profile?.profilePicture} />
			<Box className="crown">
				<svg
					id="crown1"
					fill="#0f74b5"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 50"
				>
					<polygon
						className="cls-1"
						points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
					/>
				</svg>
			</Box>
			<Box className="leaderName">{profileInfo.data?.profile?.fullName}</Box>
		</Box>
	);
};

export default Donor;
