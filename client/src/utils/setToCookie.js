import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export const setToCookie = (key, content) => {
	const secretKey = import.meta.env.VITE_CRYPTO_KEY;

	const contentJson = JSON.stringify(content);
	const encryptedContent = CryptoJS.AES.encrypt(contentJson, secretKey).toString();

	Cookies.set(key, encryptedContent, { expires: 0.25 });
};
