import { CartItem } from "@/types";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const checkoutConfirmationModal = ({
	items,
	grandTotal,
	onClose,
}: {
	items: CartItem[];
	grandTotal: number;
	onClose: () => void;
}) => {
	return (
		<div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
			<div className="mx-4 w-full max-w-md rounded-lg bg-white p-8">
				<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600">
					<CheckCircle className="h-8 w-8 text-white" />
				</div>

				<h2 className="mb-4 text-2xl font-bold uppercase">
					Thank You For Your order
				</h2>
				<p className="mb-6 text-gray-500">
					You will receive an email confirmation shortly.
				</p>

				<div className="mb-6 overflow-hidden rounded-lg">
					<div className="bg-gray-50 p-4">
						{items.length > 0 && (
							<div className="mb-3 flex items-center justify-between">
								<div className="flex items-center">
									<div className="mr-4 h-12 w-12 overflow-hidden rounded bg-gray-200">
										<Image
											src={items[0].image}
											alt={items[0].name}
											className="h-full w-full object-cover"
										/>
									</div>
									<div>
										<p className="font-bold">{items[0].name}</p>
										<p className="text-gray-500">
											${items[0].price.toLocaleString()}
										</p>
									</div>
								</div>
								<p className="text-gray-500">x{items[0].quantity}</p>
							</div>
						)}

						{items.length > 1 && (
							<div className="border-t border-gray-200 pt-3 text-center">
								<p className="text-sm text-gray-500">
									and {items.length - 1} other item{items.length > 2 ? "s" : ""}
								</p>
							</div>
						)}
					</div>

					<div className="bg-black p-6 text-white">
						<div className="flex flex-col">
							<span className="mb-2 text-sm text-gray-400 uppercase">
								Grand Total
							</span>
							<span className="text-lg font-bold">
								${grandTotal.toLocaleString()}
							</span>
						</div>
					</div>
				</div>

				<button
					onClick={onClose}
					className="cursor-pointer w-full rounded-md bg-yellow-600 px-6 py-3 font-bold text-white uppercase transition-colors hover:bg-yellow-500"
				>
					Back To home
				</button>
			</div>
		</div>
	);
};

export default checkoutConfirmationModal;
