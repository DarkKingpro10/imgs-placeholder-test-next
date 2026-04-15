"use client";

export default function ReloadButton() {

	const refresh = () => {
		window.location.reload();
	};
	return (
		<button
			onClick={refresh}
			type="button"
			className="underline p-2 text-sm bg-foreground text-background rounded-full cursor-pointer"
		>
			Reload page
		</button>
	);
}
