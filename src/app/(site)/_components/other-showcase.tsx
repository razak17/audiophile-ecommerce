"use client";

import { Product } from "@/utils/data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const OtherShowcase = ({ products }: { products: Product[] }) => {
	const secondaryShowcase = products[0];
	const finalShowcase = products[1];

	const [currentWindowWidth, setCurrentWindowWidth] = useState(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				setCurrentWindowWidth(window.innerWidth);
			};

			setCurrentWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	return (
		<div>
			{secondaryShowcase && (
				<div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12 xl:px-24">
					<div className="mx-auto max-w-7xl">
						<div
							className="relative flex h-[180px] items-center overflow-hidden rounded-lg sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px]"
							style={{
								backgroundColor: "#E0E0E0",
								backgroundImage: `url(${(secondaryShowcase.image as StaticImageData).src})`,
								backgroundSize: currentWindowWidth < 768 ? "cover" : "contain",
								backgroundPosition:
									currentWindowWidth < 768 ? "center" : "center right",
								backgroundRepeat: "no-repeat",
							}}
						>
							<div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>

							<div className="relative z-10 px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12 xl:px-16">
								<h2 className="mb-4 text-xl leading-tight font-bold tracking-wide text-black uppercase sm:mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
									{secondaryShowcase.name}
								</h2>
								<Link
									href={`/products/${secondaryShowcase.category}/${secondaryShowcase.id}`}
								>
									<span className="border border-black bg-transparent px-4 py-2 text-xs font-medium tracking-wide text-black uppercase transition-all duration-300 hover:bg-black hover:text-white sm:px-6 sm:py-2.5 sm:text-sm">
										{secondaryShowcase.cta ?? "See Product"}
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
			{finalShowcase && (
				<div className="px-6 py-8 md:px-8 lg:px-12 xl:px-24">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
							<div className="relative h-[300px] overflow-hidden rounded-lg bg-gray-100 lg:h-[320px]">
								<Image
									src={finalShowcase.image}
									alt={finalShowcase.name}
									className="h-full w-full object-cover"
									style={{ filter: "brightness(0.9) contrast(1.1)" }}
								/>
							</div>

							<div className="flex flex-col justify-center rounded-lg bg-gray-100 px-8 py-12 md:px-12 lg:px-16 lg:py-16">
								<h2 className="mb-8 text-2xl font-bold tracking-wide text-black uppercase md:text-3xl lg:text-4xl">
									{finalShowcase.name}
								</h2>
								<Link
									href={`/products/${finalShowcase.category}/${finalShowcase.id}`}
								>
									<span className="w-fit border border-black bg-transparent px-6 py-2.5 text-sm font-medium tracking-wide text-black uppercase transition-all duration-300 hover:bg-black hover:text-white">
										{finalShowcase.cta ?? "See Product"}
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default OtherShowcase;
