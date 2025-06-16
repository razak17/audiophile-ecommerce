interface PageProps {
	params: Promise<{
		category: string;
		productId: string;
	}>;
}
export default async function ProductDetailsPage({ params, }: PageProps) {
	const { category, productId } = await params;

	return (
		<div>
			<h1 className="text-4xl font-bold uppercase md:text-5xl">
				Product Details Page for {category}: {productId}
			</h1>
		</div>
	);
}
