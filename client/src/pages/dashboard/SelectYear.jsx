import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const years = [2023, 2024, 2025];

export default function SelectYear({ year, handleChange }) {
	return (
		<FormControl sx={{ minWidth: 100, height: "40px" }} size="small">
			<InputLabel id="demo-select-small">Year</InputLabel>
			<Select
				labelId="demo-select-small"
				id="demo-select-small"
				value={year}
				label="Year"
				onChange={handleChange}
			>
				{years.map((year) => (
					<MenuItem key={year} value={year}>
						{year}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
