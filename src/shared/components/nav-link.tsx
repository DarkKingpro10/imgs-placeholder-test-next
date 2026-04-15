"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all
        ${
					isActive
						? "bg-zinc-900 text-white dark:bg-white dark:text-black"
						: "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
				}
      `}
		>
			{children}
		</Link>
	);
}
