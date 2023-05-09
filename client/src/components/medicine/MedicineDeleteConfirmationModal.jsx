import { Box, Button, Typography, Modal, Stack, Divider } from "@mui/material";
import { useDeleteMedicineMutation } from "../../features/medicines/medicinesSlice";
import { toast } from "react-toastify";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: {
		sm: 400,
		xs: "calc(100% - 32px)",
	},
	bgcolor: "background.paper",
	border: "3px solid #d0ccff",
	borderRadius: "14px",
	boxShadow: 24,
	p: 4,
	pb: "18px",
};

export default function MedicineDeleteConfirmationModal({ open, handleClose, medicineId }) {
	const [deleteMedicine, responseInfo] = useDeleteMedicineMutation();

	const handleMedicineDeletion = () => {
		deleteMedicine(medicineId)
			.unwrap()
			.then((response) => {
				handleClose();
				if (response?.msg === "medicine_deleted") {
					return toast.success("Medicine deleted successfully");
				}
				toast.error("Something went wrong!");
			})
			.catch((err) => toast.error("Something went wrong!"));
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Are you sure?
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Want to delete this medicine from the system? The action is irreversible.
					</Typography>
					<Divider sx={{ mt: 4 }} />
					<Stack direction="row" gap={1.2} mt={2}>
						<Button
							onClick={handleMedicineDeletion}
							disableElevation
							variant="contained"
							color="error"
							size="small"
							disabled={responseInfo.isLoading}
						>
							Delete
						</Button>
						<Button
							onClick={handleClose}
							disableElevation
							variant="contained"
							color="info"
							size="small"
							disabled={responseInfo.isLoading}
						>
							Cancel
						</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}
