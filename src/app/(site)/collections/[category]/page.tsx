interface PageProps {
	params: Promise<{ category: string }>;
}
export default async function CollectionsPage({ params }: PageProps) {
	const { category } = await params;

	return (
		<>
			<div className="bg-black text-white">
				<div className="py-24 text-center">
					<h1 className="text-4xl font-bold uppercase md:text-5xl">
						{category}
					</h1>
				</div>
			</div>
		</>
	);
}
