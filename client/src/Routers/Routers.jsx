import { Navigate, Route, Routes } from "react-router-dom";
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
import Donate from "../pages/Donate";
import Pending from "../pages/pending/Pending";
import BestDonors from "../pages/bestDonors/BestDonors";
import History from "../pages/History";
import ReceiverList from "../pages/ReceiverList";
import DonorList from "../pages/DonorList";
import PathName from "../components/PathName";
import Protected from "./Protected";
import Admin from "./Admin";
import AlreadyLoggedIn from "./AlreadyLoggedIn";

const Routers = () => {
	return (
		<PathName>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="dashboard"
						element={
							<Admin>
								<Dashboard />
							</Admin>
						}
					/>
					<Route path="medicines">
						<Route index element={<MedicinesPage />} />
						<Route path=":medicineId" element={<DetailsMedicine />} />
						<Route
							path="edit/:medicineId"
							element={
								<Protected>
									<Admin>
										<AddMedicine />
									</Admin>
								</Protected>
							}
						/>
						<Route
							path="apply/:medicineId"
							element={
								<Protected>
									<MedicineApply />
								</Protected>
							}
						/>
						<Route path="search" element={<SearchResultPage />} />
					</Route>

					<Route path="profile">
						<Route
							index
							element={
								<Protected>
									<Profile />
								</Protected>
							}
						/>
						<Route
							path="edit"
							element={
								<Protected>
									<EditProfile />
								</Protected>
							}
						/>
					</Route>

					<Route
						path="medicine/add"
						element={
							<Protected>
								<Admin>
									<AddMedicine />
								</Admin>
							</Protected>
						}
					/>

					<Route path="gallery" element={<GalleryPage />} />
					<Route
						path="gallery-photo/add"
						element={
							<Protected>
								<Admin>
									<AddPhotoPage />
								</Admin>
							</Protected>
						}
					/>

					<Route path="health-tips">
						<Route index element={<HealthTips />} />
						<Route
							path="add"
							element={
								<Protected>
									<Admin>
										<AddHealthTip />
									</Admin>
								</Protected>
							}
						/>
						<Route
							path="edit/:healthTipId"
							element={
								<Protected>
									<Admin>
										<AddHealthTip />
									</Admin>
								</Protected>
							}
						/>
					</Route>

					<Route
						path="donate"
						element={
							<Protected>
								<Donate />
							</Protected>
						}
					/>
					<Route
						path="history"
						element={
							<Protected>
								<Admin>
									<History />
								</Admin>
							</Protected>
						}
					/>
					<Route
						path="donor-list"
						element={
							<Protected>
								<Admin>
									<DonorList />
								</Admin>
							</Protected>
						}
					/>
					<Route
						path="receiver-list"
						element={
							<Protected>
								<Admin>
									<ReceiverList />
								</Admin>
							</Protected>
						}
					/>
					<Route path="best-donors" element={<BestDonors />} />
					<Route
						path="pending"
						element={
							<Protected>
								<Admin>
									<Pending />
								</Admin>
							</Protected>
						}
					/>
					<Route path="faq" element={<FAQ />} />
					<Route path="contact" element={<Contact />} />
					<Route path="about" element={<About />} />
				</Route>

				<Route
					path="/login"
					element={
						<AlreadyLoggedIn>
							<Login />
						</AlreadyLoggedIn>
					}
				/>
				<Route
					path="/register"
					element={
						<AlreadyLoggedIn>
							<Register />
						</AlreadyLoggedIn>
					}
				/>

				<Route
					path="/reset-password"
					element={
						<Protected>
							<ResetPassword />
						</Protected>
					}
				/>
				<Route path="*" element={<NotFound404 />} />
			</Routes>
		</PathName>
	);
};

export default Routers;
