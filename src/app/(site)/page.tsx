import ProductCategories from "../../components/product-categories";
import Hero from "./_components/hero";
import { mainShowcaseProduct, otherProductShowcase } from "@/utils/data";
import MainShowcase from "./_components/main-showcase";
import OtherShowcase from "./_components/other-showcase";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<ProductCategories />
			<MainShowcase product={mainShowcaseProduct} />
			<OtherShowcase products={otherProductShowcase} />
		</div>
	);
}
