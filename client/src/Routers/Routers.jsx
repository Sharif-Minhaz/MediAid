import { Route, Routes } from "react-router-dom";
import MedicineExcerpt from "../features/medicines/MedicineExcerpt";
import MedicinesList from "../features/medicines/MedicinesList";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404/NotFound404";
import Gallery from "../features/gallery/Gallery";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ResetPassword from "../features/auth/ResetPassword";
import Dashboard from "../pages/Dashboard";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				{/* <Route path="dashboard" element={<Dashboard />} /> */}

				{/* <Route path="medicines">
					<Route index element={<MedicinesList />} />
					<Route path=":medicineId" element={<MedicineExcerpt />} />
				</Route> */}

				{/* <Route path="gallery">
					<Route index element={<Gallery />} />
				</Route> */}
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
};

export default Routers;
