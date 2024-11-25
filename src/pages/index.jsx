import { ProductCard } from "@/components/Misc/ProductCard"

export default function Index() {
	return (
		<section className="max-w-[1080px] mx-auto">
			<h1 className="text-3xl">Dine favoritter</h1>
			<ProductCard />
		</section>
	)
}
