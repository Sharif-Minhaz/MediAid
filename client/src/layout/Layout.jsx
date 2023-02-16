import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"

const Layout = () => {
	return (
		<Navbar>
			<Outlet />
		</Navbar>
	);
};

export default Layout;
