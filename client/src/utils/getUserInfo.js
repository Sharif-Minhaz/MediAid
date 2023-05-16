import Cookies from "js-cookie";
import { decryptCookie } from "./decryptCookie";

export const getUserInfo = () => {
	const uinfo = Cookies.get("uinfo");

	return uinfo ? decryptCookie(uinfo) : {};
};
