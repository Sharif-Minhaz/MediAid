import { Outlet } from "react-router-dom";
import CommonLayout from "./CommonLayout";

const Layout = () => {
	return (
		<CommonLayout>
			<Outlet />
		</CommonLayout>
	);
};

export default Layout;
