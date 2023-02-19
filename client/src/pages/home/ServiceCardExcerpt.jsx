import { Box, Button, Grid, Typography } from "@mui/material";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ServiceCardExcerpt = ({ img }) => {
	return (
		<Box
			width="100%"
			component="article"
			height="180px"
			sx={{
				backgroundImage: `url(${img})`,
			}}
			borderRadius="12px"
			padding={2}
		>
			<Grid container columnSpacing={2} height="100%">
				<Grid
					item
					xs={9}
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
				>
					<Box>
						<Typography component="h5" variant="h5">
							A card Heading
						</Typography>
						<Typography component="p" variant="body2">
							A card description belong here
						</Typography>
					</Box>
					<Typography component="p" variant="body1">
						<Link
							to="/medicines"
							style={{
								display: "flex",
								columnGap: "6px",
								alignItems: "center",
								color: "black",
							}}
						>
							<span>View medicines</span> <IconArrowNarrowRight />
						</Link>
					</Typography>
				</Grid>
				<Grid item xs={3} display="flex" justifyContent="end" alignItems="start">
					<Button
						color="primary"
						variant="contained"
						disableElevation
						size="small"
						sx={{ py: 2, color: "white" }}
					>
						Apply
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ServiceCardExcerpt;
