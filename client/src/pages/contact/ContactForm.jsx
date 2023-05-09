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
import { IconSend } from "@tabler/icons-react";
import { useForm as useFormsPree } from "@formspree/react";
import { toast } from "react-toastify";

const ContactForm = () => {
	const key = import.meta.env.VITE_FORMSPREE_KEY;
	const theme = useTheme();
	const [state, handleMailSend] = useFormsPree(key);

	const schema = yup
		.object({
			name: yup.string().required("Name is required"),
			email: yup.string().email().required("Email is required"),
			description: yup
				.string()
				.min(25, "Description must be at least 25 characters")
				.max(1000)
				.required("Description is required"),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data, e) => {
		handleMailSend(e)
			.then(() => {
				toast.success("Successfully sent the mail");
				reset();
			})
			.catch((err) => {
				toast.error("Couldn't sent the mail");
			});
	};

	return (
		<Box
			component="form"
			noValidate
			sx={{ padding: { xs: "16px", sm: "16px 20px 20px 0" } }}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormControl
				fullWidth
				error={Boolean(errors.name)}
				sx={{ ...theme.customInput, mb: "13px" }}
			>
				<InputLabel htmlFor="outlined-adornment-name-login">Name</InputLabel>
				<OutlinedInput
					id="outlined-adornment-name-login"
					{...register("name")}
					label="Name"
					disabled={state.submitting}
				/>
				{errors.name && (
					<FormHelperText error id="standard-weight-helper-text-name-login">
						{errors.name?.message}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl fullWidth error={Boolean(errors.email)} sx={{ ...theme.customInput }}>
				<InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
				<OutlinedInput
					id="outlined-adornment-email"
					{...register("email")}
					label="Email Address"
					type="email"
					disabled={state.submitting}
				/>
				{errors.email && (
					<FormHelperText error id="standard-weight-helper-text-email-login">
						{errors.email?.message}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl
				error={Boolean(errors.description)}
				fullWidth
				sx={{ ...theme.customInput, mt: "13px" }}
			>
				<InputLabel htmlFor="description">Write about your needs</InputLabel>

				<OutlinedInput
					multiline
					rows={6}
					{...register("description")}
					disabled={state.submitting}
				/>
				{errors.description && (
					<FormHelperText error>{errors.description?.message}</FormHelperText>
				)}
			</FormControl>
			<Button
				size="large"
				disableElevation
				sx={{ color: "whitesmoke", mt: "10px", mb: "20px" }}
				endIcon={<IconSend size={18} />}
				variant="contained"
				type="submit"
				disabled={state.submitting}
			>
				Send
			</Button>
		</Box>
	);
};

export default ContactForm;
