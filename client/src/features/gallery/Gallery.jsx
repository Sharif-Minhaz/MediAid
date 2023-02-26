import {
	ImageList,
	ImageListItem,
	ImageListItemBar,
	IconButton,
	Box,
	useMediaQuery,
} from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import GalleryPhotoExcerpt from "./GalleryPhotoExcerpt";

const itemData = [
	{
		img: "images/gallery/gallery-6.jpg",
		title: "The relief of COVID-19",
		author: "@asiful-haque",
	},
	{
		img: "images/gallery/gallery-2.jpg",
		title: "Cancer's Medicines",
		author: "@sharif-minhaz",
	},
	{
		img: "images/gallery/gallery-7.jpg",
		title: "Last Hope",
		author: "@asiful-haque",
	},
	{
		img: "images/gallery/gallery-8.jpg",
		title: "Hemp Extract",
		author: "@sharif-minhaz",
	},
	{
		img: "images/gallery/gallery-1.jpg",
		title: "Cancer's Medi",
		author: "@sharif-minhaz",
	},
	{
		img: "images/gallery/gallery-4.jpg",
		title: "Experimental",
		author: "@asiful-haque",
	},
	{
		img: "images/gallery/gallery-5.jpg",
		title: "Donated Masks",
		author: "@asiful-haque",
	},
	{
		img: "images/gallery/gallery-3.jpg",
		title: "Donation",
		author: "@sharif-minhaz",
	},
];

const Gallery = () => {
	const smallScreen = useMediaQuery("(max-width: 600px)");

	return (
		<Box component="div">
			<SectionTitle text="Our Gallery" />
			<ImageList sx={{ p: 2 }} cols={smallScreen ? 1 : 2}>
				{itemData.map((item) => (
					<GalleryPhotoExcerpt key={item.title} item={item} />
				))}
			</ImageList>
		</Box>
	);
};

export default Gallery;
