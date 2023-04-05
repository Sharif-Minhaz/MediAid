import Cookies from "js-cookie";
import { decryptCookie } from "./decryptCookie";

export const getUserInfo = () => {
	const uinfo = Cookies.get("uinfo");

	let user;

	if (uinfo) {
		user = decryptCookie(uinfo);

		return user;
	} else {
		return null;
	}
};
