import Link from "next/link";

const NavItem = ({ name, href }: { name: string; href: string }) => {
	return (
		<Link
			href={href}
			className="font-semi-bold tracking-wider text-white uppercase hover:text-yellow-600"
		>
			{name}
		</Link>
	);
};

export default NavItem;
