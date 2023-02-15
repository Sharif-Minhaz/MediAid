import { Box, FormControl, InputAdornment, OutlinedInput, useTheme } from "@mui/material";
import { IconSearch as SearchIcon } from "@tabler/icons-react";
import { IconAdjustmentsHorizontal as TuneIcon } from "@tabler/icons-react";
import { IconX as CloseIcon } from "@tabler/icons-react";
import CustomIconButton from "../theme/customComponent/CustomIconButton";

const absoluteStyle = {
	zIndex: 999,
	width: "calc(100%)",
	top: "50%",
	left: "50%",
	translate: "-50% -50%",
};

const SearchBar = ({
	sm,
	md,
	lgWidth,
	mdWidth,
	smWidth,
	position = "relative",
	handleShowFullSearch = () => false,
}) => {
	const theme = useTheme();

	return (
		<Box
			component="div"
			className="search-floating-md"
			sx={{ width: "100%", position, height: "100%" }}
		>
			<FormControl
				sx={{
					display: { xs: sm, sm, md },
					position,
					...(position === "absolute" && absoluteStyle),
				}}
			>
				<OutlinedInput
					startAdornment={
						<InputAdornment position="start">
							<SearchIcon size={18} />
						</InputAdornment>
					}
					sx={{
						width: { xs: smWidth, sm: smWidth, md: mdWidth, lg: lgWidth },
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
							<>
								<CustomIconButton
									sx={{ mr: "-3px" }}
									aria-label="filter search"
									edge="end"
								>
									<TuneIcon />
								</CustomIconButton>
								{position === "absolute" && (
									<CustomIconButton
										sx={{
											mr: "-3px",
											ml: "10px",
											color: theme.palette.warning.main,
											backgroundColor: theme.palette.warning.light,
											"&:hover": {
												backgroundColor: theme.palette.warning.main,
												color: theme.palette.warning.light,
											},
										}}
										aria-label="filter search"
										edge="end"
										onClick={handleShowFullSearch}
									>
										<CloseIcon />
									</CustomIconButton>
								)}
							</>
						</InputAdornment>
					}
				/>
			</FormControl>
		</Box>
	);
};

export default SearchBar;
