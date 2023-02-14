import { FormControl, InputLabel, OutlinedInput, useTheme } from "@mui/material";

const SearchBar = () => {
	const theme = useTheme();
	return (
		<FormControl fullWidth sx={{ ...theme.customInput, mb: "13px" }}>
			<InputLabel htmlFor="outlined-adornment-email-login">
				Email Address / Username
			</InputLabel>
			<OutlinedInput
				id="outlined-adornment-email-login"
				type="email"
				// value={"values.email"}
				name="email"
				// onBlur={"handleBlur"}
				// onChange={"handleChange"}
				label="Email Address / Username"
			/>
		</FormControl>
	);
};

export default SearchBar;
