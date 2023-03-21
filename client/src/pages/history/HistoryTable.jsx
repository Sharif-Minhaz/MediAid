import {
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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { formatDistance } from "date-fns";

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

const HistoryExcerpt = ({ history }) => {
	return (
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
			<Table aria-label="simple-history-table">
				<TableHead>
					<StyledTableRow>
						<StyledTableCell>Avatar</StyledTableCell>
						<StyledTableCell align="left">Username</StyledTableCell>
						<StyledTableCell align="center">Role</StyledTableCell>
						<StyledTableCell align="right">Medicine</StyledTableCell>
						<StyledTableCell align="right">Action</StyledTableCell>
						<StyledTableCell align="right">Date</StyledTableCell>
					</StyledTableRow>
				</TableHead>
				<TableBody>
					{history.map((data) => (
						<StyledTableRow
							key={data.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<StyledTableCell component="th" scope="row">
								<Avatar src={data.user.profilePic} alt={data.user.name} />
							</StyledTableCell>
							<StyledTableCell align="left">{data.user.name}</StyledTableCell>
							<StyledTableCell align="center">{data.user.role}</StyledTableCell>
							<StyledTableCell align="right">
								{data.medicine.medicineName}
							</StyledTableCell>
							<StyledTableCell align="right">
								<Chip label={data.action} size="small" />
							</StyledTableCell>
							<StyledTableCell align="right">
								{formatDistance(data.date, new Date(), {
									addSuffix: true,
								})}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default HistoryExcerpt;
