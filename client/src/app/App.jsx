import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import Login from "../features/auth/Login";
import "./App.css";
import Register from "../features/auth/Register";
import ResetPassword from "../features/auth/ResetPassword"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Login />
			{/* <Register /> */}
			{/* <ResetPassword /> */}
		</ThemeProvider>
	);
}

export default App;
