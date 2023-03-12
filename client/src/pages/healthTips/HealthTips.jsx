import { Box, Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import HealthTipExcerpt from "./HealthTipExcerpt";

const healthTips = [
	{
		id: 1,
		title: "Base your meals on higher fibre starchy carbohydrates",
		description:
			"Starchy carbohydrates should make up just over a third of the food you eat. They include potatoes, bread, rice, pasta and cereals. Choose higher fibre or wholegrain varieties, such as wholewheat pasta, brown rice or potatoes with their skins on. They contain more fibre than white or refined starchy carbohydrates and can help you feel full for longer. Try to include at least 1 starchy food with each main meal. Some people think starchy foods are fattening, but gram for gram the carbohydrate they contain provides fewer than half the calories of fat. Keep an eye on the fats you add when you're cooking or serving these types of foods because that's what increases the calorie content – for example, oil on chips, butter on bread and creamy sauces on pasta.",
	},
	{
		id: 2,
		title: "Eat lots of fruit and veg",
		description:
			"It's recommended that you eat at least 5 portions of a variety of fruit and veg every day. They can be fresh, frozen, canned, dried or juiced. Getting your 5 A Day is easier than it sounds. Why not chop a banana over your breakfast cereal, or swap your usual mid-morning snack for a piece of fresh fruit? A portion of fresh, canned or frozen fruit and vegetables is 80g. A portion of dried fruit (which should be kept to mealtimes) is 30g. A 150ml glass of fruit juice, vegetable juice or smoothie also counts as 1 portion, but limit the amount you have to no more than 1 glass a day as these drinks are sugary and can damage your teeth.",
	},
	{
		id: 3,
		title: "Eat more fish, including a portion of oily fish",
		description:
			"Fish is a good source of protein and contains many vitamins and minerals. Aim to eat at least 2 portions of fish a week, including at least 1 portion of oily fish. Oily fish are high in omega-3 fats, which may help prevent heart disease. Oily fish include: salmon trout herring sardines pilchards mackerel Non-oily fish include: haddock plaice coley cod tuna skate hake You can choose from fresh, frozen and canned, but remember that canned and smoked fish can be high in salt. Most people should be eating more fish, but there are recommended limits for some types of fish.",
	},
	{
		id: 4,
		title: "Cut down on saturated fat and sugar",
		description:
			"Saturated fat You need some fat in your diet, but it's important to pay attention to the amount and type of fat you're eating. There are 2 main types of fat: saturated and unsaturated. Too much saturated fat can increase the amount of cholesterol in the blood, which increases your risk of developing heart disease. On average, men should have no more than 30g of saturated fat a day. On average, women should have no more than 20g of saturated fat a day. Children under the age of 11 should have less saturated fat than adults, but a low-fat diet is not suitable for children under 5. Saturated fat is found in many foods, such as: fatty cuts of meat sausages butter hard cheese cream cakes biscuits lard pies Try to eat less saturated fat and choose foods that contain unsaturated fats instead, such as vegetable oils and spreads, oily fish and avocados. For a healthier choice, use a small amount of vegetable or olive oil, or reduced-fat spread instead of butter, lard or ghee. When you're having meat, choose lean cuts and cut off any visible fat. All types of fat are high in energy, so they should only be eaten in small amounts.",
	},
	{
		id: 5,
		title: "Eat less salt",
		description:
			"No more than 6g a day for adults Eating too much salt can raise your blood pressure. People with high blood pressure are more likely to develop heart disease or have a stroke. Even if you do not add salt to your food, you may still be eating too much. About three-quarters of the salt you eat is already in the food when you buy it, such as breakfast cereals, soups, breads and sauces. Use food labels to help you cut down. More than 1.5g of salt per 100g means the food is high in salt. Adults and children aged 11 and over should eat no more than 6g of salt (about a teaspoonful) a day. Younger children should have even less.",
	},
	{
		id: 6,
		title: "Get active and be a healthy weight",
		description:
			"As well as eating healthily, regular exercise may help reduce your risk of getting serious health conditions. It's also important for your overall health and wellbeing. Read more about the benefits of exercise and physical activity guidelines for adults. Being overweight or obese can lead to health conditions, such as type 2 diabetes, certain cancers, heart disease and stroke. Being underweight could also affect your health. Most adults need to lose weight by eating fewer calories. If you're trying to lose weight, aim to eat less and be more active. Eating a healthy, balanced diet can help you maintain a healthy weight. Check whether you're a healthy weight by using the BMI healthy weight calculator. Lose weight with the NHS weight loss plan, a 12-week weight loss guide that combines advice on healthier eating and physical activity. If you're underweight, see underweight adults. If you're worried about your weight, ask your GP or a dietitian for advice.",
	},
	{
		id: 7,
		title: "Do not get thirsty",
		description:
			"You need to drink plenty of fluids to stop you getting dehydrated. The government recommends drinking 6 to 8 glasses every day. This is in addition to the fluid you get from the food you eat. All non-alcoholic drinks count, but water, lower fat milk and lower sugar drinks, including tea and coffee, are healthier choices. Try to avoid sugary soft and fizzy drinks, as they're high in calories. They're also bad for your teeth. Even unsweetened fruit juice and smoothies are high in free sugar. Your combined total of drinks from fruit juice, vegetable juice and smoothies should not be more than 150ml a day, which is a small glass. Remember to drink more fluids during hot weather or while exercising.",
	},
	{
		id: 8,
		title: "Do not skip breakfast",
		description:
			"Some people skip breakfast because they think it'll help them lose weight. But a healthy breakfast high in fibre and low in fat, sugar and salt can form part of a balanced diet, and can help you get the nutrients you need for good health. A wholegrain lower sugar cereal with semi-skimmed milk and fruit sliced over the top is a tasty and healthier breakfast.",
	},
];

const HealthTips = () => {
	return (
		<Paper component="section" sx={{ mt: "3px" }}>
			<SectionTitle text="Health Tips for You" button={{text: "ADD", link: "/health-tips/add"}} />
			<Box>
				{healthTips.map((healthTip) => (
					<HealthTipExcerpt key={healthTip.id} healthTip={healthTip} />
				))}
			</Box>
		</Paper>
	);
};

export default HealthTips;
