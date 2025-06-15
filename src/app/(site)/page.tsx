import Hero from "./_components/hero";
import ProductCategories from "./_components/product-categories";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<ProductCategories />
		</div>
	);
}
