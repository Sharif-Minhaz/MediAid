import { Box, Button, FormControl, Grid, InputLabel, OutlinedInput, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { IconHeartPlus, IconEdit } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ImageDropZone from "../ImageDropZone";
import { useLocation } from "react-router-dom";

const MedicineForm = ({ isUpdateCase, setIsUpdateCase }) => {
	const theme = useTheme();
	const { state } = useLocation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			medicineName: state?.medicineName || "",
			medicineDescription: state?.medicineDescription || "",
			companyName: state?.companyName || "",
			donarName: state?.donarName || "",
			donarContact: state?.donarContact || "",
		},
	});

	useEffect(() => {
		if (Boolean(state)) {
			setIsUpdateCase(true);
		}
	}, []);

	const onSubmit = (data) => {
		console.log(data);
	};

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
				startIcon={isUpdateCase ? <IconEdit size={20} /> : <IconHeartPlus size={20} />}
				type="submit"
				size="large"
				variant="contained"
				disableElevation
				sx={{ color: "whitesmoke", borderRadius: "10px" }}
			>
				{isUpdateCase ? "Update Medicine" : "ADD Medicine"}
			</Button>
		</Box>
	);
};

export default MedicineForm;
