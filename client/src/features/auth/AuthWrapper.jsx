import BrandAuthImg from "./BrandAuthImg";
import { CssBaseline, Container, Paper } from "@mui/material";

const AuthWrapper = ({ children }) => {
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
				<BrandAuthImg />
				{children}
			</Paper>
		</Container>
	);
};

export default AuthWrapper;
