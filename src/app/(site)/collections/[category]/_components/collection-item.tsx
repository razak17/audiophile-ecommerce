import { Product } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const CollectionItem = ({
	product,
	isOdd,
}: {
	product: Product;
	isOdd: boolean;
}) => {
	return (
		<div key={product.id} className="bg-white px-6 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
					{isOdd ? (
						<>
							<div className="order-1 text-center lg:text-left">
								{product.new && (
									<p className="mb-6 text-sm font-normal tracking-[0.5em] text-yellow-600 uppercase">
										New Product
									</p>
								)}

								<h2 className="mb-6 text-4xl leading-tight font-bold text-gray-900 uppercase lg:text-5xl">
									{product.name}
								</h2>

								<p className="mx-auto mb-8 max-w-md leading-relaxed text-gray-600 lg:mx-0">
									{product.description}
								</p>

								<Link href={`/products/${product.category}/${product.slug}`}>
									<span className="bg-yellow-600 px-8 py-4 font-bold text-white uppercase hover:bg-yellow-500">
										{product.cta ?? "See Product"}
									</span>
								</Link>
							</div>
							<div className="order-2">
								<div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-gray-100">
									<Image
										src={product.image}
										alt={product.name}
										className="h-full max-h-[320px] w-full max-w-[320px] object-contain"
									/>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="order-2 lg:order-1">
								<div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-gray-100">
									<Image
										src={product.image}
										alt={product.name}
										className="h-full max-h-[320px] w-full max-w-[320px] object-contain"
									/>
								</div>
							</div>
							<div className="order-1 text-center lg:order-2 lg:text-left">
								{product.new && (
									<p className="mb-6 text-sm font-normal tracking-[0.5em] text-yellow-600 uppercase">
										New Product
									</p>
								)}

								<h2 className="mb-6 text-4xl leading-tight font-bold text-gray-900 uppercase lg:text-5xl">
									{product.name}
								</h2>

								<p className="mx-auto mb-8 max-w-md leading-relaxed text-gray-600 lg:mx-0">
									{product.description}
								</p>

								<Link href={`/products/${product.category}/${product.slug}`}>
									<span className="bg-yellow-600 px-8 py-4 font-bold text-white uppercase hover:bg-yellow-500">
										{product.cta ?? "See Product"}
									</span>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CollectionItem;
