import ReloadButton from "../components/reload-button";

export default function HeaderPage({
	id = "explanation",
	title,
	description,
	linkLabel,
	reloadLabel,
}: {
	id?: string;
	title: string;
	description: string;
	linkLabel: string;
	reloadLabel: string;
}) {
	return (
		<header className="space-y-4">
			<div className="space-y-2">
				<h1 className="text-4xl font-bold tracking-tight">{title}</h1>
				<p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
					{description}
				</p>
			</div>
			<p className="flex flex-wrap items-center gap-3">
				<a href={`#${id}`} className="text-blue-500 hover:underline">
					{linkLabel}
				</a>
				<ReloadButton label={reloadLabel} />
			</p>
		</header>
	);
}
