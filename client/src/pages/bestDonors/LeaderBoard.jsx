import { Box, useMediaQuery } from "@mui/material";
import DonorTable from "./DonorTable";
import Donor from "./Donor";

const LeaderBoard = ({ bestDonors }) => {
	const smallerScreen = useMediaQuery("(max-width: 1065px)");

	return (
		<Box
			className="container"
			sx={{ borderRadius: "14px", width: smallerScreen ? "100%" : "700px" }}
		>
			<Box className="topLeadersList">
				{bestDonors.data?.donors?.map((leader, index) => (
					<Box className="leader" key={leader.donorAccount}>
						{index + 1 <= 3 && <Donor leader={leader} />}
					</Box>
				))}
			</Box>

			<DonorTable donors={bestDonors} />
		</Box>
	);
};

export default LeaderBoard;
