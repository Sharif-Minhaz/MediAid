import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
	useTheme,
	FormHelperText,
} from "@mui/material";
import AuthWrapper from "./AuthWrapper";
import AuthIntro from "./AuthIntro";
import AuthSubmitButton from "./AuthSubmitButton";
import { toast } from "react-toastify";

const Login = () => {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false);

	const schema = yup
		.object({
			email: yup.string().email("Invalid email address").required("Email is required"),
			password: yup.string().required("Password is required"),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const onSubmit = (data) => {
		toast.success("Successfully get the form data");
		console.log(data);
	};

	return (
		<AuthWrapper>
			<AuthIntro
				des1="Hi, Welcome Back"
				des2="Enter your credentials to continue"
				des3="Log in with Email address"
			/>
			<Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
				<FormControl
					fullWidth
					error={Boolean(errors.email)}
					sx={{ ...theme.customInput, mb: "13px" }}
				>
					<InputLabel htmlFor="outlined-adornment-email-login">
						Email Address / Username
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-email-login"
						type="email"
						{...register("email")}
						label="Email Address / Username"
					/>
					{errors.email && (
						<FormHelperText
							sx={{ mb: 0, mt: 1 }}
							error
							id="standard-weight-helper-text-email-login"
						>
							{errors.email?.message}
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
						<FormHelperText
							sx={{ mb: 0, mt: 1 }}
							error
							id="standard-weight-helper-text-password-login"
						>
							{errors.password?.message}
						</FormHelperText>
					)}
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
