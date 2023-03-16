import { Box, Divider, Stack, Typography } from "@mui/material";

const CartItem = ({ cartItem }) => {
	return (
		<>
			<Stack direction="row" sx={{ pt: 1.6, pb: 1.8 }} spacing={1.5}>
				<Box sx={{ height: "68px", width: "100px" }}>
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
				</Box>
				<Box>
					<Typography mb={0.4}>{cartItem?.medicineName}</Typography>
					<Typography variant="body2" fontSize={13}>Order: {cartItem?.name}</Typography>
					<Typography variant="body2">Dosage: {cartItem?.count}</Typography>
				</Box>
			</Stack>
			<Divider />
		</>
	);
};

export default CartItem;
