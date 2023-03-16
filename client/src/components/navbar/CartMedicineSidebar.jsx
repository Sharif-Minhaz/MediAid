import { Box, Divider, Drawer, Typography } from "@mui/material";
import { IconShoppingCart } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerStatus, closeCart } from "../../features/drawer/drawerSlice";
import { cartItemStatus } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";

export default function CartMedicineSidebar() {
	const dispatch = useDispatch();
	const drawerOpen = useSelector(cartDrawerStatus);
	const cartItems = useSelector(cartItemStatus);

	return (
		<Drawer
			sx={{ zIndex: 9999 }}
			anchor="right"
			open={drawerOpen}
			onClose={() => dispatch(closeCart())}
		>
			<Box
				sx={{ width: 300, p: "16px" }}
				role="presentation"
				onClick={() => dispatch(closeCart())}
				onKeyDown={() => dispatch(closeCart())}
			>
				<Typography
					color="#2c145c"
					display="flex"
					gap={1}
					alignItems="center"
					variant="h5"
					mb={2}
				>
					<IconShoppingCart /> Cart Information
				</Typography>
				<Divider />
				<Box>
					{cartItems.map((item, i) => (
						<CartItem cartItem={item.payload} key={i} />
					))}
				</Box>
			</Box>
		</Drawer>
	);
}
