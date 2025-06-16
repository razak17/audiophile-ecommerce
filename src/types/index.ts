import { StaticImageData } from "next/image";

export type ProductCategories = "headphones" | "speakers" | "earphones";

export type ProductItem = {
	quantity: number;
	item: string;
};

export type GalleryItem = {
	image: StaticImageData | string;
	alt: string;
};

export type ProductGallery = {
	topLeft: GalleryItem;
	bottomLeft: GalleryItem;
	right: GalleryItem;
};

export type Product = {
	id: number;
	name: string;
	slug: string;
	category: ProductCategories;
	new: boolean;
	price: number;
	description: string;
	image: StaticImageData | string;
	features?: string;
	includes?: ProductItem[];
	gallery?: ProductGallery;
	others?: Product[];
	cta?: string;
	showcase?: boolean;
};

export type CustomerInfo = {
	name: string;
	email: string;
	phone: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
	paymentMethod: "eMoney" | "cash";
	eMoneyNumber?: string;
	eMoneyPIN?: string;
};

export type CartItem = Product & {
	quantity: number;
};

export type Order = {
	customer: CustomerInfo;
	items: Array<CartItem>;
	subtotal: number;
	shipping: number;
	vat: number;
	grandTotal: number;
	orderNumber: string;
	orderDate: string;
};
