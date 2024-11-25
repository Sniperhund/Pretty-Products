import { Outlet } from "react-router-dom"
import { ThemeProvider } from "@/providers/ThemeProvider"
import { Nav } from "@/components/Nav/Nav"
import { Footer } from "@/components/Footer/Footer"

export default function App() {
	return (
		<ThemeProvider>
			<Nav />
			<Outlet />
			<Footer />
		</ThemeProvider>
	)
}
