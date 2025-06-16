import { productsData } from "@/utils/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductFeatures from "./_components/product-features";
import ProductGallery from "./_components/product-gallery";
import ProductPurchase from "./_components/product-purchase";
import ProductRecommended from "./_components/product-recommended";

interface PageProps {
	params: Promise<{
		category: string;
		productId: string;
	}>;
}
export default async function ProductDetailsPage({ params }: PageProps) {
	const { category, productId } = await params;

	const product = productsData.find(
		(p) => p.category === category && p.slug === productId
	);

	const recommendedProducts = productsData
		.filter((p) => p.category === category && p.slug !== productId)
		.slice(0, 3);

	if (!product) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-white">
			<div className="mx-auto max-w-6xl px-6 py-8">
				<div className="flex gap-2">
					<ChevronLeft size={18} color="#D87D4A" />
					<Link
						href={`/products/${category}`}
						className="mb-12 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700"
					>
						Go Back
					</Link>
				</div>

				<ProductPurchase product={product} />

				<ProductFeatures
					features={product.features}
					includes={product.includes}
				/>

				{product.gallery && (
					<ProductGallery
						topLeftImage={product.gallery.topLeft}
						bottomLeftImage={product.gallery.bottomLeft}
						rightImage={product.gallery.right}
					/>
				)}

				{recommendedProducts.length > 0 && (
					<ProductRecommended products={recommendedProducts} />
				)}
			</div>
		</div>
	);
}
