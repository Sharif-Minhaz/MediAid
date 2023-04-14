import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { IconX } from "@tabler/icons-react";
import { usePendingApplyRejectMutation } from "../../features/pending/pendingSlice";
import { toast } from "react-toastify";

const CartItem = ({ cartItem }) => {
	const [rejectApplication, rejectApplyInfo] = usePendingApplyRejectMutation();

	const cancelApplication = () => {
		rejectApplication(cartItem?.medicine._id)
			.unwrap()
			.then((response) => {
				if (response.msg === "application_rejected") {
					return toast.success("Application canceled");
				}
				toast.error("something went wrong!");
			})
			.catch((err) => {
				console.error(err);
				toast.error("something went wrong!");
			});
	};

	return (
		<>
			<Stack direction="row" sx={{ pt: 1.6, pb: 1.8 }} spacing={1.5}>
				<Box sx={{ height: "90px", width: "100px", position: "relative" }}>
					<img
						height="100%"
						width="100%"
						style={{
							borderRadius: "5px",
							boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
							objectFit: "cover",
						}}
						loading="lazy"
						src={cartItem?.medicine?.medicineImage}
						alt={cartItem?.medicine?.medicineName}
					/>
					{cartItem?.status === "pending" && (
						<Box
							component="div"
							sx={{
								position: "absolute",
								height: "20px",
								width: "20px",
								borderRadius: "50%",
								background: "whitesmoke",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								top: "-6px",
								left: "-6px",
								borderColor: "1px solid black",
								cursor: "pointer",
								userSelect: "none",
							}}
							title="Cancel application"
							onClick={cancelApplication}
						>
							<IconX size={14} />
						</Box>
					)}
				</Box>
				<Box>
					<Typography mb={0.4}>{cartItem?.medicine?.medicineName}</Typography>
					<Typography variant="body2" fontSize={13}>
						Order: {cartItem?.fullName}
					</Typography>
					<Typography variant="body2">Dosages: {cartItem?.count}</Typography>
					<Typography component="div" fontSize={12} variant="body2" mt={0.3}>
						<Chip
							sx={{
								color: "white",
								fontSize: "11px",
								background: cartItem?.status === "pending" ? "#8250df" : "#72df94",
							}}
							label={cartItem?.status}
							size="small"
						/>
					</Typography>
				</Box>
			</Stack>
			<Divider />
		</>
	);
};

export default CartItem;
