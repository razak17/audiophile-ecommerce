import Image from "next/image";
import { bannerData } from "@/utils/data";

const Banner = () => {
	return (
		<div className="bg-white px-6 py-16 md:px-8 lg:px-12 lg:py-24 xl:px-24">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="order-2 lg:order-1">
						<h2 className="mb-8 text-3xl leading-tight font-bold text-black uppercase md:text-4xl lg:text-5xl">
							Bringing You The <span className="text-yellow-600">BEST</span>{" "}
							Audio gear
						</h2>
						<p className="text-base leading-relaxed text-gray-600 md:text-lg">
							{bannerData.description}
						</p>
					</div>

					<div className="order-1 lg:order-2">
						<div className="relative overflow-hidden rounded-lg">
							<Image
								src={bannerData.image}
								alt="Person enjoying audio gear"
								className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px]"
								style={{ filter: "grayscale(100%) contrast(1.1)" }}
							/>
							<div
								className="absolute inset-0 opacity-10"
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
