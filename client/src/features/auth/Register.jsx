import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { IconEye as Visibility } from "@tabler/icons-react";
import { IconEyeOff as VisibilityOff } from "@tabler/icons-react";
import {
	FormControlLabel,
	Checkbox,
	Grid,
	Box,
	Typography,
	Divider,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormHelperText,
	useTheme,
} from "@mui/material";
import { strengthColor, strengthIndicator } from "../../utils/passwordStrength";
import AuthWrapper from "./AuthWrapper";
import AuthIntro from "./AuthIntro";
import AuthSubmitButton from "./AuthSubmitButton";
import { useRegisterMutation } from "./authSlice";

const Register = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const [registerUser, responseInfo] = useRegisterMutation();
	const [showPassword, setShowPassword] = useState(false);
	const [agreed, setAgreed] = useState(false);
	const [strength, setStrength] = useState(0);
	const [level, setLevel] = useState("");
	const [serverResError, setServerResError] = useState({ email: "" });

	const schema = yup
		.object({
			firstName: yup.string().required("Firstname is required"),
			lastName: yup.string().required("Lastname is required"),
			email: yup.string().email("Invalid email address").required("Email is required"),
			password: yup
				.string()
				.min(8, "Password must be at least 8 characters long")
				.required("Password is required"),
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

	const handleStrengthChange = (e) => {
		handlePswIndicator(e.target.value);
	};

	const handlePswIndicator = (value) => {
		const temp = strengthIndicator(value);
		setStrength(temp);
		setLevel(strengthColor(temp));
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const onError = (err) => {
		if (err.email) setServerResError({ email: "" });
	};

	const onSubmit = (data) => {
		registerUser(data)
			.unwrap()
			.then((response) => {
				if (response.msg === "registration_successful") {
					toast.success("Registration successful");
					return navigate("/login", { replace: true });
				}
				reset({ password: "" });
				toast.error("Registration failed");
			})
			.catch((err) => {
				reset({ password: "" });
				setStrength(0);
				if (err.status === 409) {
					setServerResError((prev) => ({ ...prev, email: "Email is already in use" }));
					return;
				}
				toast.error("Something went wrong");
			});
	};

	const handleAgree = () => setAgreed((prev) => !prev);

	return (
		// wrapper component for auth forms
		<AuthWrapper>
			<AuthIntro
				des1="Register Now"
				des2="Enter your credentials to continue"
				des3="Register with Email address"
			/>
			<Box
				component="form"
				noValidate
				sx={{ mt: 1 }}
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				{/* grid for first and last name */}
				<Grid container columnSpacing={2}>
					<Grid item sm={6} xs={12}>
						{/* input element - first name */}
						<FormControl
							fullWidth
							error={Boolean(errors.firstName)}
							sx={{ ...theme.customInput, mb: "13px" }}
						>
							<InputLabel htmlFor="outlined-adornment-firstName-login">
								First Name
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-firstName-login"
								type="text"
								label="First Name"
								{...register("firstName")}
								disabled={responseInfo.isLoading}
							/>
							{errors.firstName && (
								<FormHelperText error>{errors.firstName?.message}</FormHelperText>
							)}
						</FormControl>
					</Grid>
					<Grid item sm={6} xs={12}>
						{/* input element - last name */}
						<FormControl
							fullWidth
							error={Boolean(errors.lastName)}
							sx={{ ...theme.customInput, mb: "13px" }}
						>
							<InputLabel htmlFor="outlined-adornment-lastName-login">
								Last Name
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-lastName-login"
								type="text"
								{...register("lastName")}
								label="Last Name"
								disabled={responseInfo.isLoading}
							/>
							{errors.lastName && (
								<FormHelperText
									error={Boolean(errors.lastName)}
									id="standard-weight-helper-text-lastName-login"
								>
									{errors.lastName?.message}
								</FormHelperText>
							)}
						</FormControl>
					</Grid>
				</Grid>
				<FormControl
					fullWidth
					error={Boolean(errors.email || serverResError.email)}
					sx={{ ...theme.customInput, mb: "13px" }}
				>
					<InputLabel htmlFor="outlined-adornment-email-login">Email Address</InputLabel>
					<OutlinedInput
						id="outlined-adornment-email-login"
						type="email"
						{...register("email")}
						label="Email Address"
						disabled={responseInfo.isLoading}
					/>
					{errors.email && (
						<FormHelperText error id="standard-weight-helper-text-email-login">
							{errors.email?.message}
						</FormHelperText>
					)}
					{serverResError.email && (
						<FormHelperText error id="standard-helper-text-email-login">
							{serverResError.email}
						</FormHelperText>
					)}
				</FormControl>
				<FormControl
					fullWidth
					error={Boolean(errors.password)}
					sx={{ ...theme.customInput }}
				>
					<InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password-login"
						{...register("password")}
						label="Password"
						type={showPassword ? "text" : "password"}
						onChange={handleStrengthChange}
						disabled={responseInfo.isLoading}
						endAdornment={
							<InputAdornment sx={{ mb: "6px" }} position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									size="large"
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					{errors.password && (
						<FormHelperText error id="standard-weight-helper-text-password-login">
							{errors.password?.message}
						</FormHelperText>
					)}
				</FormControl>
				{strength !== 0 && (
					<FormControl fullWidth>
						<Box sx={{ mb: 2 }}>
							<Grid container spacing={2} alignItems="center">
								<Grid item>
									<Box
										style={{ backgroundColor: level?.color }}
										sx={{ width: 85, height: 8, borderRadius: "7px" }}
									/>
								</Grid>
								<Grid item>
									<Typography variant="subtitle1" fontSize="0.75rem">
										{level?.label}
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</FormControl>
				)}
				<Grid container>
					<Grid item xs alignItems="center">
						<FormControlLabel
							control={
								<Checkbox
									onClick={handleAgree}
									checked={agreed}
									value="agreed"
									color="primary"
								/>
							}
							label="Agree with Terms & Condition."
						/>
					</Grid>
				</Grid>
				<AuthSubmitButton disable={!agreed || responseInfo.isLoading}>
					Register
				</AuthSubmitButton>
				<Divider sx={{ width: "100%", mb: 2 }} />
				<Typography
					fontWeight={500}
					variant="body2"
					textAlign="center"
					color="secondary.contrastText"
				>
					<Link to="/login" style={{ color: "inherit" }}>
						{"Already have an account?"}
					</Link>
				</Typography>
			</Box>
		</AuthWrapper>
	);
};

export default Register;
