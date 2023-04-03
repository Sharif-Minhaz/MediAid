import CryptoJS from "crypto-js";

export const decryptCookie = (ciphertext) => {
	const key = import.meta.env.VITE_CRYPTO_KEY;

	const bytes = CryptoJS.AES.decrypt(ciphertext, key);
	const originalContent = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

	return originalContent;
};
