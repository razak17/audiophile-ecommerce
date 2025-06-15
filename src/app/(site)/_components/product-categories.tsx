import { productCategories } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const ProductCategories = () => {
	return (
		<div className="bg-white px-4 py-16 sm:px-6 md:px-8 lg:px-12 xl:px-24">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-12">
					{productCategories.map((category) => (
						<Link
							href={category.href}
							key={category.title}
							className="group relative mx-auto block w-full max-w-sm cursor-pointer overflow-visible rounded-lg bg-gray-100 px-4 py-6 text-center transition-all duration-300 hover:shadow-lg"
						>
							<div className="relative mb-4 flex items-center justify-center">
								<Image
									src={category.image}
									alt={category.title}
									className="-mt-12 h-28 w-28 object-contain drop-shadow-lg filter transition-transform duration-300 group-hover:scale-110"
								/>
							</div>

							<h3 className="mb-4 font-bold tracking-wide text-black uppercase">
								{category.title}
							</h3>

							<div className="flex items-center justify-center space-x-2">
								<span className="text-sm font-bold text-gray-600 uppercase hover:text-yellow-600">
									shop
								</span>
								<ChevronRight size={20} color="#D87D4A" />
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductCategories;
