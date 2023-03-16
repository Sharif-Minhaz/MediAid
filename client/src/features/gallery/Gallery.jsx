import { ImageList, Box, useMediaQuery } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import GalleryPhotoExcerpt from "./GalleryPhotoExcerpt";

const itemData = [
	{
		description:
			"Medicine donation involves the act of providing unused or unexpired medications to individuals or organizations in need. This practice can help increase access to necessary medications for those who may not be able to afford them.",
		img: "images/gallery/gallery-6.jpg",
		title: "The relief from COVID-19",
		author: "@asiful-haque",
	},
	{
		description:
			"Donating medicine is a form of philanthropy that can make a significant difference in the lives of individuals and communities. It can also prevent waste and promote sustainability by extending the lifespan of medications.",
		img: "images/gallery/gallery-2.jpg",
		title: "Cancer's Medicines",
		author: "@sharif-minhaz",
	},
	{
		description:
			"Before donating medicine, it's important to ensure that the medication is safe to use and hasn't expired. Donating through reputable organizations can help ensure that the medicine is properly handled and distributed.",
		img: "images/gallery/gallery-7.jpg",
		title: "Last Hope",
		author: "@asiful-haque",
	},
	{
		description:
			"Medicine donations can have legal and ethical considerations, such as ensuring compliance with regulations and protecting patient privacy. Consulting with healthcare professionals can help navigate these complexities.",
		img: "images/gallery/gallery-8.jpg",
		title: "Hemp Extract",
		author: "@sharif-minhaz",
	},
	{
		description:
			"It's also important to consider the cultural context when donating medicine to international organizations. Partnering with local healthcare providers can help ensure that the donation is appropriate and effective.",
		img: "images/gallery/gallery-1.jpg",
		title: "Cancer's Medi",
		author: "@sharif-minhaz",
	},
	{
		description:
			"Donating medicine can also have a positive impact on the env, as it reduces the amount of unused medication that ends up in landfills or waterways. Proper disposal of unused medication is crucial to prevent env.",
		img: "images/gallery/gallery-4.jpg",
		title: "Experimental",
		author: "@asiful-haque",
	},
	{
		description:
			"Charities can also help increase access to medicine for those in need. These donations can help cover the cost of medication, as well as support research and development of new treatments.",
		img: "images/gallery/gallery-5.jpg",
		title: "Donated Masks",
		author: "@asiful-haque",
	},
	{
		description:
			"It's important to keep records of medication donations for tax and liability purposes, as well as to track the impact of the donation and ensure proper use of the medication.",
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
			<ImageList
				sx={{ p: 2, overflow: "hidden", minHeight: "600px" }}
				cols={smallScreen ? 1 : 2}
			>
				{itemData.map((item) => (
					<GalleryPhotoExcerpt key={item.title} item={item} />
				))}
			</ImageList>
		</Box>
	);
};

export default Gallery;
