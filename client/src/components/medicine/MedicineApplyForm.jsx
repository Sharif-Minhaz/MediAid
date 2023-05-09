import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	OutlinedInput,
	useTheme,
	Divider,
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { IconHeartPlus, IconX } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import MedicineExcerpt from "./MedicineExcerpt";
import { useDispatch } from "react-redux";
import { openCart } from "../../features/drawer/drawerSlice";
import { useApplyMedicineMutation } from "../../features/medicines/medicinesSlice";

const MedicineApplyForm = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const [applyMedicine, applyInfo] = useApplyMedicineMutation();

	const schema = yup
		.object({
			name: yup.string().required("Full name is required"),
			email: yup.string().email("Provide valid email address"),
			address: yup.string().required("Address is required"),
			count: yup.number().required().positive().integer().min(1),
			contact: yup
				.string()
				.matches(/^[0-9]{11}$/, "Contact number must be 11 digits")
				.required("Contact number is required"),
			reason: yup
				.string()
				.min(25, "Reason for this medicine must be at least 25 characters")
				.max(500, "Reason for this medicine must be at most 500 characters")
				.required("Reason for this medicine is required"),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			count: state?.count || 1,
		},
	});

	const onSubmit = (data) => {
		applyMedicine({ medicine: state._id, ...data, status: "pending" })
			.unwrap()
			.then((response) => {
				if (response.msg === "apply_successful") {
					toast.success("Successfully get the form data");
					dispatch(openCart());
					return navigate("/medicines", { replace: true });
				}
				toast.error("Something went wrong!");
			})
			.catch((err) => toast.error("Something went wrong!"));
	};

	return (
		<>
			<Box component="form" p="20px" onSubmit={handleSubmit(onSubmit)}>
				<Grid container columnSpacing={2} rowSpacing="5px" mb={1.5}>
					<Grid item xs={12} sm={6}>
						<FormControl
							error={Boolean(errors.name)}
							fullWidth
							sx={{ ...theme.customInput }}
						>
							<InputLabel htmlFor="name">Full Name</InputLabel>
							<OutlinedInput {...register("name")} />
							{errors.name && (
								<FormHelperText error>{errors.name?.message}</FormHelperText>
							)}
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl
							error={Boolean(errors.email)}
							fullWidth
							sx={{ ...theme.customInput }}
						>
							<InputLabel htmlFor="email">Email Address</InputLabel>
							<OutlinedInput {...register("email")} />
							{errors.email && (
								<FormHelperText error>{errors.email?.message}</FormHelperText>
							)}
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl
							error={Boolean(errors.address)}
							fullWidth
							sx={{ ...theme.customInput }}
						>
							<InputLabel htmlFor="address">Address</InputLabel>
							<OutlinedInput {...register("address")} />
							{errors.address && (
								<FormHelperText error>{errors.address?.message}</FormHelperText>
							)}
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl
							error={Boolean(errors.contact)}
							fullWidth
							sx={{ ...theme.customInput }}
						>
							<InputLabel htmlFor="contact">Contact Number</InputLabel>
							<OutlinedInput {...register("contact")} />
							{errors.contact && (
								<FormHelperText error>{errors.contact?.message}</FormHelperText>
							)}
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl
							error={Boolean(errors.reason)}
							fullWidth
							sx={{ ...theme.customInput }}
						>
							<InputLabel htmlFor="reason">
								Explain us, Why you need this medicine...
							</InputLabel>
							<OutlinedInput multiline rows={7} {...register("reason")} />
							{errors.reason && (
								<FormHelperText error>{errors.reason?.message}</FormHelperText>
							)}
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl
							error={Boolean(errors.count)}
							fullWidth
							sx={{ ...theme.customInput }}
						>
							<InputLabel htmlFor="count">Number of Dosage</InputLabel>
							<OutlinedInput
								inputProps={{ min: 1, max: state?.dosages }}
								type="number"
								{...register("count")}
							/>
							{errors.count && (
								<FormHelperText error>{errors.count?.message}</FormHelperText>
							)}
						</FormControl>
					</Grid>
				</Grid>
				<Button
					startIcon={<IconHeartPlus size={20} />}
					type="submit"
					size="large"
					variant="contained"
					disableElevation
					disabled={applyInfo.isLoading}
					sx={{ color: "whitesmoke", borderRadius: "10px", mr: 1.5 }}
				>
					Apply
				</Button>
				<Button
					onClick={() => navigate("/medicines", { replace: true })}
					startIcon={<IconX size={20} />}
					type="button"
					size="large"
					variant="contained"
					disableElevation
					sx={{
						color: "white",
						borderRadius: "10px",
						background: "#ff5757",
						"&:hover": {
							background: "red",
						},
					}}
				>
					Cancel
				</Button>
			</Box>
			<Box sx={{ mt: 3 }}>
				<Divider />
				<Typography fontSize="20px" p="15px 20px 5px 20px">
					Your medicine:
				</Typography>
				<Grid container>
					<Grid item xs={12} md={6} lg={4} sx={{ m: { xs: "14px", sm: "20px" } }}>
						<MedicineExcerpt medicine={state} />
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default MedicineApplyForm;
