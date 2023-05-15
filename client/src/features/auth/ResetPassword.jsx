import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useResetPasswordMutation } from "./authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { set } from "../auth/userInfoSlice";
import Cookies from "js-cookie";

const ResetPassword = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [resetPassword, responseInfo] = useResetPasswordMutation();
	const [showPassword, setShowPassword] = useState(false);
	const [matchedPrevPsw, setMatchedPrevPsw] = useState(false);
	const [serverSideError, setServerSideError] = useState("");

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
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		setServerSideError("");
		resetPassword(data)
			.unwrap()
			.then((response) => {
				if (response.msg === "pass_reset") {
					toast.success("Password reset completed");
					Cookies.remove("uinfo");
					dispatch(set());
					return navigate("/login", { replace: true });
				} else if (response.msg === "same_pass") {
					return toast.error("New password can't be the old one");
				}
				setServerSideError("Wrong credential");
			})
			.catch((err) => {
				console.log(err);
				toast.error("Something went wrong!");
				setServerSideError("Wrong credential");
			})
			.finally(() => {
				reset({ newPassword: "" });
			});
	};

	const handleCheckOldPsw = (e) => {
		setMatchedPrevPsw(e.target.value ? true : false);
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault(true);
	};

	return (
		// wrapper component for auth forms
		<AuthWrapper>
			<AuthIntro
				des1="Reset Password"
				des2="Enter your previous password & reset"
				des3="Reset with previous password"
			/>
			<Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
				<FormControl
					fullWidth
					error={Boolean(errors.prevPassword || serverSideError)}
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
					{errors.prevPassword && (
						<FormHelperText error id="standard-weight-helper-text-prevPassword-login">
							{errors.prevPassword?.message}
						</FormHelperText>
					)}
				</FormControl>
				<FormControl
					fullWidth
					error={Boolean(errors.newPassword || serverSideError)}
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
						disabled={responseInfo.isLoading}
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
						<FormHelperText error id="standard-weight-helper-text-newPassword-login">
							{errors.newPassword?.message}
						</FormHelperText>
					)}

					{serverSideError && (
						<FormHelperText error id="standard-helper-text-newPassword-login">
							{serverSideError}
						</FormHelperText>
					)}
				</FormControl>
				<AuthSubmitButton disable={responseInfo.isLoading}>
					Change Password
				</AuthSubmitButton>
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
