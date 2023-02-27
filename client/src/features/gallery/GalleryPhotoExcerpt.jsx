import { Box, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { IconInfoCircleFilled } from "@tabler/icons-react";

const GalleryPhotoExcerpt = ({ item }) => {
	// TODO: description work on pending
	return (
		<ImageListItem
			sx={{
				overflow: "hidden",
				borderRadius: "4px",
				"&:hover img": { transform: "scale(1.1)" },
				"&:hover .img-description-popover": { top: 0 },
			}}
		>
			<Box
				className="img-description-popover"
				component="div"
				sx={{
					position: "absolute",
					width: "100%",
					color: "#ffffffd9",
					fontSize: "16px",
					background: "rgb(0 0 0 / 30%)",
					zIndex: 999,
					transition: "0.5s all",
					p: "17px 20px",
					height: "calc(100% - 60px)",
					top: "-300px",
				}}
			>
				{item.description}
			</Box>
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
