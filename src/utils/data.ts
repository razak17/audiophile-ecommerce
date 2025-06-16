import { StaticImageData } from "next/image";
import earphoneShowcaseImage from "../assets/images/categories/earphones/earphone-yx1.jpg";
import earphoneCategoryImage from "../assets/images/categories/earphones/earphones.png";
import headPhoneCategoryImage from "../assets/images/categories/headphones/headphones.png";
import speakerShowcaseImage from "../assets/images/categories/speakers/speaker-zx7.png";
import speakerCategoryImage from "../assets/images/categories/speakers/speakers.png";
import desktopHeroImage from "../assets/images/hero-no-bg.png";
import bannerImage from "../assets/images/banner.jpg";

export type ProductCategories = "headphones" | "speakers" | "earphones";

export type Product = {
	id: number;
	name: string;
	category: ProductCategories;
	description: string;
	image: StaticImageData | string;
	cta?: string;
};

export const navItems = [
	{ name: "home", href: "/" },
	{ name: "headphones", href: "/headphones" },
	{ name: "speakers", href: "/speakers" },
	{ name: "earphones", href: "/earphones" },
];

export const heroData: Product = {
	id: 4,
	name: "XX99 MARK II HEADPHONES",
	category: "headphones",
	description:
		"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
	image: desktopHeroImage,
};

export const productCategories = [
	{
		title: "headphones",
		image: headPhoneCategoryImage,
		href: "/headphones",
	},
	{
		title: "speakers",
		image: speakerCategoryImage,
		href: "/speakers",
	},
	{
		title: "earphones",
		image: earphoneCategoryImage,
		href: "/earphones",
	},
];

export const mainShowcaseProduct: Product = {
	id: 1,
	name: "ZX9 speaker",
	category: "speakers",
	description:
		"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
	image: speakerCategoryImage,
};

export const otherProductShowcase: Product[] = [
	{
		id: 2,
		name: "ZX7 speaker",
		category: "speakers",
		description:
			"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
		image: speakerShowcaseImage,
	},
	{
		id: 3,
		name: "YX1 Wireless Earphones",
		category: "earphones",
		description:
			"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
		image: earphoneShowcaseImage,
	},
];

export const bannerData = {
	description:
		"Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
	image: bannerImage,
};
