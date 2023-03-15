import { useInView } from "react-intersection-observer";
import { Box, Button, Grid, Typography } from "@mui/material";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { toCapitalize } from "../../utils/toCapitalize";

const ServiceCardExcerpt = ({ img, heading, type = "medicines" }) => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false,
	});

	const navigate = useNavigate();

	return (
		<Box
			width="100%"
			component="article"
			height="180px"
			className={`${inView ? "fade-in visible" : "fade-in"}`}
			ref={ref}
			sx={{
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
				transition: "all 0.3s",
				"&:hover": {
					boxShadow:
						"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
				},
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
						<Typography component="h5" variant="h5" fontWeight={500} color="#003f74">
							{heading}
						</Typography>
					</Box>
					<Typography component="p" variant="body1">
						<Link
							to={`/${type}`}
							style={{
								display: "flex",
								columnGap: "3px",
								alignItems: "center",
								color: "#46556c",
							}}
						>
							<span>View {toCapitalize(type)}</span>
							<IconArrowNarrowRight className="arrow-animation" />
						</Link>
					</Typography>
				</Grid>
				<Grid item xs={3} display="flex" justifyContent="end" alignItems="start">
					<Button
						color="primary"
						variant="contained"
						disableElevation
						size="small"
						sx={{ py: "4px", px: "33px", color: "white", fontSize: "12px" }}
						onClick={() => navigate(`/${type}`)}
					>
						{type === "medicines" ? "Apply" : type === "donate" ? "Donate" : "View"}
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ServiceCardExcerpt;
