import { ProductCard } from "@/components/Misc/ProductCard"
import { Products } from "@/components/Misc/Products"

export default function Index() {
	return (
		<section className="max-w-[1080px] mx-auto">
			<h1 className="text-3xl">Dine favoritter</h1>
			<Products />
		</section>
	)
}
