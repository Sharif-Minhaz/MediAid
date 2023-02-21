import { useState } from "react";
import { Link } from "react-router-dom";
import { IconEye as Visibility } from "@tabler/icons-react";
import { IconEyeOff as VisibilityOff } from "@tabler/icons-react";
import {
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

const ResetPassword = () => {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false);
	const [matchedPrevPsw, setMatchedPrevPsw] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<AuthWrapper>
			<AuthIntro
				des1="Reset Password"
				des2="Enter your previous password & reset"
				des3="Reset with previous password"
			/>
			<Box component="form" noValidate sx={{ mt: 1 }}>
				<FormControl
					fullWidth
					// error={Boolean(errors.email)}
					// error={true}
					sx={{ ...theme.customInput }}
				>
					<InputLabel htmlFor="outlined-adornment-password-login">
						Previous Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password-login"
						// value={"values.password"}
						name="prevPassword"
						// onBlur={"handleBlur"}
						// onChange={"handleChange"}
						label="Previous Password"
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
				<FormControl
					fullWidth
					// error={Boolean(errors.email)}
					// error={true}
					sx={{ ...theme.customInput }}
					disabled={!matchedPrevPsw}
				>
					<InputLabel htmlFor="outlined-adornment-new-password-login">
						New Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-new-password-login"
						// value={"values.password"}
						name="password"
						// onBlur={"handleBlur"}
						// onChange={"handleChange"}
						label="New Password"
						type={showPassword ? "text" : "password"}
						endAdornment={
							<InputAdornment sx={{ mb: "6px" }} position="end">
								<IconButton
									disabled={!matchedPrevPsw}
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
				<AuthSubmitButton>Change Password</AuthSubmitButton>
				<Divider sx={{ width: "100%", mb: 2 }} />
				<Typography
					fontWeight={500}
					variant="body2"
					textAlign="center"
					color="secondary.contrastText"
				>
					<Link to="/login" style={{ color: "inherit" }}>
						{"Login now!"}
					</Link>
				</Typography>
			</Box>
		</AuthWrapper>
	);
};

export default ResetPassword;
