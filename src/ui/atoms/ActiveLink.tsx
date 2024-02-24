"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface Props {
	href: string;
	children: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}

const ActiveLink = ({ href, children, className, activeClassName, exact }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	const attrs: { [key: string]: string } = {};
	if (isActive) {
		attrs["aria-current"] = "page";
	}
	return (
		<Link
			href={{ pathname: href }}
			className={clsx(
				!className && "text-blue-400 hover:text-blue-600",
				className,
				isActive && !activeClassName && "underline",
				isActive && activeClassName,
			)}
			exact={exact}
			{...attrs}
		>
			{children}
		</Link>
	);
};

export default ActiveLink;
