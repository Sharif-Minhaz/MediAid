import {
	Box,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Paper,
	TableCell,
	TableRow,
} from "@mui/material";
import TableRowContent from "./TableRowContent";
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";

const ListTable = ({ tableFormat, listData, tableName }) => {
	return (
		<Box
			sx={{
				overflow: "auto",
				mt: { xs: "16px", sm: "20px" },
				mx: { xs: "16px", sm: "20px" },
			}}
		>
			<Box
				sx={{
					width: "100%",
					display: "table",
					tableLayout: "fixed",
				}}
			>
				<TableContainer
					component={Paper}
					sx={{
						position: "relative",
						borderRadius: "10px",
						border: "1px solid #e5e3fb",
						minWidth: 650,
						overflow: "auto",
					}}
				>
					<Table aria-label="simple-listData-table">
						<TableHead>
							<StyledTableRow>
								{tableFormat.tableHeaders.map((headingInfo, i) => (
									<StyledTableCell key={i} align={headingInfo.align}>
										{headingInfo.heading}
									</StyledTableCell>
								))}
							</StyledTableRow>
						</TableHead>

						{listData.isLoading ? (
							<TableBody>
								<TableRow>
									<TableCell>Loading...</TableCell>
								</TableRow>
							</TableBody>
						) : (
							<TableBody>
								{listData.data?.[
									tableName === "history"
										? "history"
										: tableName === "donor"
										? "medicines"
										: "applications"
								]?.map((data) => (
									<TableRowContent
										key={data._id}
										data={data}
										tableFormat={tableFormat}
										tableName={tableName}
									/>
								))}
							</TableBody>
						)}
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default ListTable;
