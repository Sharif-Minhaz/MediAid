import { Box} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomIconButton from "../../theme/customComponent/CustomIconButton";
import SearchIcon from "@mui/icons-material/Search";

const DrawerHeaderContents = ({ handleShowFullSearch, handleLeftDrawerToggle }) => {
	return (
		<>
			<Box sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}>
				<img src="/images/default.png" alt="brand-logo" height="27" />
			</Box>
			<CustomIconButton onClick={handleLeftDrawerToggle}>
				<MenuIcon fontSize="small" />
			</CustomIconButton>
			<CustomIconButton
				sx={{
					display: { xs: "flex", sm: "flex", md: "none" },
				}}
				onClick={handleShowFullSearch}
			>
				<SearchIcon fontSize="small" />
			</CustomIconButton>
		</>
	);
};

export default DrawerHeaderContents;
