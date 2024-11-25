import { useLocalStorage } from "@uidotdev/usehooks"
import { Card, CardContent, CardHeader } from "../ui/card"
import { HeartDisplay } from "./HeartDisplay"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
	const [isFavorite, setIsFavorite] = useState(false)

	const [favorites, setFavorites] = useLocalStorage("favorites", [])

	const favorite = () => {
		if (isFavorite) {
			const updatedFavorites = favorites.filter(
				(favorite) => favorite.id !== product.id
			)

			setFavorites(updatedFavorites)
		} else {
			setFavorites([...favorites, product])
		}

		setIsFavorite(!isFavorite)
	}

	useEffect(() => {
		setFavorites(favorites.find((p) => p.id == product.id))
	}, [])

	if (!product) return <>ERROR</>

	return (
		<Link to={`product/${product.id}`}>
			<Card className="max-w-[350px]">
				<CardHeader className="relative">
					<HeartDisplay
						className="absolute right-5 top-5 text-xl p-2 rounded-full bg-white"
						favorited={isFavorite}
						onFavorite={favorite}
					/>
					<img
						src={product.images[0]}
						className="h-72 object-contain"
					/>
				</CardHeader>
				<CardContent className="space-y-2">
					<div className="flex justify-between items-center">
						<h2>{product.name}</h2>
						<p className="text-sm font-light">${product.price}</p>
					</div>
					<p className="text-xs line-clamp-2">
						{product.description}
					</p>
				</CardContent>
			</Card>
		</Link>
	)
}
