"use client";

export default function ReloadButton({
	label,
}: {
	label: string;
}) {

	const refresh = () => {
		window.location.reload();
	};
	return (
		<button
			onClick={refresh}
			type="button"
			className="cursor-pointer rounded-full bg-foreground p-2 text-sm text-background underline"
		>
			{label}
		</button>
	);
}
