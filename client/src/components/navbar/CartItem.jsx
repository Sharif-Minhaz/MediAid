import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { IconX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { cancel } from "../../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	const cancelApplication = (cartItem) => {
		dispatch(cancel(cartItem));
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
						src={cartItem?.medicineImage}
						alt={cartItem?.medicineName}
					/>
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
						onClick={() => cancelApplication(cartItem)}
					>
						<IconX size={14} />
					</Box>
				</Box>
				<Box>
					<Typography mb={0.4}>{cartItem?.medicineName}</Typography>
					<Typography variant="body2" fontSize={13}>
						Order: {cartItem?.name}
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
