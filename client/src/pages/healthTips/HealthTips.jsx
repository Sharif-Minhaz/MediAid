import { Box, Paper } from "@mui/material";
import SectionTitle from "../../components/SectionTitle";
import HealthTipExcerpt from "./HealthTipExcerpt";
import { useViewAllHealthTipsQuery } from "../../features/healthTipsSlice/healthTipsSlice";
import HealthTipSkeleton from "./HealthTipSkeleton";

const HealthTips = () => {
	const responseInfo = useViewAllHealthTipsQuery();

	return (
		<Paper component="section">
			<SectionTitle
				text="Health Tips for You"
				button={{ text: "ADD", link: "/health-tips/add" }}
			/>
			<Box>
				{responseInfo.isLoading ? (
					<HealthTipSkeleton />
				) : (
					<>
						{responseInfo.data?.healthTips.map((healthTip, index) => (
							<HealthTipExcerpt
								key={healthTip._id}
								index={index}
								healthTip={healthTip}
							/>
						))}
					</>
				)}
			</Box>
		</Paper>
	);
};

export default HealthTips;
