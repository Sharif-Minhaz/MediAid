export const componentsTheme = () => {
	const theme = {
		MuiButton: {
			styleOverrides: {
				root: {
					// lineHeight: 0,
				},
			},
		},
		MuiPaper: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					backgroundImage: "none",
				},
				rounded: {
					borderRadius: "12px",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: "12px",
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					"&.Mui-focused": {
						color: "#2196f3",
						fontSize: "0.99rem",
					},
					"&.Mui-error": {
						color: "#f44336",
					},
				},
			},
		},
	};

	return theme;
};
