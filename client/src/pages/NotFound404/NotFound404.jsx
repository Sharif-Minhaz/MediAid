import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./NotFound404.css";

const NotFound404 = () => {
	return (
		<Box component="div" id="notfound">
			<Box component="div" className="notfound">
				<Box component="div" className="notfound-404"></Box>
				<Typography variant="h1">404</Typography>
				<Typography variant="h2">Oops! Page Not Be Found</Typography>
				<Typography variant="body1" lineHeight="1.3" mt="12px" mb="16px">
					Sorry but the page you are looking for does not exist, have been removed, name
					changed or is temporarily unavailable
				</Typography>
				<Link to="/">Back to homepage</Link>
			</Box>
		</Box>
	);
};

export default NotFound404;
