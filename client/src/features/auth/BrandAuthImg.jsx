const BrandAuthImg = ({ height = 30, disableMargin = false }) => {
	return (
		<img
			src="/images/cover.png"
			height={height}
			style={{ margin: disableMargin ? 0 : "7px 0px 32px" }}
		/>
	);
};

export default BrandAuthImg;
