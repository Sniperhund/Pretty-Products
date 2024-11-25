import { Link } from "react-router-dom"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"

export const NavLink = ({ to, children, className }) => {
	return (
		<NavigationMenuItem>
			<Link to={to} className={`${className} opacity-75`}>
				{children}
			</Link>
		</NavigationMenuItem>
	)
}
