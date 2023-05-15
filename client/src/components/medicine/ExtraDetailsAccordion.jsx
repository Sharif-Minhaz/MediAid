import { Box, Typography } from "@mui/material";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const details = [
	{ type: "Brand", prop: "companyName" },
	{ type: "Donated By", prop: "donorName" },
	{ type: "Donor contact", prop: "donorContact" },
];

const ExtraDetailsAccordion = ({ medicine }) => {
	const [descriptionOpen, setDescriptionOpen] = useState(true);

	const toggleDescriptionOpen = () => {
		setDescriptionOpen((prev) => !prev);
	};

	return (
		<>
			<Box
				sx={{
					background: "#f1f5f9cc",
					display: "flex",
					justifyContent: "space-between",
					borderRadius: "12px",
					padding: "10px 14px",
					cursor: "pointer",
					fontWeight: 500,
					color: "#0000008f",
					userSelect: "none",
					marginTop: 2,
					"&:hover": {
						background: "#eef1f6",
					},
				}}
				onClick={toggleDescriptionOpen}
			>
				Description
				{descriptionOpen ? <IconMinus /> : <IconPlus />}
			</Box>
			{descriptionOpen && (
				<Box sx={{ mt: 2, px: 1 }}>
					<Typography>{medicine?.medicineDescription}</Typography>
					<Box mt={2}>
						{details.map((detail) => (
							<Typography
								key={detail.prop}
								fontSize={15}
								color="#425b74"
								variant="body1"
							>
								<strong>{detail.type}</strong> {medicine?.[detail.prop]}
							</Typography>
						))}
					</Box>
				</Box>
			)}
		</>
	);
};

export default ExtraDetailsAccordion;
