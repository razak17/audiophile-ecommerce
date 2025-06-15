import Hero from "./_components/hero";
import ProductCategories from "./_components/product-categories";
import Showcase from "./_components/showcase";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<ProductCategories />
      <Showcase />
		</div>
	);
}
