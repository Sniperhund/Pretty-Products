import { Link } from "react-router-dom"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavLink } from "./NavLink"
import { ThemeSelect } from "@/components/ThemeSelect"

export const Nav = () => {
	return (
		<section className="border-b w-full px-4 mb-12">
			<NavigationMenu className="max-w-[1080px] mx-auto">
				<NavigationMenuList className="py-4 gap-4 flex">
					<NavLink to="/" className="text-xl opacity-100">
						Pretty Products
					</NavLink>
					<NavLink to="/products">Products</NavLink>
					<NavLink to="/about">About us</NavLink>
				</NavigationMenuList>
				<ThemeSelect className="!ml-auto" />
			</NavigationMenu>
		</section>
	)
}
