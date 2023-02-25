import { useEffect } from "react";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	OutlinedInput,
	useTheme,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IconHeartPlus, IconEdit } from "@tabler/icons-react";
import ImageDropZone from "../imageDropZone/ImageDropZone";
import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const MedicineForm = ({ isUpdateCase, setIsUpdateCase }) => {
	const theme = useTheme();
	const { state } = useLocation();

	const schema = yup
		.object({
			medicineName: yup.string().required("Medicine name is required"),
			companyName: yup.string().required("Company name is required"),
			donarName: yup.string().required("Donar name is required"),
			donarContact: yup
				.string()
				.matches(/^[0-9]{11}$/, "Contact number must be 11 digits")
				.required("Contact number is required"),
			medicineDescription: yup
				.string()
				.min(25, "Description must be at least 25 characters")
				.max(500, "Description must be at most 500 characters")
				.required("Description is required"),
		})
		.required();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
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
		toast.success("Successfully get the form data");
		console.log(data);
	};

	const onFileSelect = (file) => {
		setValue("medicineImage", file);
	};

	return (
		<Box component="form" p="20px" onSubmit={handleSubmit(onSubmit)}>
			<Grid container columnSpacing={2} rowSpacing="5px" mb={1.5}>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.medicineName)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="medicineName">Full Medicine Name</InputLabel>
						<OutlinedInput {...register("medicineName")} />
					</FormControl>
					{errors.medicineName && (
						<FormHelperText error>{errors.medicineName?.message}</FormHelperText>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.companyName)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="companyName">Company Name</InputLabel>
						<OutlinedInput {...register("companyName")} />
					</FormControl>
					{errors.companyName && (
						<FormHelperText error>{errors.companyName?.message}</FormHelperText>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.donarName)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="donarName">Donar's Full Name</InputLabel>
						<OutlinedInput {...register("donarName")} />
					</FormControl>
					{errors.donarName && (
						<FormHelperText error>{errors.donarName?.message}</FormHelperText>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.donarContact)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="donarContact">Donar's Contact Number</InputLabel>
						<OutlinedInput {...register("donarContact")} />
					</FormControl>
					{errors.donarContact && (
						<FormHelperText error>{errors.donarContact?.message}</FormHelperText>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.medicineDescription)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="medicineDescription">
							Provide Necessary Information
						</InputLabel>
						<OutlinedInput multiline rows={7} {...register("medicineDescription")} />
					</FormControl>
					{errors.medicineDescription && (
						<FormHelperText error>{errors.medicineDescription?.message}</FormHelperText>
					)}
				</Grid>
				<Grid item xs={12} sm={6}>
					<Controller
						name="medicineImage"
						control={control}
						render={({ field }) => (
							<>
								<ImageDropZone
									{...field}
									image={state?.medicineImage}
									onFileSelect={onFileSelect}
								/>
							</>
						)}
					/>
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
