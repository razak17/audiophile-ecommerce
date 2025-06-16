import { productsData } from "@/utils/data";
import CollectionItem from "./_components/collection-item";

interface PageProps {
	params: Promise<{ category: string }>;
}
export default async function CollectionsPage({ params }: PageProps) {
	const { category } = await params;

	const collectionItems = productsData.filter((product) => {
		return product.category === category && product.showcase;
	});

	const isOdd = (index: number) => {
		return index % 2 !== 0;
	};

	return (
		<>
			<div className="bg-black text-white">
				<div className="py-24 text-center">
					<h1 className="text-4xl font-bold tracking-wider uppercase md:text-5xl">
						{category}
					</h1>
				</div>
			</div>
			{collectionItems.map((product, index) => (
				<CollectionItem
					key={product.id}
					product={product}
					isOdd={isOdd(index)}
				/>
			))}
		</>
	);
}
