import { Box, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { IconInfoCircleFilled } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryPhotoExcerpt = ({ item }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	return (
		<ImageListItem
			className={`${inView ? "fade-in visible" : "fade-in"}`}
			ref={ref}
			sx={{
				overflow: "hidden",
				borderRadius: "4px",
				"&:hover img": { transform: "scale(1.1)" },
				"&:hover .img-description-popover": {
					top: 0,
				},
			}}
		>
			<Box
				className="img-description-popover"
				component="div"
				sx={{
					position: "absolute",
					width: "100%",
					color: "#ffffffd9",
					fontSize: { xs: "12px", sm: "16px" },
					background: "rgb(0 0 0 / 30%)",
					zIndex: 999,
					transition: "0.5s all",
					p: { xs: "10px", sm: "17px 20px" },
					height: "calc(100% - 60px)",
					top: "-300px",
				}}
			>
				{item.description}
			</Box>
			<LazyLoadImage
				style={{ borderRadius: 4, transition: "0.4s all", objectFit: "cover" }}
				height="320px"
				width="100%"
				effect="blur"
				src={item.galleryImage}
				srcSet={item.galleryImage}
				alt={item.galleryImageTitle}
			/>
			<ImageListItemBar
				className="description-bar"
				sx={{ transition: "0.4s all" }}
				title={item.galleryImageTitle}
				subtitle={item.authorName}
				actionIcon={
					<IconButton
						sx={{ color: "rgba(255, 255, 255, 0.54)" }}
						aria-label={`info about ${item.galleryImageTitle}`}
					>
						<IconInfoCircleFilled />
					</IconButton>
				}
			/>
		</ImageListItem>
	);
};

export default GalleryPhotoExcerpt;
