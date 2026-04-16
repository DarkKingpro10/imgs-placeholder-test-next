"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LocaleSwitchLink({
	locales,
	currentLocale,
	ariaLabel = "Seleccionar idioma",
}: {
	locales?: readonly string[];
	currentLocale?: string;
	ariaLabel?: string;
}) {
	const pathname = usePathname() || "/";
	const router = useRouter();
	const segments = pathname.split("/").filter(Boolean);
	const remainingSegments = segments.length > 1 ? segments.slice(1).join("/") : "";

	const availableLocales = locales ?? ["en", "es"];
	const pathLocale = availableLocales.includes(segments[0] ?? "") ? (segments[0] as string) : currentLocale ?? availableLocales[0] ?? "en";

	const localeLabels: Record<string, string> = {
		en: "English",
		es: "Español",
	};

	function changeLocale(target: string) {
		if (target === pathLocale) {
			return;
		}

		const href = remainingSegments ? `/${target}/${remainingSegments}` : `/${target}`;
		router.push(href);
	}

	return (
		<div className="flex items-center gap-2">
			<select
				aria-label={ariaLabel}
				value={pathLocale}
				onChange={(e) => changeLocale(e.target.value)}
				className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm transition-colors hover:border-zinc-400 focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
			>
				{availableLocales.map((l) => (
					<option key={l} value={l}>
						{localeLabels[l] ?? l}
					</option>
				))}
			</select>
		</div>
	);
}
