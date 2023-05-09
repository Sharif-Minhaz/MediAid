import { Controller, useForm } from "react-hook-form";
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
	Rating,
	Typography,
	Grid,
} from "@mui/material";
import { IconSend } from "@tabler/icons-react";
import { toast } from "react-toastify";
import { useAddReviewMutation } from "../../../features/medicines/reviewSlice";
import { useNavigate } from "react-router-dom";

const MedicineReviewForm = ({ medicineId }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	const [addReview, reviewInfo] = useAddReviewMutation();

	const schema = yup
		.object({
			rating: yup
				.number()
				.positive("Rating is required")
				.integer()
				.required("Rating is required"),
			description: yup.string().max(500),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data, e) => {
		addReview({ ...data, medicine: medicineId, review: data.description })
			.unwrap()
			.then((response) => {
				if (response.msg === "review_added") {
					toast.success("Thanks for your response");
					return reset();
				}
				toast.error("Something went wrong");
			})
			.catch((err) => {
				if (err.status === 401) {
					navigate("/login");
					return toast.error("Login required for this action");
				}
				toast.error("Something went wrong");
			});
	};

	return (
		<Box
			component="form"
			noValidate
			sx={{ padding: { xs: "16px", sm: "5px 20px" } }}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormControl
				fullWidth
				error={Boolean(errors.name)}
				sx={{ ...theme.customInput, mb: "13px" }}
			>
				<Typography component="p">Your Rating</Typography>
				<Controller
					name="rating"
					control={control}
					defaultValue={3}
					rules={{ required: true }}
					render={({ field }) => (
						<Rating
							sx={{ width: "120px" }}
							{...field}
							onChange={(event, rating) => field.onChange(Number(rating))}
						/>
					)}
				/>

				{errors.rating && (
					<FormHelperText
						sx={{ ml: "2px" }}
						error
						id="standard-weight-helper-text-rating"
					>
						{errors.rating?.message}
					</FormHelperText>
				)}
			</FormControl>
			<Grid container>
				<Grid item xs={12} md={8} lg={6}>
					<FormControl
						error={Boolean(errors.description)}
						fullWidth
						sx={{ ...theme.customInput, mt: "13px" }}
					>
						<InputLabel htmlFor="description">
							Write about the quality and experiences...
						</InputLabel>

						<OutlinedInput
							disabled={reviewInfo.isLoading}
							multiline
							rows={6}
							{...register("description")}
						/>
						{errors.description && (
							<FormHelperText error>{errors.description?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
			</Grid>
			<Button
				size="large"
				disableElevation
				disabled={reviewInfo.isLoading}
				sx={{ color: "whitesmoke", mt: "10px", mb: "20px" }}
				endIcon={<IconSend size={18} />}
				variant="contained"
				type="submit"
			>
				Send
			</Button>
		</Box>
	);
};

export default MedicineReviewForm;
