import { Box, Stack, Typography } from "@mui/material";
import { IconCloudUpload } from "@tabler/icons-react";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	marginTop: "10px",
};

const thumb = {
	position: "relative",
	display: "inline-flex",
	borderRadius: 2,
	border: "1px solid #eaeaea",
	marginBottom: 8,
	marginRight: 8,
	height: 108,
	padding: "3.2px",
	boxSizing: "border-box",
};

const thumbInner = {
	display: "flex",
	minWidth: 0,
	overflow: "hidden",
};

const img = {
	display: "block",
	width: "auto",
	borderRadius: 4,
	height: 100,
};

const baseStyle = {
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	padding: "26px",
	marginTop: "3px",
	borderWidth: 2,
	borderRadius: 12,
	borderColor: "#eeeeee",
	borderStyle: "dashed",
	backgroundColor: "#fafafa",
	color: "#bdbdbd",
	outline: "none",
	transition: "border .24s ease-in-out",
};

const focusedStyle = {
	borderColor: "#2196f3",
};

const acceptStyle = {
	borderColor: "#00e676",
};

const rejectStyle = {
	borderColor: "#ff1744",
};

const ImageDropZone = forwardRef(({ image, onFileSelect }, ref) => {
	const [files, setFiles] = useState([]);

	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
		accept: {
			"image/*": [],
		},
		onDrop: (acceptedFiles) => {
			onFileSelect(acceptedFiles[0]);
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isFocused ? focusedStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isFocused, isDragAccept, isDragReject]
	);

	const thumbs = files.length ? (
		files.map((file) => (
			<Box component="div" sx={thumb} key={file.name}>
				<Box sx={thumbInner}>
					<img
						src={file.preview}
						style={img}
						// Revoke data uri after image is loaded
						onLoad={() => {
							URL.revokeObjectURL(file.preview);
						}}
					/>
				</Box>
			</Box>
		))
	) : (
		<Box component="div" sx={thumb}>
			<Box sx={thumbInner}>
				<img style={img} src={image} />
			</Box>
		</Box>
	);

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return (
		<Box component="section" borderRadius={1.5} ref={ref}>
			<Box
				component="div"
				{...getRootProps({ style, className: "dropzone" })}
				sx={{ height: files.length || image ? "auto" : 205 }}
			>
				<input {...getInputProps()} />
				{!(files.length || image) && (
					<Box component="div" mb={1.3}>
						<IconCloudUpload size={50} />
					</Box>
				)}
				<Stack direction="row" alignItems="center">
					{(files.length || image) && (
						<Box component="span" sx={{ display: "inline-block", m: "4px 5px 0 0" }}>
							<IconCloudUpload size={22} />
						</Box>
					)}
					Upload medicine img, Drop here or click to select img
				</Stack>
			</Box>
			{(files.length || image) && (
				<Box component="aside" sx={thumbsContainer}>
					{thumbs}
				</Box>
			)}
		</Box>
	);
});

export default ImageDropZone;
