import Image from "next/image";
import Link from "next/link";
import { mainShowcaseProduct } from "@/utils/data";
import { Fragment } from "react";

const MainShowcase = () => {
	return (
		<div className="px-6 py-16 md:px-8 lg:px-12 xl:px-24">
			<div className="mx-auto max-w-7xl">
				<div
					className="relative flex flex-col-reverse items-center justify-between overflow-hidden rounded-lg px-6 py-16 lg:flex-row lg:items-end lg:py-20"
					style={{
						background: "linear-gradient(135deg, #D87D4A 0%, #CD6A35 100%)",
						minHeight: "560px",
					}}
				>
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute top-[-100px] left-[-100px] h-[600px] w-[600px] rounded-full border border-white/20"></div>
						<div className="absolute top-[-200px] left-[-200px] h-[800px] w-[800px] rounded-full border border-white/10"></div>
						<div className="absolute top-[-50px] left-[-50px] h-[400px] w-[400px] rounded-full border border-white/5"></div>
					</div>

					<div className="relative z-10 mb-10 flex w-full items-center justify-center lg:mb-0 lg:w-1/2">
						<Image
							src={mainShowcaseProduct.image}
							alt={mainShowcaseProduct.title}
							className="w-[180px] object-contain sm:w-[240px] md:w-[280px] lg:w-[350px]"
						/>
					</div>

					<div className="z-10 w-full text-center text-white lg:w-1/2 lg:text-left">
						<h2 className="mb-6 text-4xl font-bold uppercase md:text-5xl lg:text-6xl">
							{mainShowcaseProduct.title
								.split(" ")
								.map((word, index, array) => (
									<Fragment key={index}>
										{word}
										{index < array.length - 1 && <br />}
									</Fragment>
								))}
						</h2>
						<p className="mx-auto mb-8 max-w-md text-lg leading-relaxed opacity-90 md:text-xl lg:mx-0">
							{mainShowcaseProduct.description}
						</p>
						<div className="flex justify-center lg:justify-start">
							<Link
								href={`/${mainShowcaseProduct.category}/${mainShowcaseProduct.id}`}
								className="bg-black px-8 py-4 font-bold tracking-wider text-white uppercase transition-colors duration-300 hover:bg-gray-800"
							>
								{mainShowcaseProduct.cta}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainShowcase;
