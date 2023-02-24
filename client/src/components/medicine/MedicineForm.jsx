import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { IconHeartPlus } from "@tabler/icons-react";
import { useState } from "react";
import ImageDropZone from "../ImageDropZone";

const MedicineForm = () => {
	const theme = useTheme();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<Box component="form" p="20px" onSubmit={handleSubmit(onSubmit)}>
			<Grid container columnSpacing={2} rowSpacing="5px" mb={1.5}>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ ...theme.customInput }}>
						<InputLabel htmlFor="medicineName">Full Medicine Name</InputLabel>
						<OutlinedInput {...register("medicineName", { required: true })} />
					</FormControl>
					{errors.medicineName?.type === "required" && (
						<p role="alert">First name is required</p>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ ...theme.customInput }}>
						<InputLabel htmlFor="companyName">Company Name</InputLabel>
						<OutlinedInput {...register("companyName", { required: true })} />
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ ...theme.customInput }}>
						<InputLabel htmlFor="donarName">Donar's Full Name</InputLabel>
						<OutlinedInput {...register("donarName", { required: true })} />
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ ...theme.customInput }}>
						<InputLabel htmlFor="donarContact">Donar's Contact Number</InputLabel>
						<OutlinedInput {...register("donarContact", { required: true })} />
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth sx={{ ...theme.customInput }}>
						<InputLabel htmlFor="medicineDescription">
							Provide Necessary Information
						</InputLabel>
						<OutlinedInput
							multiline
							rows={7}
							{...register("medicineDescription", { required: true })}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<ImageDropZone {...register("medicineImage", { required: true })} />
				</Grid>
			</Grid>
			<Button
				startIcon={<IconHeartPlus size={20} />}
				type="submit"
				size="large"
				variant="contained"
				disableElevation
				sx={{ color: "whitesmoke", borderRadius: "10px" }}
			>
				ADD Medicine
			</Button>
		</Box>
	);
};

export default MedicineForm;
