import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { IconClipboardHeart, IconPencil, IconStarHalfFilled, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import CustomIconButton from "../../theme/customComponent/CustomIconButton";

const MedicineExcerpt = ({ medicine }) => {
	const navigate = useNavigate();
	const isAdmin = true;

	const handleMedicineDelete = (medicineId) => {
		alert(medicineId + ": Medicine delete request received");
	};

	return (
		<Card
			// variant="outlined"
			sx={{
				boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
			}}
		>
			<CardActionArea
				onClick={() => navigate(`/medicines/${medicine.id}`, { state: medicine })}
			>
				<CardMedia
					sx={{ height: 200 }}
					image={medicine.medicineImage}
					title={medicine.medicineName}
				/>
				<Divider />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{medicine.medicineName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{medicine.medicineDescription}...
					</Typography>
				</CardContent>
			</CardActionArea>
			<Divider />
			<CardActions sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
				<Stack rowGap="2px">
					<Typography fontSize="12px" sx={{ color: "primary.contrastText" }}>
						User Rating
					</Typography>
					<Box component="div" display="flex" alignItems="center" columnGap="6px">
						<IconStarHalfFilled style={{ color: "#5e35b1" }} size={19} />
						<span style={{ marginBottom: "-4px", color: "#5e35b1" }}>
							{medicine.rating}
						</span>
					</Box>
				</Stack>
				<Stack direction="row" columnGap={1}>
					{isAdmin ? (
						<>
							<CustomIconButton
								onClick={() =>
									navigate(`/medicines/edit/${medicine.id}`, { state: medicine })
								}
								sx={{
									color: "green",
									backgroundColor: "#e4f1ef",
									"&:hover": {
										backgroundColor: "#6ddf93",
										color: "white",
									},
								}}
							>
								<IconPencil />
							</CustomIconButton>
							<CustomIconButton
								onClick={() => handleMedicineDelete(medicine.id)}
								sx={{
									color: "red",
									backgroundColor: "#ffe0e0",
									"&:hover": {
										backgroundColor: "#ff5757",
										color: "white",
									},
								}}
							>
								<IconTrash />
							</CustomIconButton>
							<CustomIconButton onClick={() => navigate(`/apply/${medicine.id}`)}>
								<IconClipboardHeart />
							</CustomIconButton>
						</>
					) : (
						<Button
							endIcon={<IconClipboardHeart size={18} />}
							sx={{ color: "whitesmoke" }}
							variant="contained"
							size="small"
							disableElevation
							onClick={() => navigate(`/apply/${medicine.id}`)}
						>
							Apply
						</Button>
					)}
				</Stack>
			</CardActions>
		</Card>
	);
};

export default MedicineExcerpt;
