import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { IconInfoCircleFilled } from "@tabler/icons-react";

const GalleryPhotoExcerpt = ({ item }) => {
	return (
		<ImageListItem>
			<img
				src={`${item.img}?w=248&fit=crop&auto=format`}
				srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
				alt={item.title}
				loading="lazy"
				style={{ borderRadius: 4 }}
			/>
			<ImageListItemBar
				sx={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
				title={item.title}
				subtitle={item.author}
				actionIcon={
					<IconButton
						sx={{ color: "rgba(255, 255, 255, 0.54)" }}
						aria-label={`info about ${item.title}`}
					>
						<IconInfoCircleFilled />
					</IconButton>
				}
			/>
		</ImageListItem>
	);
};

export default GalleryPhotoExcerpt;
