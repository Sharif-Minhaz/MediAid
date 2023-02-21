import { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { strengthColor, strengthIndicator } from "../../utils/passwordStrength";
import AuthWrapper from "./AuthWrapper";
import AuthIntro from "./AuthIntro";
import AuthSubmitButton from "./AuthSubmitButton";

const initialData = { password: "" };

const Register = () => {
	const theme = useTheme();
	const [formData, setFormData] = useState(initialData);
	const [showPassword, setShowPassword] = useState(false);
	const [agreed, setAgreed] = useState(false);
	const [strength, setStrength] = useState(0);
	const [level, setLevel] = useState();

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		if (e.target.name === "password") {
			handlePswIndicator(e.target.value);
		}
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

	const handleAgree = () => setAgreed((prev) => !prev);

	return (
		<AuthWrapper>
			<AuthIntro
				des1="Register Now"
				des2="Enter your credentials to continue"
				des3="Register with Email address"
			/>
			<Box component="form" noValidate sx={{ mt: 1 }}>
				{/* grid for first and last name */}
				<Grid container columnSpacing={2}>
					<Grid item sm={6} xs={12}>
						{/* input element - first name */}
						<FormControl
							fullWidth
							// error={Boolean(errors.firstName)}
							// error={true}
							sx={{ ...theme.customInput, mb: "13px" }}
						>
							<InputLabel htmlFor="outlined-adornment-firstName-login">
								First Name
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-firstName-login"
								type="text"
								// value={"values.firstName"}
								name="firstName"
								// onBlur={"handleBlur"}
								// onChange={"handleChange"}
								label="First Name"
							/>
							{/* {errors.firstName && (
							<FormHelperText error id="standard-weight-helper-text-firstName-login">
								{errors.firstName}
							</FormHelperText>
						)} */}
						</FormControl>
					</Grid>
					<Grid item sm={6} xs={12}>
						{/* input element - last name */}
						<FormControl
							fullWidth
							// error={Boolean(errors.lastName)}
							// error={true}
							sx={{ ...theme.customInput, mb: "13px" }}
						>
							<InputLabel htmlFor="outlined-adornment-lastName-login">
								Last Name
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-lastName-login"
								type="text"
								// value={"values.lastName"}
								name="lastName"
								// onBlur={"handleBlur"}
								// onChange={"handleChange"}
								label="Last Name"
							/>
							{/* {errors.lastName && (
							<FormHelperText error id="standard-weight-helper-text-lastName-login">
								{errors.lastName}
							</FormHelperText>
						)} */}
						</FormControl>
					</Grid>
				</Grid>
				<FormControl
					fullWidth
					// error={Boolean(errors.email)}
					// error={true}
					sx={{ ...theme.customInput, mb: "13px" }}
				>
					<InputLabel htmlFor="outlined-adornment-email-login">
						Email Address / Username
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-email-login"
						type="email"
						// value={"values.email"}
						name="email"
						// onBlur={"handleBlur"}
						// onChange={"handleChange"}
						label="Email Address / Username"
					/>
					{/* {errors.email && (
							<FormHelperText error id="standard-weight-helper-text-email-login">
								{errors.email}
							</FormHelperText>
						)} */}
				</FormControl>
				<FormControl
					fullWidth
					// error={Boolean(errors.email)}
					// error={true}
					sx={{ ...theme.customInput }}
				>
					<InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password-login"
						value={formData.password}
						name="password"
						onChange={handleChange}
						label="Password"
						type={showPassword ? "text" : "password"}
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
					{/* {errors.password && (
							<FormHelperText error id="standard-weight-helper-text-password-login">
								{errors.password}
							</FormHelperText>
						)} */}
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
				<AuthSubmitButton disable={!agreed}>Register</AuthSubmitButton>
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
