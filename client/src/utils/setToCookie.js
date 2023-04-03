import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export const setToCookie = (content) => {
	const key = import.meta.env.VITE_CRYPTO_KEY;

	const contentJson = JSON.stringify(content);
	const encryptedContent = CryptoJS.AES.encrypt(contentJson, key).toString();

	Cookies.set("uinfo", encryptedContent, { expires: 0.25 });
};
