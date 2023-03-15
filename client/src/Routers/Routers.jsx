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
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/profile/EditProfile";
import FAQ from "../pages/faq/FAQ";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import HealthTips from "../pages/healthTips/HealthTips";
import AddHealthTip from "../pages/healthTips/AddHealthTip";
import MedicineApply from "../components/medicine/MedicineApply";
import SearchResultPage from "../pages/SearchResultPage";

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
					<Route path="apply/:medicineId" element={<MedicineApply />} />
				</Route>

				<Route path="profile">
					<Route index element={<Profile />} />
					<Route path="edit" element={<EditProfile />} />
				</Route>

				<Route path="medicine/add" element={<AddMedicine />} />

				<Route path="gallery" element={<GalleryPage />} />
				<Route path="gallery-photo/add" element={<AddPhotoPage />} />

				<Route path="health-tips">
					<Route index element={<HealthTips />} />
					<Route path="add" element={<AddHealthTip />} />
					<Route path="edit" element={<AddHealthTip />} />
				</Route>

				<Route path="faq" element={<FAQ />} />
				<Route path="contact" element={<Contact />} />
				<Route path="about" element={<About />} />
				<Route path="search" element={<SearchResultPage />} />
			</Route>

			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
};

export default Routers;
