"use client";

import { navItems } from "@/utils/data";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import NavItem from "./ui/nav-item";

const Navbar = () => {
  const totalItems = 0; // Replace with actual cart item count logic

  return (
    <nav className="bg-black text-white">
      <div className="px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="text-white text-2xl font-bold tracking-wider">
          audiophile
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavItem key={item.name} href={item.href} name={item.name} />
          ))}
        </div>
        <div
          className="relative text-white cursor-pointer hover:text-yellow-500 transition-colors duration-300"
          onClick={() => {}}
        >
          <ShoppingCart size={23} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
