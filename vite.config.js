import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import Generouted from "@generouted/react-router/plugin"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), Generouted()],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
