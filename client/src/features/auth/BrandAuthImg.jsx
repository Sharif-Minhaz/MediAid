import { Link } from "react-router-dom";

const BrandAuthImg = ({ height = 30, disableMargin = false }) => {
	return (
		<Link to="/">
			<img
				src="/images/cover.png"
				height={height}
				style={{ margin: disableMargin ? 0 : "7px 0px 28px" }}
			/>
		</Link>
	);
};

export default BrandAuthImg;
