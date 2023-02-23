import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import MedicinesList from "../../features/medicines/MedicinesList";
import MedicinesPagination from "./MedicinesPagination";

const medicines = [
	{
		id: "1",
		name: "Esoral Mups",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/esoral-mups.png",
		rating: 4.8,
	},
	{
		id: "2",
		name: "AstraZeneca",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/AstraZeneca.avif",
		rating: 4.3,
	},
	{
		id: "3",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
	{
		id: "4",
		name: "Spinraza",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/Spinraza.jpg",
		rating: 4.2,
	},
	{
		id: "5",
		name: "Esoral Mups",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/esoral-mups.png",
		rating: 4.9,
	},
	{
		id: "6",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
	{
		id: "7",
		name: "Spinraza",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/Spinraza.jpg",
		rating: 4.2,
	},
	{
		id: "8",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
	{
		id: "9",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
	{
		id: "10",
		name: "Spinraza",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/Spinraza.jpg",
		rating: 4.2,
	},
	{
		id: "11",
		name: "Esoral Mups",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/esoral-mups.png",
		rating: 4.9,
	},
	{
		id: "12",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
	{
		id: "13",
		name: "Spinraza",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/Spinraza.jpg",
		rating: 4.2,
	},
	{
		id: "14",
		name: "Esoral Mups",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/esoral-mups.png",
		rating: 4.9,
	},
	{
		id: "15",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
	{
		id: "16",
		name: "Spinraza",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/Spinraza.jpg",
		rating: 4.2,
	},
	{
		id: "17",
		name: "Brineura",
		description:
			"Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion by specific inhibition of the H+/K+ ATPa",
		image: "/images/brineura.jpeg",
		rating: 4.6,
	},
];

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
			<Paper sx={{ mt: "5px", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
				<MedicinesList medicines={currentData} />
			</Paper>
			<Paper sx={{ mt: "2px", borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
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
