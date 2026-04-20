// app/api/slow-image/route.ts
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const seed = searchParams.get("seed") || Date.now().toString();

	await new Promise((resolve) => setTimeout(resolve, 3000));

	const resImg = await fetch(`https://picsum.photos/200/300?random=${seed}`);

	const blob = await resImg.blob();

	return new Response(blob, {
		headers: {
			"Content-Type": "image/jpeg",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
		},
	});
}
