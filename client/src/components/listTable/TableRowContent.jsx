import { Avatar, Chip, Button } from "@mui/material";
import { formatDistance } from "date-fns";
import { toCapitalize } from "./../../utils/toCapitalize";
import { toast } from "react-toastify";
import { useFindProfileQuery } from "../../features/profile/profileSlice";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

const TableRowContent = ({ data, tableFormat, tableName }) => {
	const profileInfo = useFindProfileQuery(data.user?._id || data?.donorAccount?._id);

	const handleUserRequest = () => {
		toast.warn(`Feature under development!`);
	};

	return (
		<StyledTableRow key={data._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
			<StyledTableCell align={tableFormat.tableHeaders[0].align} component="th" scope="row">
				<Avatar
					src={profileInfo?.data?.profile?.profilePicture}
					alt={data.user?.firstName}
				/>
			</StyledTableCell>
			<StyledTableCell align={tableFormat.tableHeaders[1].align}>
				{tableName === "donor"
					? profileInfo?.data?.profile?.fullName || "Anonymous"
					: `${data.user?.firstName} ${data.user?.lastName}`}
			</StyledTableCell>
			{tableName !== "donor" && (
				<StyledTableCell align={tableFormat.tableHeaders[2].align}>
					{toCapitalize(data.user?.user_type)}
				</StyledTableCell>
			)}
			<StyledTableCell align={tableFormat.tableHeaders[3].align}>
				{data.medicineName || data.medicine?.medicineName}
			</StyledTableCell>
			{tableName === "donor" && (
				<>
					<StyledTableCell align={tableFormat.tableHeaders[3].align}>
						{data.companyName}
					</StyledTableCell>
					<StyledTableCell align={tableFormat.tableHeaders[3].align}>
						{data.storedDosages}
					</StyledTableCell>
				</>
			)}
			{tableName === "history" ? (
				<>
					<StyledTableCell align={tableFormat.tableHeaders[4].align}>
						<Chip label={data.action} size="small" />
					</StyledTableCell>
					<StyledTableCell align={tableFormat.tableHeaders[5].align}>
						{formatDistance(new Date(data.createdAt), new Date(), {
							addSuffix: true,
						})}
					</StyledTableCell>
				</>
			) : (
				<>
					{tableName === "receiver" && (
						<StyledTableCell align={tableFormat.tableHeaders[4].align}>
							{data.count}
						</StyledTableCell>
					)}
					<StyledTableCell align={tableFormat.tableHeaders[5].align}>
						<Button
							disableElevation
							sx={{
								background: "#ef4d4d",
								color: "white",
								fontSize: "10.5px",
								borderRadius: "50px",
								marginLeft: "auto",
								"&:hover": {
									background: "red",
								},
							}}
							size="small"
							variant="contained"
							onClick={() => handleUserRequest(data.user?.name)}
						>
							Block
						</Button>
					</StyledTableCell>
				</>
			)}
		</StyledTableRow>
	);
};

export default TableRowContent;
