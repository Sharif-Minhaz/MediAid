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

const Login = () => {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

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
				{/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar> */}
				<img src="/images/cover.png" height="85" />

				<Typography fontWeight={700} color="primary" component="h5" variant="h5">
					Hi, Welcome Back
				</Typography>
				<Typography color="primary.contrastText" mt={2} mb="1px">
					Enter your credentials to continue
				</Typography>
				<Divider sx={{ width: "100%", mt: "20px", mb: "20px" }}>
					<Chip icon={<KeyIcon />} label={" Authentication"} variant="outlined" />
				</Divider>
				<Typography fontWeight={500} sx={{ fontSize: "0.875rem" }} mb={1}>
					Log in with Email address
				</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }}>
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
							// value={"values.password"}
							name="password"
							// onBlur={"handleBlur"}
							// onChange={"handleChange"}
							label="Password"
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment sx={{ mb: "6px"}} position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
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
					<Grid container>
						<Grid item xs alignItems="center">
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
						</Grid>
						<Grid item display="flex" alignItems="center">
							<Typography fontWeight={500} variant="body2" color="primary">
								<Link style={{ color: "inherit" }} to="/reset-password">
									{"Reset Password"}
								</Link>
							</Typography>
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
					>
						Log In
					</Button>
					<Divider sx={{ width: "100%", mb: 2 }} />
					<Typography
						fontWeight={500}
						variant="body2"
						textAlign="center"
						color="secondary.contrastText"
					>
						<Link to="/register" style={{ color: "inherit" }}>
							{"Don't have an account?"}
						</Link>
					</Typography>
				</Box>
			</Paper>
		</Container>
	);
};

export default Login;
