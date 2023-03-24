import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <Box sx={{ mt: "5px" }}>{props.children}</Box>;
};

export default ScrollToTop;
