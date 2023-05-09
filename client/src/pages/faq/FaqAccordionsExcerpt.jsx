import { styled } from "@mui/material/styles";
import {
	Accordion as MuiAccordion,
	AccordionSummary as MuiAccordionSummary,
	AccordionDetails as MuiAccordionDetails,
	Typography,
} from "@mui/material";
import { IconChevronRight } from "@tabler/icons-react";

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary expandIcon={<IconChevronRight size="0.9rem" />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#f8fafc",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FaqAccordionsExcerpt = ({ panel, expanded, handleChange, faq }) => {
	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
				<Typography>{faq.question}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{faq.answer}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default FaqAccordionsExcerpt;
