import { Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import FaqAccordions from "./FaqAccordions";

const faqData = [
	{
		question: "Why is medicine donation important?",
		answer: "Medicine donation is important because it helps people who cannot afford to buy medicine, particularly in low-income countries where access to healthcare is limited. It can also be helpful in emergency situations, such as natural disasters or conflict, when access to medicine may be disrupted.",
	},
	{
		question: "What are the benefits of medicine donation?",
		answer: "The benefits of medicine donation include improving access to healthcare, helping to reduce the spread of disease, and reducing suffering among people who cannot afford to buy medicine. It can also help to build goodwill and relationships between countries and organizations.",
	},
	{
		question: "Who can donate medicine?",
		answer: "Individuals, healthcare facilities, pharmaceutical companies, and aid organizations can all donate medicine. However, it is important to ensure that the medicine is safe, not expired, and meets the quality standards of the recipient country.",
	},
	{
		question: "What types of medicine can be donated?",
		answer: "Most types of medicine can be donated, including prescription and over-the-counter medication. However, it is important to ensure that the medicine is not expired, is in good condition, and is appropriate for the recipient country's needs.",
	},
	{
		question: "How can medicine be donated?",
		answer: "Medicine can be donated through various channels, including non-governmental organizations (NGOs), aid organizations, and government agencies. It can also be donated directly to hospitals and clinics.",
	},
	{
		question: "What are the risks of medicine donation?",
		answer: "The risks of medicine donation include the potential for expired or counterfeit medicine, which can be harmful to the recipient. It is important to ensure that the medicine being donated is safe, not expired, and meets the quality standards of the recipient country.",
	},
	{
		question: "How can the quality of donated medicine be ensured?",
		answer: "The quality of donated medicine can be ensured through rigorous screening and testing processes. This can include checking the expiration dates, verifying that the medicine is not counterfeit, and ensuring that it meets the quality standards of the recipient country.",
	},
	{
		question: "How can I get involved in medicine donation?",
		answer: "You can get involved in medicine donation by donating medicine yourself or by volunteering with an organization that provides medicine donation services. It is important to do your research and ensure that the organization you are working with has a good reputation and follows ethical practices.",
	},
	{
		question: "Will I get anything in return?",
		answer: "The information will add to your profile but, you will never get money in return.",
	},
];

const FAQ = () => {
	return (
		<Paper component="section">
			<SectionTitle text="FAQ" />
			<FaqAccordions faqData={faqData} />
		</Paper>
	);
};

export default FAQ;
