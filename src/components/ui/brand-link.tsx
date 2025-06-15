import Link from "next/link";

const BrandLink = ({
	href,
	name,
	icon,
	label = "Brand Item",
}: {
	href: string;
	name?: string;
	icon?: React.ReactNode;
	label?: string;
}) => {
	return (
		<Link
			href={href}
			className="text-white transition-colors duration-300 hover:text-yellow-500"
			aria-label={label}
		>
			{icon && <>{icon}</>}
			{name && <span className="ml-2 text-sm font-medium">{name}</span>}
		</Link>
	);
};

export default BrandLink;
