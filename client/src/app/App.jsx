import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routers from "../Routers/Routers";

function App() {
	return (
		// MUI custom theme provider
		<ThemeProvider theme={theme}>
			{/* Client-side routers */}
			<Routers />
			{/* toastify container from react-toastify */}
			<ToastContainer position="bottom-right" autoClose={4000} />
		</ThemeProvider>
	);
}

export default App;
