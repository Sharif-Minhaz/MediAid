import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
	Box,
	FormControl,
	InputLabel,
	OutlinedInput,
	useTheme,
	FormHelperText,
	Button,
} from "@mui/material";
import { IconPencilPlus, IconReportMedical } from "@tabler/icons-react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import RichTextEditor from "../../components/RichTextEditor";
import {
	useAddHealthTipMutation,
	useUpdateHealthTipMutation,
} from "../../features/healthTipsSlice/healthTipsSlice";

const HealthTipForm = ({ isUpdateCase, setIsUpdateCase }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { state } = useLocation();
	const [addHealthTip, responseInfo] = useAddHealthTipMutation();
	const [updateHealthTip, updateResponseInfo] = useUpdateHealthTipMutation();

	const schema = yup
		.object({
			title: yup.string().required("Title is required"),
			description: yup
				.string()
				.min(25, "Description must be at least 25 characters")
				.required("Description is required"),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		getValues,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			title: state?.title || "",
			description: state?.description || "",
		},
	});

	const onSubmit = (data) => {
		if (isUpdateCase) {
			updateHealthTip({ body: data, healthTipId: state._id })
				.unwrap()
				.then((response) => {
					if (response.msg === "health_tip_updated") {
						toast.success("Health Tip updated");
						return navigate("/health-tips", { replace: true });
					}
					toast.error("Health Tip is not updated");
				})
				.catch((err) => toast.error("Something went wrong!"));
		} else {
			addHealthTip(data)
				.unwrap()
				.then((response) => {
					if (response.msg === "health_tip_added") {
						toast.success("New Health Tip added");
						return reset();
					}
					toast.error("Health Tip is not added");
				})
				.catch((err) => toast.error("Something went wrong!"));
		}
	};

	useEffect(() => {
		if (Boolean(state)) {
			setIsUpdateCase(true);
		}
	}, []);

	return (
		<Box
			component="form"
			noValidate
			sx={{ padding: { xs: "16px", sm: "20px" } }}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormControl
				fullWidth
				error={Boolean(errors.title)}
				sx={{ ...theme.customInput, mb: "13px" }}
			>
				<InputLabel htmlFor="outlined-adornment-title">Health Tip's Title</InputLabel>
				<OutlinedInput
					id="outlined-adornment-title"
					{...register("title")}
					label="title"
					disabled={responseInfo.isLoading}
				/>
				{errors.title && (
					<FormHelperText error id="standard-weight-helper-text-title">
						{errors.title?.message}
					</FormHelperText>
				)}
			</FormControl>

			<RichTextEditor
				data={state?.description}
				error={Boolean(errors.description?.message)}
				setValue={setValue}
				getValues={getValues}
			/>

			{errors.description && (
				<FormHelperText sx={{ ml: 2, mt: "-5px" }} error>
					{errors.description?.message}
				</FormHelperText>
			)}

			<Button
				size="large"
				disableElevation
				sx={{ color: "whitesmoke", mt: "10px", mb: "20px" }}
				endIcon={
					isUpdateCase ? <IconPencilPlus size={18} /> : <IconReportMedical size={18} />
				}
				variant="contained"
				type="submit"
				disabled={responseInfo.isLoading || updateResponseInfo.isLoading}
			>
				{isUpdateCase ? "Update" : "Add"}
			</Button>
		</Box>
	);
};

export default HealthTipForm;
