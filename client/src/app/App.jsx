import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "../Routers/Routers";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routers />
			<ToastContainer position="bottom-right" autoClose={4000} />
		</ThemeProvider>
	);
}

export default App;
