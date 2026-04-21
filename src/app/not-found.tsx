import Link from "next/link";

export default function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
			<div className="max-w-xl text-center p-8">
				<h1 className="text-3xl font-semibold mb-4">Página no encontrada</h1>
				<p className="text-zinc-600 dark:text-zinc-400 mb-6">Lo sentimos, la ruta que buscas no existe o fue movida.</p>
				<div className="flex items-center justify-center gap-4">
					<Link href="/" className="rounded bg-zinc-900 text-white px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">Ir al inicio</Link>
					<a
						href="https://github.com/DarkKingpro10/imgs-placeholder-test-next"
						target="_blank"
						rel="noopener noreferrer"
						className="px-3 py-1 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/jesus-esquivel-ramirez/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-3 py-1 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</main>
	);
}
