import { Box, useMediaQuery } from "@mui/material";
import PlayerList from "./PlayerList";

const LeaderBoard = ({ data }) => {
	const smallerScreen = useMediaQuery("(max-width: 1065px)");

	return (
		<Box
			className="container"
			sx={{ borderRadius: "14px", width: smallerScreen ? "100%" : "700px" }}
		>
			<Box className="topLeadersList">
				{data.map((leader, index) => (
					<Box className="leader" key={leader.id}>
						{index + 1 <= 3 && (
							<Box className="containerImage">
								<img className="image" loading="lazy" src={leader.image} />
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
								<Box className="leaderName">{leader.name}</Box>
							</Box>
						)}
					</Box>
				))}
			</Box>

			<PlayerList data={data} />
		</Box>
	);
};

export default LeaderBoard;
