import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"

export const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((res) => {
				setProducts(res.products)
			})
			.catch((e) => {
				console.error(e)
			})
	}, [])

	return (
		<section className="grid grid-cols-3 gap-3">
			{products.map((p, i) => {
				return <ProductCard product={p} key={i} />
			})}
		</section>
	)
}
