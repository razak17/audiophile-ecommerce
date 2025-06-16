import { navItems } from "@/utils/data";
import NavItem from "./ui/nav-item";
import BrandLink from "./ui/brand-link";
import FacebookIcon from "./icons/facebook-icon";
import InstagramIcon from "./icons/instagram-icon";
import TwitterIcon from "./icons/twitter-icon";

const Footer = () => {
	return (
		<div className="bg-black text-white">
			<div className="mx-6 h-1 w-24 bg-yellow-500 md:mx-8 lg:mx-12 xl:mx-24"></div>
			<div className="px-6 py-12 md:px-8 lg:px-12 lg:py-16 xl:px-24">
				<div className="mx-auto max-w-7xl">
					<div className="mb-8 flex flex-col items-start justify-between lg:mb-12 lg:flex-row lg:items-center">
						<div className="mb-8 lg:mb-0">
							<h1 className="text-2xl font-bold md:text-3xl">audiophile</h1>
						</div>
						<nav className="flex flex-col gap-4 lg:flex-row lg:gap-8">
							{navItems.map((item) => (
								<NavItem key={item.name} href={item.href} name={item.name} />
							))}
						</nav>
					</div>

					<div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
						<div>
							<p className="text-sm leading-relaxed text-gray-400 lg:text-base">
								Audiophile is an all in one stop to fulfill your audio needs.
								We&apos;re a small team of music lovers and sound specialists
								who are devoted to helping you get the most out of personal
								audio. Come and visit our demo facility - we&apos;re open 7 days
								a week.
							</p>
						</div>

						<div className="flex items-end justify-start lg:justify-end">
							<div className="flex gap-4">
								<BrandLink href="#" label="Facebook" icon={<FacebookIcon />} />
								<BrandLink href="#" label="Twitter" icon={<TwitterIcon />} />
								<BrandLink
									href="#"
									label="Instagram"
									icon={<InstagramIcon />}
								/>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-800 pt-8">
						<p className="text-sm text-gray-500">
							Copyright &copy; 2025. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
