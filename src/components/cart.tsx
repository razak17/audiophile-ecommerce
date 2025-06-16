import { useCart } from "@/context/cart-context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
	const router = useRouter();
	const {
		cart,
		toggleCart,
		updateCartItemQuantity,
		getTotalPrice,
		clearCart,
	} = useCart();

	const handleCheckout = () => {
		if (cart.length === 0) {
			return;
		}

		toggleCart();
		router.push("/checkout");
	};

	return (
		<div className="fixed inset-0 z-50">
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={() => toggleCart()}
			/>

			<div className="absolute top-24 right-4 w-11/12 max-w-sm rounded-lg bg-white p-8 shadow-2xl md:right-8">
				<div className="mb-8 flex items-center justify-between">
					<h2 className="text-lg font-bold tracking-wider uppercase">
						Cart ({cart.length})
					</h2>
					{cart.length > 0 && (
						<button
							onClick={(e) => {
								e.stopPropagation();
								clearCart();
							}}
							className="cursor-pointer text-sm font-medium text-gray-500 transition-colors hover:text-yellow-600"
						>
							Remove all
						</button>
					)}
				</div>

				{cart.length === 0 ? (
					<p className="py-8 text-center text-gray-500">Your cart is empty</p>
				) : (
					<>
						<div className="mb-8 max-h-96 space-y-6 overflow-y-auto pr-2">
							{cart.map((item) => (
								<div
									key={item.id}
									className="flex items-center justify-between"
								>
									<div className="flex items-center">
										<Image
											src={item.image}
											alt={item.name}
											className="mr-4 h-16 w-16 rounded-lg object-cover"
										/>
										<div>
											<h3 className="font-bold text-gray-900">
												{item.name.split(" ")[0]}{" "}
												<span className="text-gray-500">x{item.quantity}</span>
											</h3>
											<p className="text-sm text-gray-500">
												${item.price.toLocaleString()}
											</p>
										</div>
									</div>
									<div className="flex items-center rounded bg-gray-100">
										<button
											onClick={(e) => {
												e.stopPropagation();
												updateCartItemQuantity(item.id, item.quantity - 1);
											}}
											className="cursor-pointer px-3 py-1 font-bold text-gray-500 hover:text-yellow-600"
										>
											-
										</button>
										<span className="mx-2 w-4 text-center">
											{item.quantity}
										</span>
										<button
											onClick={(e) => {
												e.stopPropagation();
												updateCartItemQuantity(item.id, item.quantity + 1);
											}}
											className="cursor-pointer px-3 py-1 font-bold text-gray-500 hover:text-yellow-600"
										>
											+
										</button>
									</div>
								</div>
							))}
						</div>

						<div className="mb-6 border-t border-gray-200 pt-6">
							<div className="mb-6 flex items-center justify-between">
								<span className="text-gray-600">Total</span>
								<span className="text-lg font-bold text-gray-900">
									${getTotalPrice().toLocaleString()}
								</span>
							</div>
							<button
								className="flex w-full items-center justify-center rounded-md bg-yellow-600 px-6 py-3 font-bold text-white uppercase transition-colors duration-200 hover:bg-yellow-500"
								onClick={handleCheckout}
								disabled={cart.length === 0}
							>
								Checkout
								<svg
									className="ml-2 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Cart;
