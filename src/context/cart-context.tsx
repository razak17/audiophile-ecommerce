"use client";

import { Product } from "@/utils/data";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export type CartItem = Product & {
	quantity: number;
};

type CartContextType = {
	cart: CartItem[];
	isCartOpen: boolean;
	setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
	toggleCart: () => void;
	getTotalPrice: () => number;
	addToCart: (item: CartItem) => void;
	removeFromCart: (productId: number) => void;
	updateCartItemQuantity: (productId: number, quantity: number) => void;
	clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedCart = localStorage.getItem("cart");
			if (storedCart) {
				try {
					setCart(JSON.parse(storedCart));
				} catch (error) {
					console.error("Failed to parse cart from localStorage", error);
					localStorage.removeItem("cart"); // Clear invalid data
					setCart([]);
				}
			}
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, [cart]);

	const toggleCart = () => {
		setIsCartOpen((prev) => !prev);
	};

	const getTotalPrice = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const addToCart = (item: CartItem) => {
		setCart((prevCart) => {
			const existingItemIndex = prevCart.findIndex(
				(cartItem) => cartItem.id === item.id
			);

			if (existingItemIndex > -1) {
				const updatedCart = [...prevCart];
				updatedCart[existingItemIndex].quantity += item.quantity;
				return updatedCart;
			} else {
				return [...prevCart, item];
			}
		});
		setIsCartOpen(true);
	};

	const removeFromCart = (productId: number) => {
		setCart((prevCart) => {
			const updatedCart = prevCart.filter((item) => item.id !== productId);
			if (updatedCart.length === 0) {
				setIsCartOpen(false);
			}
			return updatedCart;
		});
	};

	const updateCartItemQuantity = (productId: number, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(productId);
			return;
		}
		setCart((prevCart) => {
			return prevCart.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			);
		});
	};
	const clearCart = () => {
		setCart([]);
		setIsCartOpen(false);
	};

	const value = {
		cart,
		isCartOpen,
		setIsCartOpen,
		toggleCart,
		getTotalPrice,
		addToCart,
		removeFromCart,
		updateCartItemQuantity,
		clearCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = React.useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
