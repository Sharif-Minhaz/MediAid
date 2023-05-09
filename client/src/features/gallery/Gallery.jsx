import { ImageList, Box, useMediaQuery } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import GalleryPhotoExcerpt from "./GalleryPhotoExcerpt";
import { useViewAllGalleryImgQuery } from "./gallerySlice";

const Gallery = () => {
	const smallScreen = useMediaQuery("(max-width: 600px)");
	const responseInfo = useViewAllGalleryImgQuery();

	return (
		<Box component="div">
			<SectionTitle text="Our Gallery" />
			<ImageList
				sx={{ p: 2, overflow: "hidden", minHeight: "600px" }}
				cols={smallScreen ? 1 : 2}
			>
				{responseInfo.data?.galleryImage.map((item) => (
					<GalleryPhotoExcerpt key={item._id} item={item} />
				))}
			</ImageList>
		</Box>
	);
};

export default Gallery;
