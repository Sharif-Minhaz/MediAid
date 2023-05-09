import { Box, Typography } from "@mui/material";
import { IconPencilMinus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const HealthTipExcerpt = ({ healthTip, index }) => {
	const navigate = useNavigate();
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<Box
			ref={ref}
			className={`${inView ? "fade-in visible" : "fade-in"}`}
			sx={{ px: 3, py: 2, "&:hover .edit-icon": { display: "inline-block" } }}
		>
			<Typography
				variant="h5"
				component="h1"
				sx={{ mb: 1.5, fontWeight: 500, color: "#4d3e60" }}
			>
				{index + 1}. {healthTip.title}{" "}
				<Typography
					component="span"
					title="Edit"
					className="edit-icon"
					sx={{ display: "none", cursor: "pointer" }}
				>
					<IconPencilMinus
						onClick={() =>
							navigate(`/health-tips/edit/${healthTip._id}`, { state: healthTip })
						}
						size={20}
					/>
				</Typography>
			</Typography>
			<Typography
				component="div"
				variant="body1"
				sx={{
					color: "#000000e3",
					"& :is(ul, ol)": {
						mx: 3,
						my: 2,
					},
					"& img": {
						borderRadius: "14px",
					},
				}}
				dangerouslySetInnerHTML={{ __html: healthTip.description }}
			/>
		</Box>
	);
};

export default HealthTipExcerpt;
