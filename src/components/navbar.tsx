"use client";

import { navItems } from "@/utils/data";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import NavItem from "./ui/nav-item";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import Cart from "./cart";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { cart, isCartOpen, toggleCart } = useCart();
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<>
			<nav className="bg-black text-white">
				<div className="flex h-24 items-center justify-between px-6 py-4 lg:px-8">
					<button
						className="cursor-pointer text-white md:hidden"
						onClick={toggleMenu}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					<Link
						href="/"
						className="text-2xl font-bold tracking-wider text-white"
					>
						audiophile
					</Link>

					<div className="hidden space-x-8 md:flex">
						{navItems.map((item) => (
							<NavItem key={item.name} href={item.href} name={item.name} />
						))}
					</div>

					<div
						className="relative cursor-pointer text-white hover:text-yellow-500"
						onClick={() => toggleCart()}
					>
						<ShoppingCart size={23} />
						{totalItems > 0 && (
							<span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs text-white">
								{totalItems}
							</span>
						)}
					</div>

					{isMenuOpen && (
						<div className="absolute top-24 right-0 left-0 z-50 border-t bg-white md:hidden">
							<div className="flex flex-col space-y-4 p-6">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="text-sm font-bold text-black uppercase hover:text-yellow-500"
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</nav>
			{isCartOpen && <Cart />}
		</>
	);
};

export default Navbar;
