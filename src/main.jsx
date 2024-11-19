import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@/styles/global.css"
import { Button } from "@/components/ui/button"
import { Routes } from "@generouted/react-router"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Routes />
	</StrictMode>
)
