import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useState } from "react";
import PendingElement from "./PendingElement";
import {
	usePendingApplicationQuery,
	usePendingDonationsQuery,
} from "../../features/pending/pendingSlice";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<Box
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box component="div" className="" sx={{ p: { xs: "16px", sm: "20px" } }}>
					{children}
				</Box>
			)}
		</Box>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
};

const PendingTabs = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const donationInfo = usePendingDonationsQuery();
	const receiverInfo = usePendingApplicationQuery();

	return (
		<Box sx={{ width: "100%" }}>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					width: "calc(100% - 52px)",
					mx: "auto",
				}}
			>
				<Tabs value={value} onChange={handleChange} aria-label="tabs for pending elements">
					<Tab label="Donation" {...a11yProps(0)} />
					<Tab label="Receive" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				{donationInfo.isLoading && (
					<Typography color="#8d8d8d" textAlign="center" fontStyle="italic" p={2}>
						Loading...
					</Typography>
				)}
				{donationInfo.data?.pendingDonations?.length ? (
					donationInfo.data?.pendingDonations?.map((donation) => (
						<PendingElement key={donation._id} type="donation" request={donation} />
					))
				) : (
					<Typography color="#8d8d8d" textAlign="center" fontStyle="italic" p={2}>
						Currently, no requests are available
					</Typography>
				)}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{receiverInfo.isLoading ? (
					<Typography color="#8d8d8d" textAlign="center" fontStyle="italic" p={2}>
						Loading...
					</Typography>
				) : (
					!receiverInfo.data?.applications && (
						<Typography color="#8d8d8d" textAlign="center" fontStyle="italic" p={2}>
							Currently, no requests are available
						</Typography>
					)
				)}
				{receiverInfo.data?.applications?.map((application) => (
					<PendingElement key={application._id} type="receiver" request={application} />
				))}
			</TabPanel>
		</Box>
	);
};

export default PendingTabs;
