import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import "./App.css";
import Routers from "../Routers/Routers";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routers />
		</ThemeProvider>
	);
}

export default App;
