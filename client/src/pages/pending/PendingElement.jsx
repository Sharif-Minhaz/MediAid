import { Box, Button, Card, Chip, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import { useInView } from "react-intersection-observer";

const PendingElement = ({ type, request }) => {
	const isExtraSmall = useMediaQuery("(max-width: 440px)");

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	const approveRequest = (type) => {
		if (type === "donation") {
			toast.success("Donation request accepted");
		} else {
			toast.success("Receiver's request accepted");
		}
	};

	const rejectRequest = (type) => {
		if (type === "donation") {
			toast.error("Donation request rejected");
		} else {
			toast.error("Receiver's request rejected");
		}
	};

	return (
		<Card
			ref={ref}
			className={`${inView ? "fade-in visible" : "fade-in"}`}
			sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", mb: 2 }}
		>
			<Grid container>
				<Grid item xs={isExtraSmall ? 12 : 5} sm={3} md={3} lg={2.5} xl={2} padding="8px">
					<img
						style={{
							width: "100%",
							lineHeight: 0,
							height: "100%",
							objectFit: "cover",
							borderRadius: "8px",
							border: "1px solid #d1d1d1",
						}}
						src={request.medicineImage}
						alt={request.medicineName}
					/>
				</Grid>
				<Grid item xs={isExtraSmall ? 12 : 7} sm={7} md={7} lg={7.5} xl={8}>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						height="100%"
					>
						<Box
							sx={{
								p: "15px 10px",
								...(isExtraSmall && { margin: "auto", textAlign: "center" }),
							}}
						>
							<Typography variant="body1" fontSize={14}>
								Medicine: {request.medicineName}
							</Typography>
							<Typography variant="body1" fontSize={14}>
								Order: {request.name}
							</Typography>
							<Typography variant="body1" fontSize={14}>
								Date: {request.date}
							</Typography>
							<Typography variant="body1" fontSize={14}>
								Dosages: {request.dosages}
							</Typography>
							<Typography component="div" variant="body1" fontSize={14}>
								<Chip
									sx={{
										color: "white",
										fontSize: "11px",
										mt: "5px",
										background:
											request?.status === "pending" ? "#72df94" : "#8250df",
									}}
									label={request?.status}
									size="small"
								/>
							</Typography>
						</Box>
					</Stack>
				</Grid>
				<Grid
					xs={12}
					sm={2}
					sx={{
						borderLeft: { xs: "none", sm: "1px solid #ededed" },
						p: { xs: "10px", sm: "unset" },
						mt: { xs: "10px", sm: "auto" },
						m: "auto",
						borderTop: { xs: "1px solid #ededed", sm: "none" },
					}}
				>
					<Box
						sx={{
							height: "calc(100% - 16px)",
							p: "8px",
							px: "20px",
						}}
					>
						<Stack
							sx={{
								disableElevation: true,
								height: "100%",
								display: "flex",
								flexDirection: { xs: "row", sm: "column" },
								alignItems: "center",
								justifyContent: "center",
								gap: "10px",
							}}
						>
							<Button
								size="small"
								disableElevation
								sx={{
									width: "70px",
									color: "white",
									background: "red",
									fontSize: "11px",
									"&:hover": { background: "#db1818" },
								}}
								variant="contained"
								onClick={() => rejectRequest(type)}
							>
								Reject
							</Button>
							<Button
								size="small"
								disableElevation
								sx={{
									width: "70px",
									color: "white",
									background: "green",
									fontSize: "11px",
									"&:hover": { background: "#2e7a31" },
								}}
								variant="contained"
								onClick={() => approveRequest(type)}
							>
								Approve
							</Button>
						</Stack>
					</Box>
				</Grid>
			</Grid>
		</Card>
	);
};

export default PendingElement;
