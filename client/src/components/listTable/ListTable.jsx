import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Avatar,
	Chip,
	tableCellClasses,
	Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { formatDistance } from "date-fns";
import { toast } from "react-toastify";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#898fd5",
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const ListTable = ({ tableFormat, listData, tableName }) => {
	const handleUserRequest = (user) => {
		toast.warn(`User - ${user}:  remove req`);
	};

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
						<TableBody>
							{listData.map((data) => (
								<StyledTableRow
									key={data.id}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<StyledTableCell
										align={tableFormat.tableHeaders[0].align}
										component="th"
										scope="row"
									>
										<Avatar src={data.user.profilePic} alt={data.user.name} />
									</StyledTableCell>
									<StyledTableCell align={tableFormat.tableHeaders[1].align}>
										{data.user.name}
									</StyledTableCell>
									<StyledTableCell align={tableFormat.tableHeaders[2].align}>
										{data.user.role}
									</StyledTableCell>
									{tableName === "history" ? (
										<>
											<StyledTableCell
												align={tableFormat.tableHeaders[3].align}
											>
												{data.medicine.medicineName}
											</StyledTableCell>
											<StyledTableCell
												align={tableFormat.tableHeaders[4].align}
											>
												<Chip label={data.action} size="small" />
											</StyledTableCell>
											<StyledTableCell
												align={tableFormat.tableHeaders[5].align}
											>
												{formatDistance(data.date, new Date(), {
													addSuffix: true,
												})}
											</StyledTableCell>
										</>
									) : (
										<>
											<StyledTableCell
												align={tableFormat.tableHeaders[3].align}
											>
												{data.totalMedicine}
											</StyledTableCell>
											<StyledTableCell
												align={tableFormat.tableHeaders[4].align}
											>
												<Button
													disableElevation
													sx={{
														background: "#ef4d4d",
														color: "white",
														fontSize: "10.5px",
                                                        borderRadius: "50px",
														"&:hover": {
															background: "red",
														},
													}}
													size="small"
													variant="contained"
													onClick={() =>
														handleUserRequest(data.user.name)
													}
												>
													Remove
												</Button>
											</StyledTableCell>
										</>
									)}
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default ListTable;
