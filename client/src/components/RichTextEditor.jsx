import { forwardRef, useRef } from "react";
import { Box } from "@mui/material";
import JoditEditor from "jodit-react";

const config = {
	readonly: false,
	placeholder: "Write about the health tip...",
	height: "290px",
};

const RichTextEditor = forwardRef(({ error, setValue, getValues }, ref) => {
	const editor = useRef(null);

	return (
		<Box
			sx={{
				mt: 0.6,
				maxWidth: "100%",
				mb: 1.3,
				"& .jodit-toolbar__box": {
					borderTopLeftRadius: "12px",
					borderTopRightRadius: "12px",
					borderColor: error ? "#d32f2f" : "#ccc",
				},
				"& .jodit-container": {
					borderColor: error ? "#d32f2f" : "#ccc",
					borderRadius: "12px",
				},
				"& .jodit-status-bar": {
					borderColor: error ? "#d32f2f" : "#ccc",
					borderBottomLeftRadius: "12px",
					borderBottomRightRadius: "12px",
				},
			}}
		>
			<JoditEditor
				ref={editor}
				value={getValues("description")}
				config={config}				
				tabIndex={1}
				onBlur={(content) => setValue("description", content)}
				onChange={(content) => setValue("description", content)}
			/>
		</Box>
	);
});

export default RichTextEditor;
