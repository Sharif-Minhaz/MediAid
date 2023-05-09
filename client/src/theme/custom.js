import { grey } from "@mui/material/colors";

export const customTheme = () => {
	const theme = {
		marginTop: 1,
		marginBottom: 1,
		"& > label": {
			top: 15,
			left: 0,
			color: grey[500],
			'&[data-shrink="false"]': {
				top: -1,
			},
		},
		"& > div > input": {
			padding: "27.5px 14px 11.5px !important",
			marginTop: "-4px",
		},
		"& > div > textarea": {
			paddingTop: "8px",
		},
		"& legend": {
			display: "none",
		},
		"&.Mui-focused fieldset": {
			top: 0,
			borderColor: "#2196f3 !important",
		},
		"&.Mui-error fieldset": {
			borderColor: "#f44336",
		},
	};

	return theme;
};
