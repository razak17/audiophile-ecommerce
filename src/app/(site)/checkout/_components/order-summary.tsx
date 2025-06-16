import Image from "next/image";
import { CartItem } from "@/types";

const SummaryItem = ({
	item: { id, name, price, quantity, image },
}: {
	item: CartItem;
}) => {
	return (
		<div key={id} className="flex items-center justify-between">
			<div className="flex items-center">
				<div className="mr-4 h-16 w-16 overflow-hidden rounded-lg bg-gray-200">
					<Image
						src={image}
						alt={name}
						className="h-full w-full object-cover"
					/>
					<div className="hidden h-full w-full items-center justify-center bg-gray-300 text-xs text-gray-500">
						No Image
					</div>
				</div>
				<div>
					<h3 className="text-sm font-bold text-black uppercase">{name}</h3>
					<p className="text-sm font-medium text-gray-500">
						${price.toLocaleString()}
					</p>
				</div>
			</div>
			<div className="text-sm font-bold text-gray-500">x{quantity}</div>
		</div>
	);
};

const OrderCostItem = ({ title, total }: { title: string; total: string }) => {
	return (
		<>
			<div className="flex justify-between">
				<span className="text-sm text-gray-500 uppercase">{title}</span>
				<span className="font-bold text-black">{total}</span>
			</div>
		</>
	);
};

const OrderSummary = ({
	items,
	subtotal,
	shipping,
	vat,
	grandTotal,
}: {
	items: CartItem[];
	subtotal: number;
	shipping: number;
	vat: number;
	grandTotal: number;
}) => {
	return (
		<div className="rounded-lg bg-gray-50 p-6">
			<h2 className="mb-6 text-lg font-bold text-black uppercase">Summary</h2>

			<div className="mb-8 space-y-6">
				{items.length > 0 ? (
					items.map((item) => <SummaryItem key={item.id} item={item} />)
				) : (
					<p className="py-4 text-center text-gray-500">Your cart is empty</p>
				)}
			</div>

			<div className="mb-6 space-y-2">
				<OrderCostItem title="Total" total={`$${subtotal.toLocaleString()}`} />
				<OrderCostItem
					title="Shipping"
					total={`$${shipping.toLocaleString()}`}
				/>
				<OrderCostItem
					title="VAT (Included)"
					total={`$${vat.toLocaleString()}`}
				/>
			</div>

			<div className="mb-6 flex items-center justify-between">
				<span className="text-sm text-gray-500 uppercase">Grand Total</span>
				<span className="text-lg font-bold text-yellow-600">
					${grandTotal.toLocaleString()}
				</span>
			</div>

			<button
				type="submit"
				form="checkout-form"
				className="w-full cursor-pointer bg-yellow-600 px-6 py-4 text-sm font-bold tracking-wider text-white uppercase transition-colors duration-200 hover:bg-yellow-500"
				disabled={items.length === 0}
				onClick={(e) => {
					// If the form is not valid, prevent default to show validation errors
					const form = document.getElementById(
						"checkout-form"
					) as HTMLFormElement | null;
					if (form && !form.checkValidity()) {
						e.preventDefault();
						form.reportValidity();
					}
				}}
			>
				Continue & pay
			</button>
		</div>
	);
};

export default OrderSummary;
