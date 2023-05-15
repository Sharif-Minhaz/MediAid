import "./ImageDropZone.css";
import { Box, Stack, Typography } from "@mui/material";
import { IconCloudUpload, IconPhotoSearch, IconX } from "@tabler/icons-react";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

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
	userSelect: "none",
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

const PreviewImgStyle = ({ files, handleRemoveImage }) => {
	return (
		<Box component="div" className="floating-msg">
			<Box component="div" sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
				{files?.length ? (
					<Box component="div" sx={{ position: "absolute", top: "7px", right: "7px" }}>
						<IconX
							onClick={handleRemoveImage}
							color="#fff"
							style={{ cursor: "pointer" }}
							size={20}
						/>
					</Box>
				) : (
					""
				)}
				<IconPhotoSearch size={20} />
				Preview
			</Box>
		</Box>
	);
};

const ImageDropZone = forwardRef(({ image = "", onFileSelect, key }, ref) => {
	const [files, setFiles] = useState([]);

	const handleRemoveImage = () => {
		setFiles([]);
	};

	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
		multiple: false,
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
			<Box component="div" className="thumb" key={file.name}>
				<PreviewImgStyle files={files} handleRemoveImage={handleRemoveImage} />
				<Box className="thumb-inner">
					<img
						src={file.preview}
						className="img"
						// Revoke data uri after image is loaded
						onLoad={() => {
							URL.revokeObjectURL(file.preview);
						}}
					/>
				</Box>
			</Box>
		))
	) : (
		<Box component="div" className="thumb">
			<PreviewImgStyle files={files} handleRemoveImage={handleRemoveImage} />
			<Box className="thumb-inner">
				<img className="img" src={image} />
			</Box>
		</Box>
	);

	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	return (
		<Box key={key} component="section" borderRadius={1.5} ref={ref}>
			<Box
				component="div"
				{...getRootProps({ style, className: "dropzone" })}
				sx={{ height: files.length || image ? "auto" : 208 }}
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
					{files.length ? (
						<Typography title={files[0]?.name}>
							{/* showing the selected file name */}
							{files[0]?.name.length > 19
								? `${files[0]?.name?.substring(0, 10)}...${files[0].name.substring(
										files[0].name?.length - 6
								  )}`
								: files[0]?.name}
						</Typography>
					) : (
						"Upload image: Drop here or click to select"
					)}
				</Stack>
			</Box>
			{(files.length || image) && (
				<Box component="aside" className="thumbs-container">
					{thumbs}
				</Box>
			)}
		</Box>
	);
});

export default ImageDropZone;
