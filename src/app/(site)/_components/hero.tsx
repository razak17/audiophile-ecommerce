import Link from "next/link";
import { heroData } from "@/utils/data";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="bg-black text-white">
			<div className="px-6 md:px-8 lg:px-12 xl:px-24">
				<div className="flex min-h-[600px] flex-col items-center lg:min-h-[700px] lg:flex-row">
					<div className="flex-1 py-12 text-center lg:py-0 lg:pr-12 lg:text-left">
						<p className="mb-4 text-sm tracking-[10px] text-yellow-600 uppercase">
							New Product
						</p>
						<h1 className="uppercase mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
							{heroData.name}
						</h1>
						<p className="mx-auto mb-8 max-w-md text-lg text-gray-300 lg:mx-0">
							{heroData.description}
						</p>
						<Link href={`/products/${heroData.category}/${heroData.slug}`}>
							<span className="bg-yellow-600 px-8 py-4 font-bold text-white uppercase hover:bg-yellow-500">
								{heroData.cta ?? "See Product"}
							</span>
						</Link>
					</div>
					<div className="flex flex-1 justify-center py-8 lg:justify-end lg:py-0">
						<div className="relative">
							<div className="relative z-10 flex h-96 w-full items-center justify-center md:h-[500px] md:w-full lg:h-[600px] lg:w-[600px] xl:h-[700px] xl:w-[700px]">
								<Image
									width={500}
									height={500}
									src={heroData.image}
									alt={heroData.name}
									className="h-full max-h-[500px] w-full max-w-[500px] object-contain drop-shadow-2xl filter md:max-h-[600px] md:max-w-[600px] lg:max-h-[700px] lg:max-w-[700px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
