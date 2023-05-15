import { useEffect } from "react";
import BrandAuthImg from "./BrandAuthImg";
import { CssBaseline, Container, Paper } from "@mui/material";

const AuthWrapper = ({ children }) => {
	// change the global background color
	useEffect(() => {
		document.body.style.backgroundColor = "#eef2f6";
		// remove the global style when the component unmount
		return () => {
			document.body.style.backgroundColor = null;
		};
	}, []);

	return (
		<Container component="main" sx={{ width: { xs: "100%", sm: "520px" } }}>
			<CssBaseline />
			<Paper
				sx={{
					marginBlock: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					p: 3,
				}}
			>
				{/* brand information component */}
				<BrandAuthImg />
				{children}
			</Paper>
		</Container>
	);
};

export default AuthWrapper;
