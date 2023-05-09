import { useEffect, useState } from "react";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import {
	useAddMedicineMutation,
	useDonateMedicineMutation,
	useUpdateMedicineMutation,
	useViewSingleMedicineQuery,
} from "../../features/medicines/medicinesSlice";

const MedicineForm = ({ isUpdateCase, setIsUpdateCase, donation }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { medicineId } = useParams();
	const { state } = useLocation();
	const { data: { medicine } = {}, isLoading } = useViewSingleMedicineQuery(medicineId);
	const [addMedicine, responseInfo] = useAddMedicineMutation();
	const [donateMedicine, donateResponseInfo] = useDonateMedicineMutation();
	const [updateMedicine, updateResponseInfo] = useUpdateMedicineMutation();
	const [resetKey, setResetKey] = useState(Date.now());

	const [defaultData, setDefaultData] = useState({
		medicineName: state?.medicineName || "",
		medicineDescription: state?.medicineDescription || "",
		companyName: state?.companyName || "",
		donorName: state?.donorName || "",
		donorContact: state?.donorContact || "",
		dosages: state?.dosages || 1,
	});

	const schema = yup
		.object({
			medicineName: yup.string().required("Medicine name is required"),
			companyName: yup.string().required("Company name is required"),
			donorName: yup.string().required("Donor name is required"),
			donorContact: yup
				.string()
				.matches(/^[0-9]{11}$/, "Contact number must be 11 digits")
				.required("Contact number is required"),
			medicineDescription: yup
				.string()
				.min(25, "Description must be at least 25 characters")
				.max(500, "Description must be at most 500 characters")
				.required("Description is required"),
			dosages: yup.number().required("Number of dosages is required"),
		})
		.required();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: defaultData,
	});

	useEffect(() => {
		Object.keys(defaultData).forEach((key) => {
			setValue(key, defaultData[key]);
		});
	}, [defaultData, setValue]);

	useEffect(() => {
		if (Boolean(state) || Boolean(medicineId)) {
			setIsUpdateCase(true);
		}
	}, []);

	useEffect(() => {
		if (isUpdateCase) {
			setDefaultData({
				medicineName: medicine?.medicineName,
				medicineDescription: medicine?.medicineDescription,
				companyName: medicine?.companyName,
				donorName: medicine?.donorName,
				donorContact: medicine?.donorContact,
				dosages: medicine?.dosages,
			});
		}
	}, [medicine, isUpdateCase]);

	const onSubmit = (data) => {
		if (isUpdateCase) {
			updateMedicine({
				body: data,
				medicineId: state?._id || medicine?._id,
			})
				.unwrap()
				.then((response) => {
					if (response.msg === "medicine_updated") {
						toast.success("Medicine updated successfully");
						return navigate(`/medicines/${response?.updatedMedicine?._id}`, {
							state: response?.updatedMedicine,
							replace: true,
						});
					}
					toast.error("Something went wrong!");
				})
				.catch((err) => {
					toast.error("Something went wrong");
					console.error(err.message);
				});
		} else if (donation) {
			donateMedicine(data)
				.unwrap()
				.then((response) => {
					if (response.msg === "medicine_added_queue") {
						toast.success("Donated info sent");
						setResetKey(Date.now()); // re-render with key -> ImageDropZone component
						reset();
					}
				})
				.catch((err) => {
					toast.error("Something went wrong");
					console.error(err.message);
				});
		} else {
			addMedicine(data)
				.unwrap()
				.then((response) => {
					if (response.msg === "medicine_added") {
						toast.success("New Medicine added");
						setResetKey(Date.now()); // re-render with key -> ImageDropZone component
						reset();
					}
				})
				.catch((err) => {
					toast.error("Something went wrong");
					console.error(err.message);
				});
		}
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
						<OutlinedInput
							disabled={
								responseInfo.isLoading ||
								updateResponseInfo.isLoading ||
								donateResponseInfo.isLoading
							}
							{...register("medicineName")}
						/>
						{errors.medicineName && (
							<FormHelperText error>{errors.medicineName?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.companyName)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="companyName">Company Name</InputLabel>
						<OutlinedInput
							disabled={
								responseInfo.isLoading ||
								updateResponseInfo.isLoading ||
								donateResponseInfo.isLoading
							}
							{...register("companyName")}
						/>
						{errors.companyName && (
							<FormHelperText error>{errors.companyName?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.donorName)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="donorName">Donor's Full Name</InputLabel>
						<OutlinedInput
							disabled={
								responseInfo.isLoading ||
								updateResponseInfo.isLoading ||
								donateResponseInfo.isLoading
							}
							{...register("donorName")}
						/>
						{errors.donorName && (
							<FormHelperText error>{errors.donorName?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.donorContact)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="donorContact">Donor's Contact Number</InputLabel>
						<OutlinedInput
							disabled={
								responseInfo.isLoading ||
								updateResponseInfo.isLoading ||
								donateResponseInfo.isLoading
							}
							{...register("donorContact")}
						/>
						{errors.donorContact && (
							<FormHelperText error>{errors.donorContact?.message}</FormHelperText>
						)}
					</FormControl>
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
						<OutlinedInput
							disabled={
								responseInfo.isLoading ||
								updateResponseInfo.isLoading ||
								donateResponseInfo.isLoading
							}
							multiline
							rows={7}
							{...register("medicineDescription")}
						/>
						{errors.medicineDescription && (
							<FormHelperText error>
								{errors.medicineDescription?.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Controller
						name="medicineImage"
						control={control}
						render={({ field }) => (
							<>
								<ImageDropZone
									{...field}
									image={state?.medicineImage || medicine?.medicineImage}
									onFileSelect={onFileSelect}
									key={resetKey}
								/>
							</>
						)}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.dosages)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="dosages">Number of Dosages</InputLabel>
						<OutlinedInput
							type="number"
							inputProps={{ min: 1 }}
							disabled={
								responseInfo.isLoading ||
								updateResponseInfo.isLoading ||
								donateResponseInfo.isLoading
							}
							{...register("dosages")}
						/>
						{errors.dosages && (
							<FormHelperText error>{errors.dosages?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
			</Grid>
			<Button
				startIcon={isUpdateCase ? <IconEdit size={20} /> : <IconHeartPlus size={20} />}
				type="submit"
				size="large"
				variant="contained"
				disableElevation
				disabled={
					responseInfo.isLoading ||
					updateResponseInfo.isLoading ||
					donateResponseInfo.isLoading
				}
				sx={{ color: "whitesmoke", borderRadius: "10px" }}
			>
				{isUpdateCase ? "Update Medicine" : donation ? "Donate" : "ADD Medicine"}
			</Button>
		</Box>
	);
};

export default MedicineForm;
