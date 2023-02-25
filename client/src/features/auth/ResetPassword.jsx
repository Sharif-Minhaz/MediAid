import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
	useTheme,
	FormHelperText,
} from "@mui/material";
import AuthWrapper from "./AuthWrapper";
import AuthIntro from "./AuthIntro";
import AuthSubmitButton from "./AuthSubmitButton";

const ResetPassword = () => {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false);
	const [matchedPrevPsw, setMatchedPrevPsw] = useState(false);

	const schema = yup
		.object({
			prevPassword: yup.string().required("Old password is required"),
			newPassword: yup.string().required("New password is required"),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		toast.success("Successfully get the form data");
		console.log(data);
	};

	const handleCheckOldPsw = (e) => {
		setMatchedPrevPsw(e.target.value ? true : false);
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault(true);
	};

	return (
		<AuthWrapper>
			<AuthIntro
				des1="Reset Password"
				des2="Enter your previous password & reset"
				des3="Reset with previous password"
			/>
			<Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
				<FormControl
					fullWidth
					error={Boolean(errors.prevPassword)}
					sx={{ ...theme.customInput, mb: "13px" }}
				>
					<InputLabel htmlFor="outlined-adornment-password-login">
						Previous Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password-login"
						{...register("prevPassword")}
						label="Previous Password"
						type={showPassword ? "text" : "password"}
						onChange={handleCheckOldPsw}
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
					{errors.prevPassword && (
						<FormHelperText
							sx={{ mt: 1, mb: 0 }}
							error
							id="standard-weight-helper-text-prevPassword-login"
						>
							{errors.prevPassword?.message}
						</FormHelperText>
					)}
				</FormControl>
				<FormControl
					fullWidth
					error={Boolean(errors.newPassword)}
					sx={{ ...theme.customInput }}
					disabled={!matchedPrevPsw}
				>
					<InputLabel htmlFor="outlined-adornment-new-password-login">
						New Password
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-new-password-login"
						{...register("newPassword")}
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
					{errors.newPassword && (
						<FormHelperText
							sx={{ mt: 1, mb: 0 }}
							error
							id="standard-weight-helper-text-newPassword-login"
						>
							{errors.newPassword?.message}
						</FormHelperText>
					)}
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
