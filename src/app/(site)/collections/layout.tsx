import Banner from "@/components/banner";
import ProductCategories from "@/components/product-categories";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<ProductCategories />
			<Banner />
		</>
	);
}
