import Link from "next/link";

const NavItem = ({ name, href }: { name: string; href: string }) => {
	return (
		<Link href={href} className="text-white hover:text-yellow-500">
			<span className="text-sm font-bold">{name.toUpperCase()}</span>
		</Link>
	);
};

export default NavItem;
