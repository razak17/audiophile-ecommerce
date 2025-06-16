import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductRecommended = ({ products }: { products: Product[] }) => {
	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<h2 className="mb-16 text-center text-2xl font-bold tracking-wider uppercase md:text-3xl">
				You May Also like
			</h2>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
				{products.map((product) => {
					return (
						<div key={product.id} className="text-center">
							<div className="mb-8 flex h-80 items-center justify-center overflow-hidden rounded-lg bg-gray-100 p-12">
								<Image
									src={product.image}
									alt={product.name}
									className="object-contain"
									width={160}
									height={170}
								/>
							</div>

							<h3 className="mb-8 text-lg font-bold tracking-wider uppercase md:text-xl">
								{product.name}
							</h3>

							<Link href={`/products/${product.category}/${product.slug}`}>
								<span className="bg-yellow-600 px-8 py-4 font-bold text-white uppercase hover:bg-yellow-500">
									{product.cta ?? "See Product"}
								</span>
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProductRecommended;
