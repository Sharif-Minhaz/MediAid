import { useState } from "react";
import { useInView } from "react-intersection-observer";
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
import { userInfoStatus as userInfo } from "../../features/auth/userInfoSlice";
import { IconClipboardHeart, IconPencil, IconStarHalfFilled, IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import CustomIconButton from "../../theme/customComponent/CustomIconButton";
import { truncate } from "../../utils/truncate";
import MedicineDeleteConfirmationModal from "./MedicineDeleteConfirmationModal";
import { useSelector } from "react-redux";
import { useGetMedicineRatingQuery } from "../../features/medicines/reviewSlice";

const MedicineExcerpt = ({ medicine }) => {
	const navigate = useNavigate();
	const userInfoStatus = useSelector(userInfo);
	const medicineRatingInfo = useGetMedicineRatingQuery(medicine._id);
	const isAdmin = Boolean(userInfoStatus?.user_type === "admin");

	const [medicineId, setMedicineId] = useState("");
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	const handleMedicineDelete = (medicineId) => {
		handleOpen();
		setMedicineId(medicineId);
	};

	return (
		<>
			<Card
				className={`${inView ? "fade-in visible" : "fade-in"}`}
				ref={ref}
				sx={{
					boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
				}}
			>
				<CardActionArea
					onClick={() =>
						navigate(`/medicines/${medicine._id}`, {
							state: medicine,
						})
					}
				>
					<CardMedia
						sx={{ height: 200 }}
						image={medicine.medicineImage || defaultMedicine}
						title={medicine.medicineName}
					/>
					<Divider />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{medicine.medicineName}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{truncate(medicine?.medicineDescription, 118)}
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
								{medicineRatingInfo.data?.rating || "0.0"}
							</span>
						</Box>
					</Stack>
					<Stack direction="row" columnGap={1}>
						{isAdmin ? (
							<>
								<CustomIconButton
									onClick={() =>
										navigate(`/medicines/edit/${medicine._id}`, {
											state: medicine,
										})
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
									onClick={() => handleMedicineDelete(medicine._id)}
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
								<CustomIconButton
									onClick={() =>
										navigate(`/medicines/apply/${medicine._id}`, {
											state: medicine,
										})
									}
								>
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
								onClick={() =>
									navigate(`/medicines/apply/${medicine._id}`, {
										state: medicine,
									})
								}
							>
								Apply
							</Button>
						)}
					</Stack>
				</CardActions>
			</Card>
			<MedicineDeleteConfirmationModal
				handleClose={handleClose}
				open={open}
				medicineId={medicineId}
			/>
		</>
	);
};

export default MedicineExcerpt;
