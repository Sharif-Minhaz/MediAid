import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	OutlinedInput,
	useTheme,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { IconPhotoPlus } from "@tabler/icons-react";
import ImageDropZone from "../../components/imageDropZone/ImageDropZone";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const AddPhotoForm = () => {
	const theme = useTheme();

	const schema = yup
		.object({
			galleryImageTitle: yup.string().required("Gallery photo name is required"),
			authorName: yup.string().required("Author name is required"),
			description: yup
				.string()
				.max(500, "Description shouldn't be more than 500 words")
				.required("Description is required"),
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
	});

	const onSubmit = (data) => {
		toast.success("Successfully get the form data");
		console.log(data);
	};

	const onFileSelect = (file) => {
		setValue("galleyImage", file);
	};

	return (
		<Box component="form" p="20px" onSubmit={handleSubmit(onSubmit)}>
			<Grid container columnSpacing={2} rowSpacing="5px" mb={1.5}>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.galleryImageTitle)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="galleryImageTitle">Gallery Image Title</InputLabel>
						<OutlinedInput {...register("galleryImageTitle")} />
						{errors.galleryImageTitle && (
							<FormHelperText error>
								{errors.galleryImageTitle?.message}
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.authorName)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="authorName">Author Name</InputLabel>
						<OutlinedInput {...register("authorName")} />
						{errors.authorName && (
							<FormHelperText error>{errors.authorName?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl
						error={Boolean(errors.description)}
						fullWidth
						sx={{ ...theme.customInput }}
					>
						<InputLabel htmlFor="description">Provide Necessary Information</InputLabel>
						<OutlinedInput multiline rows={7} {...register("description")} />
						{errors.description && (
							<FormHelperText error>{errors.description?.message}</FormHelperText>
						)}
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Controller
						name="galleyImage"
						control={control}
						render={({ field }) => (
							<ImageDropZone {...field} onFileSelect={onFileSelect} />
						)}
					/>
				</Grid>
			</Grid>
			<Button
				startIcon={<IconPhotoPlus size={20} />}
				type="submit"
				size="large"
				variant="contained"
				disableElevation
				sx={{ color: "whitesmoke", borderRadius: "10px" }}
			>
				Add Photo
			</Button>
		</Box>
	);
};

export default AddPhotoForm;
