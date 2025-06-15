"use client";

import { navItems } from "@/utils/data";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import NavItem from "./ui/nav-item";

const Navbar = () => {
	const totalItems = 0; // Replace with actual cart item count logic

	return (
		<nav className="bg-black text-white">
			<div className="flex h-24 items-center justify-between px-6 py-4 lg:px-8">
				<Link href="/" className="text-2xl font-bold tracking-wider text-white">
					audiophile
				</Link>
				<div className="hidden space-x-8 md:flex">
					{navItems.map((item) => (
						<NavItem key={item.name} href={item.href} name={item.name} />
					))}
				</div>
				<div
					className="relative cursor-pointer text-white transition-colors duration-300 hover:text-yellow-500"
					onClick={() => {}}
				>
					<ShoppingCart size={23} />
					{totalItems > 0 && (
						<span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs text-white">
							{totalItems}
						</span>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
