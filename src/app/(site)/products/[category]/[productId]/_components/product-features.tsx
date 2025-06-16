import { ProductItem } from "@/types";

const IncludedItem = ({
	quantity,
	name,
}: {
	quantity: number;
	name: string;
}) => (
	<div className="flex items-center">
		<span className="mr-8 min-w-[30px] font-bold text-yellow-600">
			{quantity}x
		</span>
		<span className="text-gray-500">{name}</span>
	</div>
);

const ProductFeatures = ({
	features,
	includes,
}: {
	features?: string;
	includes?: ProductItem[];
}) => {
	return (
		<div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
			<div>
				<h2 className="mb-8 text-3xl font-bold tracking-wide text-gray-900 uppercase">
					Features
				</h2>
				<div className="space-y-6 leading-relaxed text-gray-500">
					<p>{features ?? "No Features"}</p>
				</div>
			</div>

			<div>
				<h2 className="mb-8 text-3xl font-bold tracking-wide text-gray-900 uppercase">
					In The Box
				</h2>
				<div className="space-y-4">
					{includes?.map((item, index) => (
						<IncludedItem
							key={index}
							quantity={item.quantity}
							name={item.item}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductFeatures;
