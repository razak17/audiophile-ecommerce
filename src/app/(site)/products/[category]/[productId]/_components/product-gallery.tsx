import { GallertItem } from "@/utils/data";
import Image from "next/image";

const ProductGallery = ({
	topLeftImage,
	bottomLeftImage,
	rightImage,
}: {
	topLeftImage: GallertItem;
	bottomLeftImage: GallertItem;
	rightImage: GallertItem;
}) => {
	return (
		<div className="mx-auto mb-20 max-w-6xl px-6 py-16">
			<div className="grid min-h-[500px] grid-cols-1 gap-4 md:grid-cols-2">
				<div className="flex flex-col gap-4">
					<div className="flex-1 overflow-hidden rounded-xl bg-gray-100">
						<Image
							src={topLeftImage.image}
							alt={topLeftImage.alt}
							className="h-full w-full object-cover grayscale filter transition-all duration-300 hover:grayscale-0"
						/>
					</div>

					<div className="flex-1 overflow-hidden rounded-xl bg-gray-100">
						<Image
							src={bottomLeftImage.image}
							alt={bottomLeftImage.alt}
							className="h-full w-full object-cover grayscale filter transition-all duration-300 hover:grayscale-0"
						/>
					</div>
				</div>

				<div className="overflow-hidden rounded-xl bg-black">
					<Image
						src={rightImage.image}
						alt={rightImage.alt}
						className="h-full w-full object-cover grayscale filter transition-all duration-300 hover:grayscale-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductGallery;
