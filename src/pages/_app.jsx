import { Outlet } from "react-router-dom"
import { ThemeProvider } from "@/providers/ThemeProvider"

export default function App() {
	return (
		<ThemeProvider>
			<Outlet />
		</ThemeProvider>
	)
}
