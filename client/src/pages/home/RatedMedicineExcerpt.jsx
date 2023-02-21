import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { IconClipboardHeart, IconStarHalfFilled } from "@tabler/icons-react";

const RatedMedicineExcerpt = ({}) => {
	return (
		<Card variant="outlined">
			<CardMedia sx={{ height: 140 }} image="/images/esoral-mups.png" title="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Esoral Mups
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Esomeprazole is a proton pump inhibitor that suppresses gastric acid secretion
					by specific inhibition of the H+/K+ ATPa...
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
				<Stack rowGap="2px">
					<Typography fontSize="12px">User Rating</Typography>
					<Box component="div" display="flex" alignItems="center" columnGap="6px">
						<IconStarHalfFilled style={{ color: "#5e35b1" }} size={19} />
						<span style={{ marginBottom: "-4px", color: "#5e35b1" }}>4.8</span>
					</Box>
				</Stack>
				<Button
					endIcon={<IconClipboardHeart size={18} />}
					sx={{ color: "whitesmoke" }}
					variant="contained"
					size="small"
				>
					Apply
				</Button>
			</CardActions>
		</Card>
	);
};

export default RatedMedicineExcerpt;
