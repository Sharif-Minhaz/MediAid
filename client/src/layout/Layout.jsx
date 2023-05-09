import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import CommonLayout from "./CommonLayout";

const Layout = () => {
	return (
		<CommonLayout>
			<Outlet />
			<Footer />
		</CommonLayout>
	);
};

export default Layout;