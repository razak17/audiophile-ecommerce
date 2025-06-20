import { Product } from "@/types";
import bannerImage from "../assets/images/banner.jpg";
import earphoneShowcaseImage from "../assets/images/categories/earphones/earphone-yx1.jpg";
import earphoneCategoryImage from "../assets/images/categories/earphones/earphones.png";
import YX1WirelessGalleryOne from "../assets/images/categories/earphones/products/yx1-wireless-gallery-1.png";
import YX1WirelessGalleryTwo from "../assets/images/categories/earphones/products/yx1-wireless-gallery-2.png";
import YX1WirelessGalleryThree from "../assets/images/categories/earphones/products/yx1-wireless-gallery-3.png";
import YX1Wireless from "../assets/images/categories/earphones/products/yx1-wireless.png";
import headPhoneCategoryImage from "../assets/images/categories/headphones/headphones.png";
import XX59WhiteGalleryOne from "../assets/images/categories/headphones/products/x59-white-gallery-1.png";
import XX59WhiteGalleryTwo from "../assets/images/categories/headphones/products/x59-white-gallery-2.png";
import XX59WhiteGalleryThree from "../assets/images/categories/headphones/products/x59-white-gallery-3.png";
import XX59White from "../assets/images/categories/headphones/products/x59-white.png";
import XX99MarkOneGalleryOne from "../assets/images/categories/headphones/products/x99-mark-one-gallery-1.png";
import XX99MarkOneGalleryTwo from "../assets/images/categories/headphones/products/x99-mark-one-gallery-2.png";
import XX99MarkOneGalleryThree from "../assets/images/categories/headphones/products/x99-mark-one-gallery-3.png";
import XX99MarkOne from "../assets/images/categories/headphones/products/x99-mark-one.png";
import XX99MarkTwoGalleryOne from "../assets/images/categories/headphones/products/x99-mark-two-gallery-1.png";
import XX99MarkTwoGalleryTwo from "../assets/images/categories/headphones/products/x99-mark-two-gallery-2.png";
import XX99MarkTwoGalleryThree from "../assets/images/categories/headphones/products/x99-mark-two-gallery-3.png";
import XX99MarkTwo from "../assets/images/categories/headphones/products/x99-mark-two.png";
import ZX7BlackGalleryOne from "../assets/images/categories/speakers/products/zx7-black-gallery-1.png";
import ZX7BlackGalleryTwo from "../assets/images/categories/speakers/products/zx7-black-gallery-2.png";
import ZX7BlackGalleryThree from "../assets/images/categories/speakers/products/zx7-black-gallery-3.png";
import ZX7Black from "../assets/images/categories/speakers/products/zx7-black.png";
import ZX9BlackGalleryOne from "../assets/images/categories/speakers/products/zx9-black-gallery-1.jpg";
import ZX9BlackGalleryTwo from "../assets/images/categories/speakers/products/zx9-black-gallery-2.jpg";
import ZX9BlackGalleryThree from "../assets/images/categories/speakers/products/zx9-black-gallery-3.jpg";
import ZX9Black from "../assets/images/categories/speakers/products/zx9-black.png";
import speakerShowcaseImage from "../assets/images/categories/speakers/speaker-zx7.png";
import speakerCategoryImage from "../assets/images/categories/speakers/speakers.png";
import desktopHeroImage from "../assets/images/hero-no-bg.png";

export const navItems = [
	{ name: "home", href: "/" },
	{ name: "headphones", href: "/collections/headphones" },
	{ name: "speakers", href: "/collections/speakers" },
	{ name: "earphones", href: "/collections/earphones" },
];

export const heroData: Product = {
	id: 4,
	name: "XX99 Mark II Headphones",
	slug: "xx99-mark-two-headphones",
	category: "headphones",
	new: true,
	price: 2999,
	description:
		"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
	image: desktopHeroImage,
};

export const productCategories = [
	{
		title: "headphones",
		image: headPhoneCategoryImage,
		href: "/collections/headphones",
	},
	{
		title: "speakers",
		image: speakerCategoryImage,
		href: "/collections/speakers",
	},
	{
		title: "earphones",
		image: earphoneCategoryImage,
		href: "/collections/earphones",
	},
];

export const mainShowcaseProduct: Product = {
	id: 1,
	name: "ZX9 speaker",
	slug: "zx9-speaker",
	category: "speakers",
	new: true,
	price: 4500,
	description:
		"Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
	image: speakerCategoryImage,
};

export const otherProductShowcase: Product[] = [
	{
		id: 2,
		name: "ZX7 speaker",
		slug: "zx7-speaker",
		category: "speakers",
		new: false,
		price: 3500,
		description:
			"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
		image: speakerShowcaseImage,
	},
	{
		id: 3,
		name: "YX1 Wireless Earphones",
		slug: "yx1-wireless-earphones",
		category: "earphones",
		new: true,
		price: 599,
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

export const headphonesData: Product[] = [
	{
		id: 2,
		name: "XX99 Mark II Headphones",
		slug: "xx99-mark-two-headphones",
		category: "headphones",
		new: true,
		price: 2999,
		showcase: true,
		description:
			"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
		features:
			"Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
		image: XX99MarkTwo,
		includes: [
			{
				quantity: 1,
				item: "Headphone unit",
			},
			{
				quantity: 2,
				item: "Replacement earcups",
			},
			{
				quantity: 1,
				item: "User manual",
			},
			{
				quantity: 1,
				item: "3.5mm 5m audio cable",
			},
			{
				quantity: 1,
				item: "Travel bag",
			},
		],
		gallery: {
			topLeft: {
				image: XX99MarkTwoGalleryOne,
				alt: "Person wearing headphones",
			},
			bottomLeft: {
				image: XX99MarkTwoGalleryTwo,
				alt: "Headphones on desk setup",
			},
			right: {
				image: XX99MarkTwoGalleryThree,
				alt: "Close-up view of headphones",
			},
		},
	},
	{
		id: 3,
		name: "XX99 Mark I Headphones",
		slug: "xx99-mark-one-headphones",
		category: "headphones",
		new: false,
		price: 1750,
		showcase: true,
		description:
			"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
		features:
			"As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
		image: XX99MarkOne,
		includes: [
			{
				quantity: 1,
				item: "Headphone unit",
			},
			{
				quantity: 2,
				item: "Replacement earcups",
			},
			{
				quantity: 1,
				item: "User manual",
			},
			{
				quantity: 1,
				item: "3.5mm 5m audio cable",
			},
		],
		gallery: {
			topLeft: {
				image: XX99MarkOneGalleryOne,
				alt: "Headphones on stand",
			},
			bottomLeft: {
				image: XX99MarkOneGalleryTwo,
				alt: "Headphones on desk setup",
			},
			right: {
				image: XX99MarkOneGalleryThree,
				alt: "Close-up view of headphones",
			},
		},
	},
	{
		id: 4,
		name: "XX59 Headphones",
		slug: "xx59-headphones",
		category: "headphones",
		new: false,
		price: 899,
		showcase: true,
		description:
			"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
		features:
			"These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
		image: XX59White,
		includes: [
			{
				quantity: 1,
				item: "Headphone unit",
			},
			{
				quantity: 2,
				item: "Replacement earcups",
			},
			{
				quantity: 1,
				item: "User manual",
			},
			{
				quantity: 1,
				item: "3.5mm 5m audio cable",
			},
		],
		gallery: {
			topLeft: {
				image: XX59WhiteGalleryOne,
				alt: "Person wearing headphones",
			},
			bottomLeft: {
				image: XX59WhiteGalleryTwo,
				alt: "Headphones on desk setup",
			},
			right: {
				image: XX59WhiteGalleryThree,
				alt: "Person holding headphones with finger",
			},
		},
	},
];

export const speakersData: Product[] = [
	{
		id: 5,
		name: "ZX9 Speaker",
		slug: "zx9-speaker",
		category: "speakers",
		new: true,
		price: 4500,
		showcase: true,
		description:
			"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
		features:
			"Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
		image: ZX9Black,
		includes: [
			{
				quantity: 2,
				item: "Speaker unit",
			},
			{
				quantity: 2,
				item: "Speaker cloth panel",
			},
			{
				quantity: 1,
				item: "User manual",
			},
			{
				quantity: 1,
				item: "3.5mm 10m audio cable",
			},
			{
				quantity: 1,
				item: "10m optical cable",
			},
		],
		gallery: {
			topLeft: {
				image: ZX9BlackGalleryOne,
				alt: "Close-up view of ZX9 speaker",
			},
			bottomLeft: {
				image: ZX9BlackGalleryTwo,
				alt: "ZX9 speaker in a living room",
			},
			right: {
				image: ZX9BlackGalleryThree,
				alt: "ZX9 speaker on a shelf",
			},
		},
	},
	{
		id: 6,
		name: "ZX7 Speaker",
		slug: "zx7-speaker",
		category: "speakers",
		new: false,
		price: 3500,
		showcase: true,
		description:
			"Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
		features:
			"Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
		image: ZX7Black,
		includes: [
			{
				quantity: 2,
				item: "Speaker unit",
			},
			{
				quantity: 2,
				item: "Speaker cloth panel",
			},
			{
				quantity: 1,
				item: "User manual",
			},
			{
				quantity: 1,
				item: "3.5mm 7.5m audio cable",
			},
			{
				quantity: 1,
				item: "7.5m optical cable",
			},
		],
		gallery: {
			topLeft: {
				image: ZX7BlackGalleryOne,
				alt: "Close-up view of ZX7 speaker",
			},
			bottomLeft: {
				image: ZX7BlackGalleryTwo,
				alt: "ZX7 speaker in a sound studio",
			},
			right: {
				image: ZX7BlackGalleryThree,
				alt: "ZX7 speaker on a table",
			},
		},
	},
];

export const earphonesData: Product[] = [
	{
		id: 1,
		name: "YX1 Wireless Earphones",
		slug: "yx1-earphones",
		category: "earphones",
		new: true,
		price: 599,
		showcase: true,
		description:
			"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
		features:
			"Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
		image: YX1Wireless,
		includes: [
			{
				quantity: 2,
				item: "Earphone unit",
			},
			{
				quantity: 6,
				item: "Multi-size earplugs",
			},
			{
				quantity: 1,
				item: "User manual",
			},
			{
				quantity: 1,
				item: "USB-C charging cable",
			},
			{
				quantity: 1,
				item: "Travel pouch",
			},
		],
		gallery: {
			topLeft: {
				image: YX1WirelessGalleryOne,
				alt: "earphones",
			},
			bottomLeft: {
				image: YX1WirelessGalleryTwo,
				alt: "earphones",
			},
			right: {
				image: YX1WirelessGalleryThree,
				alt: "earphones",
			},
		},
	},
];

export const productsData: Product[] = [
	...headphonesData,
	...speakersData,
	...earphonesData,
];
