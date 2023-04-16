import { Box, useMediaQuery } from "@mui/material";
import DonorRow from "./DonorRow";

const DonorTable = ({ donors }) => {
	const smallScreen = useMediaQuery("(max-width: 349px)");

	return (
		<Box className="playerslist">
			<Box className="table">
				<Box>#</Box>
				<Box>Avatar</Box>
				<Box sx={{ textAlign: "right" }}>Name</Box>
				<Box sx={{ textAlign: "right", pr: "25px" }}>
					{smallScreen ? "Donation" : "Total Donation"}
				</Box>
			</Box>
			<Box className="list">
				{donors.data?.donors?.map((leader, index) => (
					<DonorRow leader={leader} index={index} key={index} />
				))}
			</Box>
		</Box>
	);
};

export default DonorTable;
