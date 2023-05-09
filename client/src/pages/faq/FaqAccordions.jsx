import { useState } from "react";
import { Box } from "@mui/material";
import FaqAccordionsExcerpt from "./FaqAccordionsExcerpt";

export default function FaqAccordions({ faqData }) {
	const [expanded, setExpanded] = useState("panel0");

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<Box sx={{ p: { xs: "16px", sm: "20px" } }}>
			{faqData.map((faq, i) => (
				<FaqAccordionsExcerpt
					key={i}
					panel={`panel${i}`}
					expanded={expanded}
					handleChange={handleChange}
					faq={faq}
				/>
			))}
		</Box>
	);
}
