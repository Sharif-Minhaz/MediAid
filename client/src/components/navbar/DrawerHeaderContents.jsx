import { Box} from "@mui/material";
import { IconMenu2 as MenuIcon } from "@tabler/icons-react";
import CustomIconButton from "../../theme/customComponent/CustomIconButton";
import { IconSearch as SearchIcon } from "@tabler/icons-react";

const DrawerHeaderContents = ({ handleShowFullSearch, handleLeftDrawerToggle }) => {
	return (
		<>
			<Box sx={{ display: { xs: "none", sm: "none", md: "inline-block" } }}>
				<img src="/images/default.png" alt="brand-logo" height="27" />
			</Box>
			<CustomIconButton onClick={handleLeftDrawerToggle}>
				<MenuIcon size={22} />
			</CustomIconButton>
			<CustomIconButton
				sx={{
					display: { xs: "flex", sm: "flex", md: "none" },
				}}
				onClick={handleShowFullSearch}
			>
				<SearchIcon size={22} />
			</CustomIconButton>
		</>
	);
};

export default DrawerHeaderContents;
