import { useState } from "react";
import { Link } from "react-router-dom";
import KeyIcon from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
	Button,
	CssBaseline,
	FormControlLabel,
	Checkbox,
	Grid,
	Box,
	Typography,
	Container,
	Chip,
	Divider,
	FormControl,
	InputLabel,
	OutlinedInput,
	Paper,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { strengthColor, strengthIndicator } from "../../utils/passwordStrength";
import BrandAuthImg from "./BrandAuthImg";

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
		<Container component="main" sx={{ width: "520px !important" }}>
			<CssBaseline />
			<Paper
				sx={{
					marginBlock: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					p: 3,
				}}
			>
				<BrandAuthImg />

				<Typography fontWeight={700} color="primary" component="h5" variant="h5">
					Register Now
				</Typography>
				<Typography color="primary.contrastText" mt={2} mb="1px">
					Enter your credentials to continue
				</Typography>
				<Divider sx={{ width: "100%", mt: "20px", mb: "20px" }}>
					<Chip icon={<KeyIcon />} label={" Authentication"} variant="outlined" />
				</Divider>
				<Typography fontWeight={500} sx={{ fontSize: "0.875rem" }} mb={1}>
					Register with Email address
				</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }}>
					{/* grid for first and last name */}
					<Grid container spacing={2}>
						<Grid item md={6} sm={12}>
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
						<Grid item md={6} sm={12}>
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
						<InputLabel htmlFor="outlined-adornment-password-login">
							Password
						</InputLabel>
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
					<Button
						disableElevation
						type="submit"
						fullWidth
						variant="contained"
						sx={{
							mt: 3,
							mb: 2,
							p: "20px",
							color: "white",
							"&:hover": { backgroundColor: "primary.light" },
						}}
						disabled={!agreed}
					>
						Register
					</Button>
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
			</Paper>
		</Container>
	);
};

export default Register;
