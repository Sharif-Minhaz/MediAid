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
import { useAddGalleryImgMutation } from "./gallerySlice";
import { useState } from "react";

const AddPhotoForm = () => {
	const theme = useTheme();
	const [resetKey, setResetKey] = useState(Date.now());
	const [addGalleryImg, responseInfo] = useAddGalleryImgMutation();

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
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		addGalleryImg(data)
			.unwrap()
			.then((response) => {
				if (response.msg === "gallery_img_added") {
					toast.success("New Image added");
					setResetKey(Date.now()); // re-render with key -> ImageDropZone component
					reset();
				} else {
					toast.error("Something went wrong!");
				}
			})
			.catch((err) => {
				toast.error("Something went wrong");
				console.error(err.message);
			});
	};

	const onFileSelect = (file) => {
		setValue("galleryImage", file);
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
						<OutlinedInput
							disabled={responseInfo.isLoading}
							{...register("galleryImageTitle")}
						/>
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
						<OutlinedInput
							disabled={responseInfo.isLoading}
							{...register("authorName")}
						/>
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
						name="galleryImage"
						control={control}
						render={({ field }) => (
							<ImageDropZone
								{...field}
								onFileSelect={onFileSelect}
								key={resetKey}
							/>
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
				disabled={responseInfo.isLoading}
				sx={{ color: "whitesmoke", borderRadius: "10px" }}
			>
				Add Photo
			</Button>
		</Box>
	);
};

export default AddPhotoForm;
