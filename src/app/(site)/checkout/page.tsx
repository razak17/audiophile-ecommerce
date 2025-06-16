"use client";

import CheckoutForm from "./_components/checkout-form";
import { CustomerInfo, Order } from "@/types";
import { useCart } from "@/context/cart-context";
import { useState } from "react";
import CheckoutGoBack from "./_components/checkout-go-back";

const SHIPPING_FEE = 50;
const VAT_RATE = 0.2;
const CheckoutPage = () => {
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

						{/* Order Summary */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutPage;
