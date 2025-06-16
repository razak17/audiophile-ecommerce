"use client";

import { useCart } from "@/context/cart-context";
import { CustomerInfo, Order } from "@/types";
import { SHIPPING_FEE, VAT_RATE } from "@/utils/constants";
import { useEffect, useState } from "react";
import CheckoutConfirmationModal from "./_components/checkout-confirmation-modal";
import CheckoutForm from "./_components/checkout-form";
import CheckoutGoBack from "./_components/checkout-go-back";
import OrderSummary from "./_components/order-summary";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
	const router = useRouter();
	const { cart, clearCart } = useCart();
	const [isLoading, setIsLoading] = useState(true);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [orderDetails, setOrderDetails] = useState<Order | null>(null);

	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const vat = Math.floor(subtotal * VAT_RATE);
	const grandTotal = subtotal + SHIPPING_FEE + vat;

	const generateOrderNumber = () => {
		return `#${Math.floor(Math.random() * 1000000)
			.toString()
			.padStart(6, "0")}`;
	};

	const handleSubmit = async (formData: CustomerInfo) => {
		try {
			const orderData = {
				customer: formData,
				items: cart,
				subtotal,
				shipping: SHIPPING_FEE,
				vat,
				grandTotal,
				orderNumber: `#${generateOrderNumber()}`,
				orderDate: new Date().toISOString(),
			};

			setOrderDetails(orderData);
			setShowConfirmation(true);
		} catch (error) {
			console.error("Error submitting order:", error);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			if (cart.length === 0 && !showConfirmation) {
				router.push("/");
			}
		}, 1000);
		return () => clearTimeout(timer);
	}, [cart, showConfirmation, router]);

	if (isLoading) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gray-50">
				<div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-orange-500"></div>
			</div>
		);
	}

	return (
		<div>
			<div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<CheckoutGoBack />
					<div className="grid gap-8 md:grid-cols-3">
						<div className="rounded-lg bg-white p-6 md:col-span-2">
							<h1 className="mb-8 text-2xl font-bold uppercase">Checkout</h1>
							<CheckoutForm onSubmit={handleSubmit} />
						</div>

						<div className="md:col-span-1">
							<OrderSummary
								items={cart}
								subtotal={subtotal}
								shipping={SHIPPING_FEE}
								vat={vat}
								grandTotal={grandTotal}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Checkout Confirmation Modal */}
			{showConfirmation && orderDetails && (
				<CheckoutConfirmationModal
					items={orderDetails.items}
					grandTotal={orderDetails.grandTotal}
					onClose={() => {
						setShowConfirmation(false);
						clearCart();
					}}
				/>
			)}
		</div>
	);
};

export default CheckoutPage;
