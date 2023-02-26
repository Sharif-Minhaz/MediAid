import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFound404 from "../pages/NotFound404/NotFound404";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import ResetPassword from "../features/auth/ResetPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import MedicinesPage from "../pages/medicines/MedicinesPage";
import DetailsMedicine from "../components/medicine/DetailsMedicine";
import AddMedicine from "./../pages/AddMedicine";
import GalleryPage from "../pages/gallery/GalleryPage";
import AddPhotoPage from "../features/gallery/AddPhotoPage";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				{/* <Route path="dashboard" element={<Dashboard />} /> */}

				<Route path="medicines">
					<Route index element={<MedicinesPage />} />
					<Route path=":medicineId" element={<DetailsMedicine />} />
					<Route path="edit/:medicineId" element={<AddMedicine />} />
				</Route>

				<Route path="/medicine/add" element={<AddMedicine />} />

				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/gallery-photo/add" element={<AddPhotoPage />} />
			</Route>

			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
};

export default Routers;
