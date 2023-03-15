import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import MedicinesList from "../../features/medicines/MedicinesList";
import MedicinesPagination from "./MedicinesPagination";
import medicines from "../../../data/medicines.json";

const MedicinesPage = () => {
	const [data, setData] = useState([]); // Your array of data
	const dataPerPage = 6; // The number of data to show per page
	const [currentPage, setCurrentPage] = useState(1); // The current page number
	const [totalPages, setTotalPages] = useState(0);

	// for asynchronous operations
	useEffect(() => {
		setData([...medicines]);
	}, []);

	useEffect(() => {
		setTotalPages(Math.ceil(data.length / dataPerPage));
	}, [data]);

	// Get the current data based on the current page
	const indexOfLastData = currentPage * dataPerPage;
	const indexOfFirstData = indexOfLastData - dataPerPage;
	const currentData = data.slice(indexOfFirstData, indexOfLastData);

	const handlePageChange = (_, value) => {
		setCurrentPage(value);
		window.scrollTo({ top: 0, left: 0 });
	};

	return (
		<>
			<Paper
				component="section"
				sx={{ mt: "5px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
			>
				<MedicinesList medicines={currentData} />
			</Paper>
			<Paper
				component="section"
				sx={{ mt: "2px", borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
			>
				<MedicinesPagination
					page={currentPage}
					handlePageChange={handlePageChange}
					count={totalPages}
				/>
			</Paper>
		</>
	);
};

export default MedicinesPage;
