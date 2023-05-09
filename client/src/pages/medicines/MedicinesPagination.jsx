import { Box, Pagination } from "@mui/material";

const PaginationPage = ({ handlePageChange, page, count }) => {
	return (
		<Box component="div" marginX="auto">
			<Pagination
				onChange={handlePageChange}
				page={page}
				count={count || 0}
				variant="outlined"
				color="primary"
				sx={{ p: 3, "& .MuiPagination-ul": { justifyContent: "center" } }}
			/>
		</Box>
	);
};

export default PaginationPage;
