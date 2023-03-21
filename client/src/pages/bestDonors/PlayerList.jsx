import { Avatar, Box, useMediaQuery } from "@mui/material";

const PlayerList = ({ data }) => {
	const smallScreen = useMediaQuery("(max-width: 349px)");

	return (
		<Box className="playerslist">
			<Box className="table">
				<Box>#</Box>
				<Box>Avatar</Box>
				<Box>Name</Box>
				<Box sx={{ textAlign: "right", pr: "25px" }}>
					{smallScreen ? "Donation" : "Total Donation"}
				</Box>
			</Box>
			<Box className="list">
				{data.map((leader, index) => (
					<Box className="player" key={leader.id}>
						<span> {index + 1}</span>
						<Avatar alt={leader.name} src={leader.image} />
						<span
							style={{
								textAlign: "right",
								display: "inline-block",
								paddingLeft: "20px",
							}}
						>
							{" "}
							{leader.name}{" "}
						</span>
						<span
							style={{
								textAlign: "right",
								display: "inline-block",
								paddingRight: "25px",
							}}
						>
							{leader.totalDonations}{" "}
						</span>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default PlayerList;
