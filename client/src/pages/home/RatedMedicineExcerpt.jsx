import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { IconClipboardHeart, IconStarHalfFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const RatedMedicineExcerpt = ({ medicine }) => {
	const navigate = useNavigate();

	return (
		<Card variant="outlined">
			<CardActionArea onClick={() => navigate(`/medicines/${medicine.id}`)}>
				<CardMedia sx={{ height: 160 }} image={medicine.image} title={medicine.name} />
				<Divider />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{medicine.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{medicine.description}...
					</Typography>
				</CardContent>
			</CardActionArea>
			<Divider />
			<CardActions sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
				<Stack rowGap="2px">
					<Typography fontSize="12px" sx={{ color: "primary.contrastText" }}>
						User Rating
					</Typography>
					<Box component="div" display="flex" alignItems="center" columnGap="6px">
						<IconStarHalfFilled style={{ color: "#5e35b1" }} size={19} />
						<span style={{ marginBottom: "-4px", color: "#5e35b1" }}>
							{medicine.rating}
						</span>
					</Box>
				</Stack>
				<Button
					endIcon={<IconClipboardHeart size={18} />}
					sx={{ color: "whitesmoke" }}
					variant="contained"
					size="small"
					disableElevation
					onClick={() => navigate(`/apply/${medicine.id}`)}
				>
					Apply
				</Button>
			</CardActions>
		</Card>
	);
};

export default RatedMedicineExcerpt;
