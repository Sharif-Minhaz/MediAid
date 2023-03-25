import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useState } from "react";

export default function SelectYear() {
	const [year, setYear] = useState(2023);

	const handleChange = (event) => {
		setYear(event.target.value);
	};

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
				<MenuItem value={2021}>2021</MenuItem>
				<MenuItem value={2022}>2022</MenuItem>
				<MenuItem value={2023}>2023</MenuItem>
			</Select>
		</FormControl>
	);
}
