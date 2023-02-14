import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import CustomIconButton from "../theme/customComponent/CustomIconButton";

const SearchBar = () => {
	return (
		<FormControl sx={{ ml: 1 }}>
			<OutlinedInput
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				}
				sx={{
					width: { lg: "430px", md: "250px" },
					height: "51px",
					background: "#f8fafc",
					fontSize: "14px",
					fontWeight: 500,
				}}
				id="outlined-adornment-email-login"
				type="email"
				// value={"values.email"}
				name="email"
				// onBlur={"handleBlur"}
				// onChange={"handleChange"}
				notched={false}
				placeholder="Search medicine..."
				endAdornment={
					<InputAdornment position="end">
						<CustomIconButton sx={{ mr: "-3px" }} aria-label="filter search" edge="end">
							<TuneIcon />
						</CustomIconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export default SearchBar;
