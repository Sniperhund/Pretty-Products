import { Card, CardContent, CardHeader } from "../ui/card"
import { HeartDisplay } from "./HeartDisplay"
import { useState } from "react"

/**
 * @typedef Product
 * @type {object}
 * @property {number} id - The unique identifier of the product.
 * @property {string} title - The title of the product.
 * @property {string} description - The description of the product.
 * @property {string} price - The price of the product.
 * @property {string} image - The image URL of the product.
 */

export const ProductCard = ({ product }) => {
	// TODO: Get if product is liked by user in local storage
	const [isFavorite, setIsFavorite] = useState(false)

	return (
		<Card className="max-w-[350px]">
			<CardHeader className="relative">
				<HeartDisplay
					className="absolute right-5 top-5 text-xl p-2 rounded-full bg-white"
					favorited={isFavorite}
				/>
				<img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png" />
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="flex justify-between items-center">
					<h2>Essence Mascara Lash Princess</h2>
					<p className="text-sm font-light">$9.99</p>
				</div>
				<p className="text-xs line-clamp-2">
					The Essence Mascara Lash Princess is a popular mascara known
					for its volumizing and lengthening effects. Achieve dramatic
					lashes with this long-lasting and cruelty-free formula.
				</p>
			</CardContent>
		</Card>
	)
}
