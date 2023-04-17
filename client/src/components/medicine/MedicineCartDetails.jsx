import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useGetMedicineRatingQuery } from "../../features/medicines/reviewSlice";
import { IconClipboardText, IconMinus, IconPlus, IconStarFilled } from "@tabler/icons-react";
import { useState } from "react";

const MedicineCartDetails = ({ medicine }) => {
	const navigate = useNavigate();
	const [count, setCount] = useState(1);
	const medicineRatingInfo = useGetMedicineRatingQuery(medicine._id);

	const smallScreenLg = useMediaQuery("(max-width: 1082px)");

	const handleCount = (type) => {
		if (type === "inc" && count < medicine?.dosages) {
			setCount((prev) => prev + 1);
		} else if (type === "dec" && count >= 2) {
			setCount((prev) => prev - 1);
		}
	};

	return (
		<>
			<Typography fontWeight={500} variant="h5">
				{medicine?.medicineName}
			</Typography>
			<Typography sx={{ display: "flex", alignItems: "center", mt: 1 }} fontSize="14px">
				<IconStarFilled
					size={16}
					style={{ color: "#facc15", marginRight: "5px", marginBottom: "3px" }}
				/>{" "}
				{medicineRatingInfo.data?.rating || "0.0"}{" "}
				<span style={{ marginInline: "10px" }}>|</span>
				<span style={{ color: "#727272" }}>
					{medicineRatingInfo.data?.totalRating || 0} reviews
				</span>
			</Typography>
			<Stack direction="row" gap={1.5} marginY={2.5}>
				<Box
					sx={{
						background: "rgb(241 245 249 / 70%)",
						whiteSpace: "nowrap",
						borderRadius: "50px",
						display: "flex",
						alignItems: "center",
						padding: "10px",
					}}
				>
					<Button
						sx={{
							height: "32px",
							width: "32px",
							background: "white",
							border: "1px solid #e5e7eb",
							borderRadius: "50px",
							minWidth: "unset",
							color: "rgb(17 24 39)",
						}}
						disabled={count === 1}
						onClick={() => handleCount("dec")}
					>
						<IconMinus size={14} />
					</Button>
					<span
						style={{
							display: "inline-block",
							width: "40px",
							textAlign: "center",
							userSelect: "none",
						}}
					>
						{count}
					</span>
					<Button
						sx={{
							height: "32px",
							width: "32px",
							background: "white",
							border: "1px solid #e5e7eb",
							borderRadius: "50px",
							minWidth: "unset",
							color: "rgb(17 24 39)",
						}}
						disabled={count === 100}
						onClick={() => handleCount("inc")}
					>
						<IconPlus size={14} />
					</Button>
				</Box>
				<Button
					fullWidth
					onClick={() =>
						navigate(`/medicines/apply/${medicine.id}`, {
							state: { ...medicine, count },
						})
					}
					sx={{
						background: "rgb(15 23 42)",
						color: "rgb(248 250 252)",
						borderRadius: "50px",
						display: "flex",
						alignItems: "center",
						"&:hover": {
							background: "#1e293b",
						},
					}}
					startIcon={<IconClipboardText />}
				>
					<span style={{ marginTop: "3px" }}>
						{smallScreenLg ? "Apply" : "Proceed to Apply"}
					</span>
				</Button>
			</Stack>
		</>
	);
};

export default MedicineCartDetails;
