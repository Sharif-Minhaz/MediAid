import { forwardRef } from "react";
import "quill/dist/quill.snow.css";
import { Box } from "@mui/material";

const RichTextEditor = forwardRef(({ error, quillRef }, ref) => {
	return (
		<Box
			ref={ref}
			sx={{
				mt: 0.6,
				maxWidth: "100%",
				height: 260,
				mb: { xs: 10, sm: 9, md: 7, lg: 6 },
				"& > .ql-toolbar.ql-snow": {
					borderTopLeftRadius: "12px",
					borderTopRightRadius: "12px",
					borderColor: error ? "#d32f2f" : "#ccc",
				},
				"& .ql-container.ql-snow": {
					borderColor: error ? "#d32f2f" : "#ccc",
				},
			}}
		>
			<Box
				ref={quillRef}
				sx={{
					borderBottomLeftRadius: "12px",
					borderBottomRightRadius: "12px",
				}}
			/>
		</Box>
	);
});

export default RichTextEditor;
