import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	useTheme,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {
	IconEdit,
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTwitter,
} from "@tabler/icons-react";
import ImageDropZone from "../../components/imageDropZone/ImageDropZone";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateProfileMutation } from "../../features/profile/profileSlice";

const ProfileForm = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const { state } = useLocation();
	const [updateProfile, responseInfo] = useUpdateProfileMutation();

	const schema = yup
		.object({
			fullName: yup.string().required("Full name is required"),
			email: yup.string().required("Email is required"),
			contact: yup
				.string()
				.matches(/^[0-9,+]{9,}$/, "Contact number must be 9 digits or more"),
			description: yup.string().max(500, "Description must be at most 500 characters"),
			facebook: yup.string().url("Facebook profile link must be a url").nullable(),
			instagram: yup.string().url("Instagram profile link must be a url").nullable(),
			twitter: yup.string().url("Twitter profile link must be a url").nullable(),
		})
		.required();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			fullName: state?.fullName || "",
			contact: state?.contact || "",
			organization: state?.organization || "",
			description: state?.description || "",
			email: state?.email || "",
			address: state?.address || "",
			profilePicture: state?.profilePicture || "",
			facebook: state?.facebook || "",
			instagram: state?.instagram || "",
			twitter: state?.twitter || "",
		},
	});

	const onSubmit = (data) => {
		updateProfile(data)
			.then((response) => {
				if (response.data?.msg === "profile_updated") {
					toast.success("Profile updated successfully");
					return navigate("/profile", { replace: true });
				}
				toast.error("Something went wrong!");
			})
			.catch((err) => {
				toast.error("Something went wrong!");
				console.error(err);
			});
	};

	const onFileSelect = (file) => {
		setValue("profilePicture", file);
	};

	return (
		<Box component="form" p="20px" onSubmit={handleSubmit(onSubmit)}>
			<Grid container columnSpacing={2} rowSpacing="5px" mb={1.5}>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.fullName)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="fullName">Full Name</InputLabel>
						<OutlinedInput
							disabled={responseInfo.isLoading}
							{...register("fullName")}
						/>
						{errors.fullName && (
							<FormHelperText error>{errors.fullName?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.address)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="address">Address</InputLabel>
						<OutlinedInput disabled={responseInfo.isLoading} {...register("address")} />
						{errors.address && (
							<FormHelperText error>{errors.address?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.email)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="email">Email</InputLabel>
						<OutlinedInput disabled={true} {...register("email")} type="email" />
						{errors.email && (
							<FormHelperText error>{errors.email?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.contact)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="contact">Contact Number</InputLabel>
						<OutlinedInput disabled={responseInfo.isLoading} {...register("contact")} />
						{errors.contact && (
							<FormHelperText error>{errors.contact?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.description)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="description">Write about yourself</InputLabel>
						<OutlinedInput
							disabled={responseInfo.isLoading}
							multiline
							rows={7}
							{...register("description")}
						/>
						{errors.description && (
							<FormHelperText error>{errors.description?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Controller
						name="profilePicture"
						control={control}
						render={({ field }) => (
							<>
								<ImageDropZone
									{...field}
									image={state?.profilePicture}
									onFileSelect={onFileSelect}
								/>
							</>
						)}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.organization)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="organization">Organization</InputLabel>
						<OutlinedInput
							disabled={responseInfo.isLoading}
							{...register("organization")}
						/>
						{errors.organization && (
							<FormHelperText error>{errors.organization?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.facebook)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="facebook">Facebook Profile</InputLabel>
						<OutlinedInput
							disabled={responseInfo.isLoading}
							{...register("facebook")}
							endAdornment={
								<InputAdornment sx={{ mb: "4px" }} position="end">
									<IconBrandFacebook />
								</InputAdornment>
							}
						/>
						{errors.facebook && (
							<FormHelperText error>{errors.facebook?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.instagram)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="instagram">Instagram Profile</InputLabel>
						<OutlinedInput
							disabled={responseInfo.isLoading}
							{...register("instagram")}
							endAdornment={
								<InputAdornment sx={{ mb: "4px" }} position="end">
									<IconBrandInstagram />
								</InputAdornment>
							}
						/>
						{errors.instagram && (
							<FormHelperText error>{errors.instagram?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.twitter)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="twitter">Twitter Profile</InputLabel>
						<OutlinedInput
							disabled={responseInfo.isLoading}
							{...register("twitter")}
							endAdornment={
								<InputAdornment sx={{ mb: "4px" }} position="end">
									<IconBrandTwitter />
								</InputAdornment>
							}
						/>
						{errors.twitter && (
							<FormHelperText error>{errors.twitter?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
			</Grid>
			<Button
				startIcon={<IconEdit size={20} />}
				type="submit"
				size="large"
				variant="contained"
				disabled={responseInfo.isLoading}
				disableElevation
				sx={{ color: "whitesmoke", borderRadius: "10px" }}
			>
				Update Profile
			</Button>
		</Box>
	);
};

export default ProfileForm;
