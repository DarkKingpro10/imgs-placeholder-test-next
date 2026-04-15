import ReloadButton from "../components/reload-button";

export default function HeaderPage({
	id = "explanation",
	title,
}: {
	id?: string;
	title: string;
}) {
	return (
		<header>
			<h1 className="text-4xl font-bold">Image Gallery - {title}</h1>
			<p className="space-x-1.5">
				Once loaded, see the explanation below the gallery{" "}
				<a href={`#${id}`} className="text-blue-500 hover:underline">
					See explanation
				</a>
				<ReloadButton />
			</p>
		</header>
	);
}
