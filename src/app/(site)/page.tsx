import Banner from "@/components/banner";
import { mainShowcaseProduct, otherProductShowcase } from "@/utils/data";
import ProductCategories from "../../components/product-categories";
import Hero from "./_components/hero";
import MainShowcase from "./_components/main-showcase";
import OtherShowcase from "./_components/other-showcase";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<ProductCategories />
			<MainShowcase product={mainShowcaseProduct} />
			<OtherShowcase products={otherProductShowcase} />
			<Banner />
		</div>
	);
}
