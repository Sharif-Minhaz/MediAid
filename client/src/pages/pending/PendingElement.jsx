import { Box, Button, Card, Chip, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import { useInView } from "react-intersection-observer";
import {
	usePendingApplyAcceptMutation,
	usePendingApplyRejectMutation,
	usePendingDonationAcceptMutation,
	usePendingDonationRejectMutation,
} from "../../features/pending/pendingSlice";

const PendingElement = ({ type, request }) => {
	const isExtraSmall = useMediaQuery("(max-width: 440px)");
	const [acceptDonation, acceptDonationInfo] = usePendingDonationAcceptMutation();
	const [rejectDonation, rejectDonationInfo] = usePendingDonationRejectMutation();

	const [acceptApplication, acceptApplyInfo] = usePendingApplyAcceptMutation();
	const [rejectApplication, rejectApplyInfo] = usePendingApplyRejectMutation();

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	const approveRequest = (type, request) => {
		if (type === "donation") {
			acceptDonation(request?._id)
				.unwrap()
				.then((response) => {
					if (response.msg === "donation_accepted") {
						return toast.success("Donation request accepted");
					}
					toast.error("something went wrong!");
				})
				.catch((err) => {
					console.error(err);
					toast.error("something went wrong!");
				});
		} else {
			acceptApplication({ medicineId: request?.medicine?._id, applicationId: request?._id })
				.unwrap()
				.then((response) => {
					if (response.msg === "application_accepted") {
						return toast.success("Application accepted");
					}
					toast.error("something went wrong!");
				})
				.catch((err) => {
					console.error(err);
					toast.error("something went wrong!");
				});
		}
	};

	const rejectRequest = (type) => {
		if (type === "donation") {
			rejectDonation(request?._id)
				.unwrap()
				.then((response) => {
					if (response.msg === "donation_rejected") {
						return toast.success("Donation request rejected");
					}
					toast.error("something went wrong!");
				})
				.catch((err) => {
					console.error(err);
					toast.error("something went wrong!");
				});
		} else {
			rejectApplication(request?._id)
				.unwrap()
				.then((response) => {
					if (response.msg === "application_rejected") {
						return toast.success("Application rejected");
					}
					toast.error("something went wrong!");
				})
				.catch((err) => {
					console.error(err);
					toast.error("something went wrong!");
				});
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
						loading="lazy"
						src={request.medicineImage || request.medicine?.medicineImage}
						alt={request.medicineName || request.medicine?.medicineName}
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
								<strong>Medicine:</strong>{" "}
								{request.medicineName || request.medicine?.medicineName}
							</Typography>
							<Typography variant="body1" fontSize={14}>
								<strong>Order:</strong> {request.donorName || request.fullName}
							</Typography>
							<Typography variant="body1" fontSize={14}>
								<strong>Date:</strong> {request?.createdAt}
							</Typography>
							<Typography variant="body1" fontSize={14}>
								<strong>Dosages:</strong> {request.dosages || request.count}
							</Typography>
							<Typography component="div" variant="body1" fontSize={14}>
								<Chip
									sx={{
										color: "white",
										fontSize: "11px",
										mt: "5px",
										background:
											request?.status === "pending" ? "#8250df" : "#72df94",
									}}
									label={request?.status}
									size="small"
								/>
							</Typography>
						</Box>
					</Stack>
				</Grid>
				<Grid
					item
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
								disabled={Boolean(
									acceptDonationInfo.isLoading ||
										rejectDonationInfo.isLoading ||
										acceptApplyInfo.isLoading ||
										rejectApplyInfo.isLoading
								)}
								sx={{
									width: "70px",
									color: "white",
									background: "#ff4e4e",
									fontSize: "11px",
									"&:hover": { background: "#db1818" },
									borderRadius: { xs: "6px", sm: "50px" },
								}}
								variant="contained"
								onClick={() => rejectRequest(type)}
							>
								Reject
							</Button>
							<Button
								size="small"
								disableElevation
								disabled={Boolean(
									acceptDonationInfo.isLoading ||
										rejectDonationInfo.isLoading ||
										acceptApplyInfo.isLoading ||
										rejectApplyInfo.isLoading
								)}
								sx={{
									width: "70px",
									color: "white",
									background: "#4ed590",
									fontSize: "11px",
									"&:hover": { background: "#2e7a31" },
									borderRadius: { xs: "6px", sm: "50px" },
								}}
								variant="contained"
								onClick={() => approveRequest(type, request)}
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
