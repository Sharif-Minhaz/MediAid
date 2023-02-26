import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { IconInfoCircleFilled } from "@tabler/icons-react";

const GalleryPhotoExcerpt = ({ item }) => {
	return (
		<ImageListItem
			sx={{
				overflow: "hidden",
				borderRadius: "4px",
				"&:hover img": { transform: "scale(1.1)" },
			}}
		>
			<img
				src={item.img}
				srcSet={item.img}
				alt={item.title}
				loading="lazy"
				style={{ borderRadius: 4, transition: "0.4s all" }}
			/>
			<ImageListItemBar
				className="description-bar"
				sx={{
					borderBottomLeftRadius: 4,
					borderBottomRightRadius: 4,
					transition: "0.4s all",
				}}
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
