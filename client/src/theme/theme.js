import { createTheme } from "@mui/material/styles";
import { componentsTheme } from "./components";
import { customTheme } from "./custom";
import { paletteTheme } from "./palette";

const theme = createTheme({
	palette: paletteTheme(),
	components: componentsTheme(),
	customInput: customTheme(),
});

export default theme;
