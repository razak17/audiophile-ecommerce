import desktopHeroImage from "../assets/images/hero-no-bg.png";
import headPhoneCategoryImage from "../assets/images/categories/headphones/headphones.png";
import speakerCategoryImage from "../assets/images/categories/speakers/speakers.png";
import earphoneCategoryImage from "../assets/images/categories/earphones/earphones.png";

export const navItems = [
	{ name: "home", href: "/" },
	{ name: "headphones", href: "/headphones" },
	{ name: "speakers", href: "/speakers" },
	{ name: "earphones", href: "/earphones" },
];

export const heroData = {
	id: 4,
	product: "XX99 MARK II HEADPHONES",
	description:
		"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
	cta: "See Product",
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

export const mainShowcaseProduct = {
	id: 1,
	title: "ZX9 speaker",
	category: "speakers",
	description:
		"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
	image: speakerCategoryImage,
	cta: "See Product",
};
