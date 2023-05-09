import { defineConfig } from "vite";
// import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		nodePolyfills({ protocolImports: true }),
		// VitePWA({
		// 	workbox: {
		// 		maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
		// 	},
		// }),
	],
	build: { chunkSizeWarningLimit: 3000 },
	devOptions: {
		errorOverlay: true,
	},
	server: { port: 3000 },
});
