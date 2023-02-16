import { Chip, Divider } from "@mui/material";
import { IconCircleKey } from "@tabler/icons-react";

const DividerWithIcon = () => {
	return (
		<Divider sx={{ width: "100%", mt: "20px", mb: "20px" }}>
			<Chip
				icon={<IconCircleKey stroke={1} />}
				label={" Authentication"}
				variant="outlined"
			/>
		</Divider>
	);
};

export default DividerWithIcon;
