import { Container, ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import Login from "../features/login/Login";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Login />
		</ThemeProvider>
	);
}

export default App;
