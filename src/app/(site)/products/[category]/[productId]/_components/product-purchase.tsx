import { Product } from "@/utils/data";
import Image from "next/image";

const ProductPurchase = ({ product }: { product: Product }) => {
	return (
		<div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
			<div className="flex items-center justify-center rounded-lg bg-gray-100 p-16">
				<div className="flex h-80 w-80 items-center justify-center">
					<Image
						src={product.image}
						alt={product.name}
						className="h-full w-full object-contain"
					/>
				</div>
			</div>

			<div className="space-y-8">
				<div className="text-sm font-medium tracking-[0.6em] text-yellow-600 uppercase">
					New Product
				</div>

				<h1 className="text-4xl leading-tight font-bold text-gray-900 uppercase lg:text-5xl">
					{product.name}
				</h1>

				<p className="max-w-md text-base leading-relaxed text-gray-500">
					{product.description}
				</p>

				<div className="text-2xl font-bold tracking-wide text-gray-900">
					$ {product.price.toLocaleString("en-US", {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				</div>

				<div className="flex items-center space-x-4">
					<div className="flex items-center bg-gray-100">
						<button
							// onClick={() => handleQuantityChange(false)}
							className="px-4 py-3 font-bold text-gray-500 transition-colors hover:text-yellow-500"
						>
							-
						</button>
						<span className="min-w-[60px] px-6 py-3 text-center font-bold text-gray-900">
							{product.quantity || 0}
						</span>
						<button className="px-4 py-3 font-bold text-gray-500 transition-colors hover:text-yellow-500">
							+
						</button>
					</div>

					<button
						// onClick={handleAddToCart}
						className="bg-yellow-600 px-8 py-3 font-bold tracking-widest text-white uppercase transition-colors duration-200 hover:bg-yellow-500"
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPurchase;
