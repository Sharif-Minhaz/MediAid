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
import AuthWrapper from "./AuthWrapper";
import AuthIntro from "./AuthIntro";
import AuthSubmitButton from "./AuthSubmitButton";

const Login = () => {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<AuthWrapper>
			<AuthIntro
				des1="Hi, Welcome Back"
				des2="Enter your credentials to continue"
				des3="Log in with Email address"
			/>
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
					<InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password-login"
						// value={"values.password"}
						name="password"
						// onBlur={"handleBlur"}
						// onChange={"handleChange"}
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
				<AuthSubmitButton>Log In</AuthSubmitButton>
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
		</AuthWrapper>
	);
};

export default Login;
