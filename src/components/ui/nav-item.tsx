import Link from "next/link";

const NavItem = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link
      href={href}
      className="text-white hover:text-yellow-500 transition-colors duration-300 font-medium tracking-wide"
    >
      {name.toUpperCase()}
    </Link>
  );
};

export default NavItem;
